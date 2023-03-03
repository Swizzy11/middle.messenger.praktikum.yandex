import tpl from "./tpl";
import Block from "../../core/Block";

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

export default class Input extends Block {
    constructor(props:IAvatar) {
      super("div", props);
    }
  
    render() {
      return this.compile(tpl);
    }
  } 
