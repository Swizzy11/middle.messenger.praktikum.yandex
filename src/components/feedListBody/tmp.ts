import ChatConroller from "../../../service/controllers/chatController";
import Store from "../../../service/store";
import newMessage from "../chatMessage/newMessage/newMassage";

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
    
    //@ts-ignore
    const chats = Store.getState().chats.message;
    const lengthChats = Object.keys(chats).length
    const btn_send = document.querySelector(".btn_send");    


        let token;
        let socket;

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
                //@ts-ignore
                const currentChat:any = Store.getState().chats.message[i];

                setTimeout(()=>{let chatName = <HTMLElement>document.querySelector(".chat_name")
                //@ts-ignore
                chatName.innerHTML += `Chat: ${Store.getState().chats.message[i].title}`}, 1000)

                //@ts-ignore
                if(Store.getState().currentChat !== "" || Store.getState().currentChat !== undefined) {
                    Store.set("current", chatId);
                }
               
                chat.getToken(chatId)
                
                chat.getToken(chatId)

                
               
            setTimeout(()=>{
                //@ts-ignore
                token = Store.getState().tokenSet.token;
                socket = new WebSocket(`wss://ya-praktikum.tech/ws/chats/${userId}/${chatId}/${token}`);
                Store.set("socket", socket)
                //@ts-ignore
                socket.addEventListener("open", () => {
              
                    socket.send(
                      JSON.stringify({
                        content: "0",
                        type: "get old",
                      })
                    );
                  });
                  socket.addEventListener("close", (event) => {
                    if (event.wasClean) {
                      console.log("Соединение закрыто чисто");
                    } else {
                      console.log("Обрыв соединения");
                    }
              
                    console.log(`Код: ${event.code} | Причина: ${event.reason}`);
                  });
                  
                socket.addEventListener("message", event => {
                                
                                let lastMessage;
                                if(event.data === undefined || event.data === "WS token is not valid") {
                                    lastMessage = ""
                                }else if(JSON.parse(event.data).type === "user connected") {
                                    console.log(JSON.parse(event.data).type);
                                }else if(JSON.parse(event.data).type === "message"){
                                    
                                    let name = JSON.parse(event.data).user_id
                                    let message = JSON.parse(event.data).content;
                                    let time = JSON.parse(event.data).time;

                                    //@ts-ignore
                                    if(Store.getState().user.id !== name){newMessage(message,time,name)}
                                }
                                else {
                                    Store.set("lastMessage", "")
                                    
                                    lastMessage = JSON.parse(event.data)
                                    Store.set(`lastMessage`, lastMessage);
                                    //@ts-ignore
                                    const chats = Store.getState().lastMessage;
                                    const lengthChats = Object.keys(chats).length

                                    for(let i = 0; i < lengthChats; i++) {
                                        //@ts-ignore
                                        let oldMessage = lastMessage;
                                        let name:string; 
                                        //@ts-ignore
                                        if(lastMessage[i] !== undefined) {
                                            //@ts-ignore
                                            name = lastMessage[i].user_id
                                        }
                                        else{
                                            name = ""
                                        }
                                        if(oldMessage[i] === undefined) {
                                            return
                                        }
                                        //@ts-ignore
                                        let friend_id = lastMessage[i].user_id;
                                        //@ts-ignore
                                        let message_time = lastMessage[i].time
                                        getOldMessage(name, oldMessage[i].content, ".chat",friend_id, message_time);
                                            
                                    }
                                }
                                });
                            
                 //@ts-ignore
                },
                            
            100)

        })

        feed_body?.appendChild(feed_element)
    }

    
    }
    
    
}



export default chatsListBody
