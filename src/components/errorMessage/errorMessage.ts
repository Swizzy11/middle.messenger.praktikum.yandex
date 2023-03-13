import { Component } from "../../core/Component";
import tpl from "./tpl";

export interface IError {
  text: string;
  class: string;
}

export default class errorMessage extends Component {
    constructor(props:IError) {
      super("div", props);
    }
  
    render() {
      return this.compile(tpl);
    }
  } 
