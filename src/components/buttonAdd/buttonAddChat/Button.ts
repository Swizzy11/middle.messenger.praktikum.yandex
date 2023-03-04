import Block from "../../../core/Block";
import tmp from "./tmp";

export interface IButton {
  child?:string;
  class: string;
  events?: {
    click: (e: Event) => void;
  }
}
export default class buttonAddChat extends Block {
    constructor(props:IButton) {
      super("div", props);
    }
  
    render() {
      return this.compile(tmp);
    }
  } 
