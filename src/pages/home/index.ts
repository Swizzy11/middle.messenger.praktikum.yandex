import { UnderlineName } from "../../components/underlineName";
import Button from "../../components/buttonSendInfo/Button";
import validator from "../../utils/validator";
import { Input } from "../../components/input";
import Router from "../../utils/router"
import AutheficationController from "../../../service/controllers/authController";

import mainPage from "./mainPage";

import { Connect } from "../../../service/store";
import Store from "../../../service/store";
import { buttonAdd } from "../../components/buttonAdd";
import ChatConroller from "../../../service/controllers/chatController";

import sendMessage from "../../components/chatMessage/chatMessage";

import chatsListBody from "../../components/feedListBody/tmp";
import { buttonAddChat } from "../../components/buttonAdd/buttonAddChat";
import { buttonSendInfo } from "../../components/buttonSendInfo";
import { buttonCloseModal } from "../../components/buttonAdd/butoonCloseModal";

const router = new Router("#root")


export default Connect(
        mainPage,
        (state) => {
                if (window.performance) {
                        if (performance.navigation.type === 1) {   
                        setTimeout(()=>chatsListBody(), 1000)
                        } 
                      }
                
                const chat = new ChatConroller()
                //@ts-ignore
                if(Store.getState() === undefined){const userId = Store.getState().user.id;}
                //@ts-ignore
                if(Store.getState().chats !== undefined){
                        //@ts-ignore
                        const chatId:any = Store.getState().chats.message[0].id;
        
                        return {
                                //@ts-ignore
                                avatar:`<img class="user_photo_chat" src="${Store.getState().user.avatar}">`,
        
                                userName: new UnderlineName({
                                        //@ts-ignore
                                       text: `${Store.getState().user.first_name} ${Store.getState().user.second_name}`
                                }),
                                buttonProfile: new Button({
                                        className: "btn_profile",
                                        child:"profile",
                                        events: {
                                                click: () => {
                                                    const profile = new AutheficationController();
                                                    profile.userInfo();
                                                    router.go("/profile")
                                                    
                                                }
                                        }
                                    }),
                        
                                buttonLogout:new Button({
                                        className: "btn_logout",
                                        child:"logout",
                                        events: {
                                                click: () => {
                                                    const logout = new AutheficationController();
                                                    logout.logout()
                                                    const feedBar = <HTMLElement>document.querySelector(".feed_body");
                                                    console.clear()
                                                    feedBar.innerHTML = ""
                                                    
                                                }
                                        }
                                    }),
                        
                                buttonUploud: new Button({
                                        className: "btn btn_upload",
                                        child: ``,
                                        type: "button",
                                        events:{
                                                click: (e) => {
                                                        e.preventDefault()
                                                        console.log("Загрузить изображение?")
                                                }
                                        }
                                    }),
                        
                                buttonSend: new Button({
                                        className: "btn btn_send",
                                        child: ``,
                                        type: "button",
                                        events:{
                                                click: (e) => {
                                                        e.preventDefault()
                                                        if(validator("input_message") === true){    
                                                                const elem = <HTMLInputElement>document.querySelector(".input_message")
                                                                
                                                                        const text = elem.value;
                                                                        //@ts-ignore
                                                                        const token = Store.getState().token.token
                                                                        //@ts-ignore
                                                                        const name = Store.getState().user.first_name;
                                                                        //@ts-ignore
                                                                        const socket = new WebSocket(`wss://ya-praktikum.tech/ws/chats/${userId}/${chatId}/${token}`);
                                                                        
                                                                        if(elem) {
                                                                                socket.addEventListener("open", (e) => {
                                                                                        
                                                                                        socket.send(JSON.stringify({
                                                                                                content: text,
                                                                                                type: "message",
                                                                                            }));
                                                                                })
                                                                        }
                                                                        
                                                                
                                                                        window.scrollTo({
                                                                                top: 0,
                                                                                left: 0,
                                                                                behavior: 'smooth'
                                                                              });
                                                                        elem.value = ""
                                                                    //@ts-ignore
                                                                        sendMessage(name, text, ".chat")
                                                                }
                                                        }
                                                }
                                        }),
                                
                                inputMessage: new Input({
                                        type: "text",
                                        name: "message",
                                        class: "input_message",
                                        placeholder: "Написать сообщение...",
                                    }),
                        
                                inputSearch: new Input({
                                        type: "text",
                                        name: "message",
                                        class: "input_search",
                                        placeholder: "Название чата",
                                    }),
                                addChat: new buttonAdd({
                                        modalID: "myModalChatAdd",
                                        buttonAddChat: new buttonAddChat({
                                                child: "Добавить чат",
                                                class: "myBtn",
                                                events: {
                                                  click: (e) => {
                                                    e.preventDefault()
                                                    let modal:any = document.getElementById('myModalChatAdd');
                                                    modal.style.display = "block";
                                                  }
                                                }
                                              }),
                                        modalName: "Напишите название чата",
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
                                              }),
                                              closeModal: new buttonCloseModal({
                                                events: {
                                                  click: () => {
                                                    let modal:any = document.getElementById('myModalChatAdd');               
                                                      let span:any = document.getElementsByClassName("close")[0];
                                                      span.addEventListener("click", function() {
                                                              modal.style.display = "none";
                                                              }) 
                                                  }
                                                }
                                              }),
                                              inputChatID: new Input({
                                                class: "input_common add_chat_input",
                                                type: "text"
                                              }),
                                }),
                                addUserToChat: new buttonAdd({
                                        modalID:"myModalUserAdd",
                                        buttonAddChat: new buttonAddChat({
                                                child: "Добавить пользователя в чат",
                                                class: "myBtn",
                                                events: {
                                                  click: (e) => {
                                                    e.preventDefault()
                                                    let modal:any = document.getElementById('myModalUserAdd');
                                                    modal.style.display = "block";
                                                  }
                                                }
                                              }),
                                        modalName: "Напишите id пользователя",
                                        inputSend: new buttonSendInfo({
                                                className: 'btn btn_add',
                                                child: "Add",
                                                events: {
                                                  click: (e) => {
                                                    e.preventDefault()
                                                        const nameChatInput = document.querySelectorAll(".add_chat_user")
                                                        let userId;
                                                        let chatId;
                                                        nameChatInput.forEach((e:HTMLInputElement, count:number = 0)=> {
                                                                if(count === 0) {
                                                                        chatId = Number(e.value);
                                                                }else{
                                                                        userId = Number(e.value);
                                                                }
                                                      })
                                                        const chats = new ChatConroller();
                                                        chats.addUserToChat({users: [userId], chatId: chatId})
                                      
                                                        setTimeout(()=> {chats.getChats()}, 50)
                                                  }
                                                }
                                              }),
                                        closeModal: new buttonCloseModal({
                                                events: {
                                                  click: () => {
                                                    let modal:any = document.getElementById('myModalUserAdd');               
                                                      let span:any = document.getElementsByClassName("close")[1];
                                                      span.addEventListener("click", function() {
                                                              modal.style.display = "none";
                                                              }) 
                                                  }
                                                }
                                              }),
                                        chatID: "ChatID:",
                                        userID: "UserID:",
                                        inputChatID: new Input({
                                                class: "input_common add_chat_user",
                                                type: "text",
                                        }),
                                        inputUserID: new Input({
                                                class:"input_common add_chat_user",
                                                type: "text",
                                        }),
                                }),
                                deleteUserToChat: new buttonAdd({
                                        modalID:"myModalUserDelete",
                                        buttonAddChat: new buttonAddChat({
                                                child: "Удалить пользователя из чат",
                                                class: "myBtn_delete",
                                                events: {
                                                  click: (e) => {
                                                    e.preventDefault()
                                                    let modal:any = document.getElementById('myModalUserDelete');
                                                    modal.style.display = "block";
                                                  }
                                                }
                                              }),
                                        modalName: "Напишите id пользователя",
                                        inputSend: new buttonSendInfo({
                                                className: 'btn btn_delete',
                                                child: "DELETE",
                                                events: {
                                                  click: (e) => {
                                                    e.preventDefault()
                                                        const nameChatInput = document.querySelectorAll(".delete_chat_user")
                                                        let userId;
                                                        let chatId;
                                                        nameChatInput.forEach((e:HTMLInputElement, count:number = 0)=> {
                                                                if(count === 0) {
                                                                        chatId = Number(e.value);
                                                                }else{
                                                                        userId = Number(e.value);
                                                                }
                                                      })
                                                        const chats = new ChatConroller();
                                                        chats.deleteUserToChat({users: [userId], chatId: chatId})
                                      
                                                        setTimeout(()=> {chats.getChats()}, 50)
                                                  }
                                                }
                                              }),
                                        closeModal: new buttonCloseModal({
                                                events: {
                                                  click: () => {
                                                    let modal:any = document.getElementById('myModalUserDelete');               
                                                      let span:any = document.getElementsByClassName("close")[2];
                                                      span.addEventListener("click", function() {
                                                              modal.style.display = "none";
                                                              }) 
                                                  }
                                                }
                                              }),
                                        chatID: "ChatID:",
                                        userID: "UserID:",
                                        inputChatID: new Input({
                                                class: "input_common delete_chat_user",
                                                type: "text",
                                        }),
                                        inputUserID: new Input({
                                                class:"input_common delete_chat_user",
                                                type: "text",
                                        }),
                                }),
                        }}
                
        }

)
