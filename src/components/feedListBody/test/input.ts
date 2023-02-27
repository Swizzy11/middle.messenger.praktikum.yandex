import tpl from "./tpl";
import Block from "../../../core/Block"

export interface ITEST {
  name: string;
  text: string;
  events?: {
    click: (e: any) => void;
}
}

export default class chatsListBodyTEST extends Block {
    constructor(props:ITEST) {
      super("div", props);
    }
  
    render() {
     //@ts-ignore   
      return this.compile(tpl);
    }
  } 
