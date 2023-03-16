import ChatConroller from "../../../service/controllers/chatController";
import Store from "../../core/store";
import newMessage from "../chatMessage/newMessage/newMassage";

import getOldMessage from "../chatMessage/oldMessage/oldMessage";

function chatsListBody() {
    const feed_body = <HTMLElement>document.querySelector(".feed_body")
    if(feed_body !== null){
        feed_body.innerHTML = ""
    }

    if(Store.getState().chats !== undefined){

    const userId = Store.getState().user.id;
    const chat = new ChatConroller()
    const chats = Store.getState().chats.message;
    const lengthChats = Object.keys(chats).length
    const root = <HTMLElement>document.querySelector("#root")

        let token;
        let socket;

    for(let i = 0; i < lengthChats; i++) {
        const chatId:any = Store.getState().chats.message[i].id;
        let lastMessage;

        if(Store.getState().chats.message[i].last_message === null) {
            lastMessage = ""
        }else{ 
            lastMessage = Store.getState().chats.message[i].last_message.content
        }

        
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
        message_you.textContent = `[ChatID: ${chatId}] ${lastMessage}  `

        let delete_chat = document.createElement("div")
        delete_chat.className = "delete_chat"
        delete_chat.textContent = "x"

        text_info.appendChild(name_people)
        text_info.appendChild(message_you)

        feed_element.appendChild(photo)
        feed_element.appendChild(text_info)

        feed_element.appendChild(delete_chat)

        delete_chat.addEventListener("click", async ()=>{
            let confirm_message = confirm(`Удалить чат ${title}?`)
            

            if(confirm_message === true) {

                    await chat.deleteChatByID(chatId)
                    console.log(`Чат: ${title} ID:${chatId} удалён`);

                    
                    await chat.getChats()
                    chatsListBody()

            }else {
                console.log(`Чат: ${title} не удалён`)
            }
        })


        name_people.addEventListener("click", async ()=> {
                const chatId:any = Store.getState().chats.message[i].id;

                setTimeout(()=>{let chatName = <HTMLElement>document.querySelector(".chat_name")
                
                chatName.innerHTML += `Chat: ${Store.getState().chats.message[i].title}`}, 500)

                
                if(Store.getState().currentChat !== "" || Store.getState().currentChat !== undefined) {
                    Store.set("current", chatId);
                }
               
                await chat.getToken(chatId) 
               
            
                
                token = Store.getState().tokenSet.token;
                socket = new WebSocket(`wss://ya-praktikum.tech/ws/chats/${userId}/${chatId}/${token}`);
                Store.set("socket", socket)
                
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
                            try{
                                let lastMessage;
                                const data = JSON.parse(event.data);
                                if(event.data === undefined || event.data === "WS token is not valid") {
                                    lastMessage = ""
                                    
                                }else if(data.type === "user connected") {
                                    console.log(data.type);
                                }else if(data.type === "message"){
                                    
                                    let name = data.user_id
                                    let message = data.content;
                                    let time = data.time;

                                    
                                    if(Store.getState().user.id !== name){newMessage(message,time,name)}
                                }
                                else {
                                    Store.set("lastMessage", "")
                                    
                                    lastMessage = data
                                    Store.set(`lastMessage`, lastMessage);
                                   
                                    const chats = Store.getState().lastMessage;
                                    const lengthChats = Object.keys(chats).length

                                    for(let i = 0; i < lengthChats; i++) {
                                        
                                        let oldMessage = lastMessage;
                                        let name:string; 
                                      
                                        if(lastMessage[i] !== undefined) {
                                         
                                            name = lastMessage[i].user_id
                                        }
                                        else{
                                            name = ""
                                        }
                                        if(oldMessage[i] === undefined) {
                                            return
                                        }
                                     
                                        let friend_id = lastMessage[i].user_id;
                                       
                                        let message_time = lastMessage[i].time
                                        getOldMessage(name, oldMessage[i].content, ".chat",friend_id, message_time);
                                            
                                    }
                                }
                            }catch(error) {
                                console.log("error", error)
                            }

                        });
                            
               
            

        })

        feed_body?.appendChild(feed_element)
    }

    
    }
    
    
}



export default chatsListBody
