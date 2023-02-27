import Block from "../../core/Block";
import { buttonCloseModal } from "./butoonCloseModal";
import { buttonAddChat } from "./buttonAddChat";
import tmp from "./tmp";
import { buttonSendInfo } from "../buttonSendInfo";
import { ChatConroller } from "../../../service/controllers/chatController";

export interface IButton {
  chatID?:string;
  userID?:string;
  inputUserID?:any;
  inputChatID:any;
  buttonAddChat:any;
  closeModal:any;
  modalName:string;
  inputSend: any;
  modalID:string;
  events?: {
    click: (e: any) => void;
  }
}
export default class Button extends Block {
    constructor(props:IButton) {
      super("div", props)
    }
  
    render() {
      //@ts-ignore
      return this.compile(tmp);
    }
  } 
