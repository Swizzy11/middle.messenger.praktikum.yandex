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

        closeModal: new buttonCloseModal({
          events: {
            click: () => {
              let modal:any = document.getElementById('myModal');               
                let span:any = document.getElementsByClassName("close")[0];
                span.addEventListener("click", function() {
                        modal.style.display = "none";
                        }) 
            }
          }
        }),
        inputSend: new buttonSendInfo({
          className: 'btn btn_add',
          child: "Add",
          events: {
            click: (e) => {
              e.preventDefault()
                const nameChatInput = <HTMLInputElement>document.querySelector(".add_chat_input")
                const chats = new ChatConroller();
                const nameChatInfo = nameChatInput.value

                    chats.createChat({
                     title: nameChatInfo
                    })

                     setTimeout(()=> {chats.getChats()}, 50)
            }
          }
        })
      });
    }
  
    render() {
      //@ts-ignore
      return this.compile(tmp);
    }
  } 
