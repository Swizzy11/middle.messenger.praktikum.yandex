import { Component } from "../../core/Component";
import tpl from "./tpl";

export interface IUnderline {
  text: string;
}

export default class UnderlineName extends Component {
    constructor(props:IUnderline) {
      super("div", props);
    }
  
    render() {
      return this.compile(tpl);
    }
  } 
