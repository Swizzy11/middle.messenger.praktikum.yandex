import Block from "../../core/Block";
import tpl from "./tpl";

export interface IError {
  text: string;
  class: string;
}

export default class errorMessage extends Block {
    constructor(props:IError) {
      super("div", props);
    }
  
    render() {
      return this.compile(tpl);
    }
  } 
