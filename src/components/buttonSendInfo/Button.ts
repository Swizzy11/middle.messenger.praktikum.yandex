import Block from "../../core/Block";
import tmp from "./tmp";

export interface IButton {
  type?: string;
  name?: string;
  className: string;
  placeholder?: string;
  child?: string;
  events?: {
    click?: (e: any) => void;
    submit?: (e:any) => void;
  }
}
export default class Button extends Block {
    constructor(props:IButton) {
      super("div", props);
    }
  
    render() {
      //@ts-ignore
      return this.compile(tmp);
    }
  } 
