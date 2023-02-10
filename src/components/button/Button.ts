import Block from "../../core/Block";
import tmp from "./tmp.hbs";

export interface IButton {
  type?: string;
  name?: string;
  className: string;
  placeholder?: string;
  child: string;
  events: {
    click: (e: any) => void;
  }
}
export default class Button extends Block<IButton> {
    constructor(props:IButton) {
      super("div", props);
    }
  
    render() {

      return this.compile(tmp, {
        className: this.props.className,
        child: this.props.child
      });
    }
  } 
