import tpl from "./tpl";
import Block from "../../core/Block";

export interface IInput {
  type: string;
  name?: string;
  class: string;
  placeholder?: string;
  events?: {
    focusin: () => void
}
}

export default class Input extends Block {
    constructor(props:IInput) {
      super("div", props);
    }
  
    render() {
     //@ts-ignore   
      return this.compile(tpl);
    }
  } 
