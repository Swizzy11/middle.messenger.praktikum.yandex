import tpl from "./tpl";
import { Component } from "../../core/Component";

export interface IAvatar {
  type: string;
  name: string;
  class: string;
  accept: string;
  formClassAvatar:string,
  userPhoto: string,
  buttonUpdataAvatar:any,
  formId:string,
  events?: {
    submit: (e: Event) => void;
  }
}

export default class Input extends Component {
    constructor(props:IAvatar) {
      super("div", props);
    }
  
    render() {
      return this.compile(tpl);
    }
  } 
