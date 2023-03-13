import tpl from "./tpl";
import { Component } from "../../core/Component";

export interface IInput {
  type: string;
  name?: string;
  class: string;
  placeholder?: string;
  events?: {
    focusin: () => void
}
}

export default class Input extends Component {
    constructor(props:IInput) {
      super("div", props);
    }
  
    render() {  
      return this.compile(tpl);
    }
  } 
