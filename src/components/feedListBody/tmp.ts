import ChatConroller from "../../../service/controllers/chatController";
import Store from "../../../service/store";

import getOldMessage from "../chatMessage/oldMessage/oldMessage";

function chatsListBody() {
    const feed_body = <HTMLElement>document.querySelector(".feed_body")
    if(feed_body !== null){
        feed_body.innerHTML = ""
    }
    //@ts-ignore
    if(Store.getState().chats !== undefined){
        //@ts-ignore
    const userId = Store.getState().user.id;
    const chat = new ChatConroller()
    //@ts-ignore
    const name = Store.getState().user.first_name
    //@ts-ignore
    const chats = Store.getState().chats.message;
    const lengthChats = Object.keys(chats).length
    for(let i = 0; i < lengthChats; i++) {
  
        let lastMessage;

        //@ts-ignore
        if(Store.getState().chats.message[i].last_message === null) {
            lastMessage = ""
        }else{ 
        //@ts-ignore
            lastMessage = Store.getState().chats.message[i].last_message.content
        }
        //@ts-ignore
        const title = Store.getState().chats.message[i].title

        let feed_element = document.createElement("div");
        feed_element.className = "feed_element"

        let photo = document.createElement("div");
        photo.className = "photo"

        let text_info = document.createElement("div");
        text_info.className = "text_info"

        let name_people = document.createElement("div");
        name_people.className = "name_people"
        name_people.textContent = title

        let message_you = document.createElement("div");
        message_you.className = "message_you"
        message_you.textContent = lastMessage

        text_info.appendChild(name_people)
        text_info.appendChild(message_you)

        feed_element.appendChild(photo)
        feed_element.appendChild(text_info)
        
        feed_element.addEventListener("click", ()=> {
                //@ts-ignore
                const chatId:any = Store.getState().chats.message[i].id;
                chat.getToken(chatId)
                //@ts-ignore
                const token = Store.getState().token.token;
                const socket = new WebSocket(`wss://ya-praktikum.tech/ws/chats/${userId}/${chatId}/${token}`);
                

                socket.addEventListener("message", event => {
                                Store.set("lastMessage", "")
                                let lastMessage;
                                if(event.data === undefined || event.data === "WS token is not valid") {
                                    lastMessage = ""
                                }else {
                                    lastMessage = JSON.parse(event.data)
                                }
                                Store.set(`lastMessage`, lastMessage)
                            });

                socket.addEventListener("open", () => {
                    socket.send(JSON.stringify({
                        content: 0,
                        type: "get old",
                          }))
                 });
                 //@ts-ignore
                const chats = Store.getState().chats.message;
                const lengthChats = Object.keys(chats).length
                                                        
                setTimeout(()=>{
                    for(let i = 0; i < lengthChats; i++) {
                        //@ts-ignore
                        let oldMessage = Store.getState().lastMessage
                        if(oldMessage[i] === undefined) {
                            return
                        }
                        //@ts-ignore
                        
                        getOldMessage(name,oldMessage[i].content, ".chat")  
                            }}, 1000)

        })

        feed_body?.appendChild(feed_element)
    }
    }
    
    
}


export default chatsListBody;


