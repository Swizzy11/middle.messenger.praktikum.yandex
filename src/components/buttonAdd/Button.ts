import Block from "../../core/Block";
import tmp from "./tmp";


export interface IButton {
  chatID?:string;
  userID?:string;
  inputUserID?:any;
  inputChatID?:any;
  buttonAddChat:any;
  closeModal:any;
  modalName:string;
  inputSend: any;
  modalID:string;
  passwordID?:string;
  passwordRepeatID?:string;
  password?:any;
  passwordRepeat?:any;
  errorMessage?: any;
  oldPasswordID?: string;
  oldPassword?: any;
  events?: {
    click: (e: Event) => void;
  }
}
export default class Button extends Block {
    constructor(props:IButton) {
      super("div", props)
    }
  
    render() {
      return this.compile(tmp);
    }
  } 
