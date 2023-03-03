import Block from "../../core/Block";
import tmp from "./tmp";

export interface IButtonClose {
  type?: string;
  name?: string;
  className: string;
  placeholder?: string;
  child?: string;
  events?: {
    click: (e: Event) => void;
  }
}
export default class Button extends Block {
    constructor(props:IButtonClose) {
      super("div", props);
    }
  
    render() {
      return this.compile(tmp);
    }
  } 
