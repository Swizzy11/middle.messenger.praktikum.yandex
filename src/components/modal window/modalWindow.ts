import Block from "../../core/Block";
import tmp from "./tmp";
import { buttonSendInfo } from "../buttonSendInfo";
import { ChatConroller } from "../../../service/controllers/chatController";
import { buttonCloseModal } from "../buttonAdd/butoonCloseModal";

export interface IModalWindow {
  child?:string;
  events?: {
    click: (e: any) => void;
  }
}
export default class buttonAddChat extends Block {
    constructor(props:IModalWindow) {
      super("div", {

        
      });
    }
  
    render() {
      //@ts-ignore
      return this.compile(tmp);
    }
  } 