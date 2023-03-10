import { Component } from "../../core/Component";
import tmp from "./tmp";

export interface IButton {
  type?: string;
  name?: string;
  className?: string;
  placeholder?: string;
  child?: string;
  events?: {
    click?: (e: Event) => void;
    submit?: (e:Event) => void;
  }
}
export default class Button extends Component {
    constructor(props:IButton) {
      super("div", props);
    }
  
    render() {
      return this.compile(tmp);
    }
  } 
