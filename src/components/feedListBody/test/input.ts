import tpl from "./tpl";
import { Component } from "../../../core/Component";

export interface ITEST {
  name: string;
  text: string;
  events?: {
    click: (e: Event) => void;
}
}

export default class chatsListBodyTEST extends Component {
    constructor(props:ITEST) {
      super("div", props);
    }
  
    render() { 
      return this.compile(tpl);
    }
  } 
