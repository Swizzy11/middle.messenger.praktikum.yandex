import Block from "../../../core/Block";
import tmp from "./tmp";

export interface IButton {
  classModalClose?: string;
  events?: {
    click: (e: any) => void;
  }
}
export default class buttonCloseModal extends Block {
    constructor(props:IButton) {
      super("div", props);
    }
  
    render() {
      //@ts-ignore
      return this.compile(tmp);
    }
  } 
