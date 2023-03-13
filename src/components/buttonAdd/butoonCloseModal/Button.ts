import { Component } from "../../../core/Component";
import tmp from "./tmp";

export interface IButton {
  classModalClose?: string;
  events?: {
    click: (e: Event) => void;
  }
}
export default class buttonCloseModal extends Component {
    constructor(props:IButton) {
      super("div", props);
    }
  
    render() {
      return this.compile(tmp);
    }
  } 
