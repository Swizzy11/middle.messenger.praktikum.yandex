import tpl from "./tpl";
import Block from "../../core/Block";

export interface IAvatar {
  type: string;
  name: string;
  class: string;
  accept: string;
  formClassAvatar:string,
  userPhoto: string
}

export default class Input extends Block {
    constructor(props:IAvatar) {
      super("div", props);
    }
  
    render() {
     //@ts-ignore   
      return this.compile(tpl);
    }
  } 
