import EventBus from "./eventBus";
import { v4 as makeUUID } from "uuid";

type StyleType = {
  display: string;
};

type MetaType = {
  tagName: string, 
  props: {
    [key: string]: {[key: string]: string}},
};

type ElementType = Node & {
    innerHTML: string;
    append: (value: DocumentFragment) => void;
    addEventListener: (value: string, value1:  string) => void;
    removeEventListener: (value: string, value2: string) => void;
    style: StyleType;
};

type Props = {
  [key: string]: {[key: string]: string}
}

export default class Block<PropsAndChildrenType> {
  static EVENTS = {
    INIT: "init",
    FLOW_CDM: "flow:component-did-mount",
    FLOW_CDU: "flow:component-did-update",
    FLOW_RENDER: "flow:render",
  };
  
  _element: ElementType;
  _meta: MetaType;
  eventBus: EventBus;
  props: Props;
  children: Block<PropsAndChildrenType>;
  _id: string | null = null;

  constructor(tagName = "div", propsAndChildren: PropsAndChildrenType) {
    const eventBus = new EventBus();
    const { children, props } = this._getChildren(propsAndChildren);
    
    this.eventBus = eventBus;

    this._meta = {
      tagName,
      props,
    };

    this._id = makeUUID();

    this.children = this._makePropsProxy(children);
    this.props = this._makePropsProxy({ ...props, __id: this._id });

    this._registerEvents(eventBus);
    eventBus.emit(Block.EVENTS.INIT);
  }

  _registerEvents(eventBus: EventBus): void {
    eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
    eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
  }

  _createDocumentElement(tagName: string): ElementType {
    const element = document.createElement(tagName);
    element.setAttribute("data-id", this._id ?? '');
    return (element as any as ElementType);
  }

  _createResources() {
    const { tagName } = this._meta;
    this._element = this._createDocumentElement(tagName);
  }

  init() {
    this._createResources();
    this.eventBus.emit(Block.EVENTS.FLOW_RENDER);
  }

  _render() {
    const block = this.render();
    this._removeEvents();
    this._element.innerHTML = "";
    this._element.append(block);
    this._addEvents();
  }

  render(): DocumentFragment {
    return new DocumentFragment
  }

  _componentDidMount() {
    this.componentDidMount();

    Object.values(this.children).forEach((child: Block<PropsAndChildrenType>) => {
      child.dispatchComponentDidMount();
    });
  }

  componentDidMount(): boolean {
    return true;
  }

  dispatchComponentDidMount(): void {
    this.eventBus.emit(Block.EVENTS.FLOW_CDM)
    if(Object.keys(this.children).length) {
      this.eventBus.emit(Block.EVENTS.FLOW_RENDER)
    }
  }

  _componentDidUpdate(oldProps: PropsAndChildrenType, newProps: PropsAndChildrenType) {
    const response = this.componentDidUpdate(oldProps, newProps);
    if (!response) {
      return;
    }

    this._render();
  }

  componentDidUpdate(oldProps: PropsAndChildrenType, newProps: PropsAndChildrenType): boolean {
    return true;
  }

  setProps = (nextProps: PropsAndChildrenType) => {
    if (!nextProps) {
      return;
    }

    Object.assign(this.props, nextProps);
  };

  get element(): ElementType {
    return this._element;
  }

  getContent(): ElementType {
    return this.element;
  }

  _getChildren(propsAndChildren: PropsAndChildrenType) {
    const children = {};
    const props = {};

    Object.entries(propsAndChildren as Record<string, unknown>).forEach(([key, value]) => {
      if (value instanceof Block) {
        children[key] = value;
      } else {
        props[key] = value;
      }
    });
    return { children, props };
  }

  compile(template:(prop: Record<string, unknown>) => string, props: Record<string, unknown>) {
    const propsAndStubs = { ...props };

    Object.entries(this.children).forEach(([key, child]) => {
      propsAndStubs[key] = `<div data-id="${child._id}"></div>`;
    });

    const html = template(propsAndStubs)

    const fragment = document.createElement("template")

    fragment.innerHTML = html

    Object.values(this.children).forEach((child) => {
      const stub = fragment.content.querySelector(`[data-id="${child._id}"]`);
      
      if(!stub) {
        return
      }
      stub.replaceWith(child.getContent())

    });

    return fragment.content;
  }

  _makePropsProxy(props: any) {
    const self = this;

    return new Proxy(props, {
      get(target: {[key: string]: () => {} | {[key: string]: string | number | boolean}},
      prop: string) {
        const value = target[prop];
        return typeof value === "function" ? value.bind(target) : value;
      },
      set(target: {[key: string]: () => {} | {[key: string]: string | number | boolean}}, prop:string, value) {
        target[prop] = value;

        self.eventBus.emit(Block.EVENTS.FLOW_CDU, { ...target }, target);
        return true;
      },
      deleteProperty() {
        throw new Error("Нет доступа");
      },
    });
  }

  
  _addEvents(): void {
    const { events = {} } = this.props;

    if (!events) {
      return;
    }

    Object.keys(events).forEach((eventName) => {
      this._element.addEventListener(eventName, events[eventName]);
    });
  }

  _removeEvents(): void {
    const { events = {} } = this.props;

    if (!events || !this._element) {
      return;
    }

    Object.keys(events).forEach((eventName) => {
      this._element.removeEventListener(eventName, events[eventName]);
    });
  }

  show() {
    this.getContent().style.display = "block";
  }

  hide() {
    this.getContent().style.display = "none";
  }
}
