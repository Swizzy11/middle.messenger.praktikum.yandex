import tpl from "./tpl";
import Block from "../../../core/Block"

export interface ITEST {
  name: string;
  text: string;
  events?: {
    click: (e: Event) => void;
}
}

export default class chatsListBodyTEST extends Block {
    constructor(props:ITEST) {
      super("div", props);
    }
  
    render() { 
      return this.compile(tpl);
    }
  } 
