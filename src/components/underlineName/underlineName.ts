import Block from "../../core/Block";
import tpl from "./tpl";

export interface IUnderline {
  text: string;
}

export default class UnderlineName extends Block {
    constructor(props:IUnderline) {
      super("div", props);
    }
  
    render() {
      return this.compile(tpl);
    }
  } 
