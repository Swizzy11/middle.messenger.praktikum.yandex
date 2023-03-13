import { Component } from "../../core/Component";
import tmp from "./tmp";

export interface IModalWindow {
  child?:string;
  events?: {
    click: (e: Event) => void;
  }
}
export default class buttonAddChat extends Component {
    constructor(props:IModalWindow) {
      super("div", {

        
      });
    }
  
    render() {
      return this.compile(tmp);
    }
  } 
