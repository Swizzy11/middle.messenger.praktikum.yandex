import validator from "../../../../utils/validator";
import { Input } from "../../../../components/input";
import Button from "../../../../components/buttonSendInfo/Button";
import Router from "../../../../utils/router"

import Login from "./loginPage";
import AutheficationController from "../../../../../service/controllers/authController";
import { Connect } from "../../../../../service/store";
import Store from "../../../../../service/store";
import ChatConroller from "../../../../../service/controllers/chatController";
import chatsListBody from "../../../../components/feedListBody/tmp";
const router = new Router("#root")

export default Connect(
        Login,
        (state) => {
                if(Store.getState() === undefined) {
                        const userApi = new AutheficationController
                        const userInfo = userApi.userInfo()
                        Store.set("user", userInfo)
                }
               return {
                login: new Input({
                        type: "text",
                        name: "login",
                        class: "input_common login",
                        events: {
                                focusin: () => {
                                        validator("login")
                                }
                        }
                }),
                password: new Input({
                        type: "password",
                        name: "password",
                        class: "input_common password",
                        events: {
                                focusin: () => {
                                        validator("password")
                                }
                        }
                }),
                buttonEnter: new Button({
                        className:"btn btn_enter",
                        child: "Войти",
                        type:"submit",
                        events: {
                                click: (e: MouseEvent) => {
                                        const loginData:any = {};
                                        validator("login");
                                        validator("password");
                                        if(validator("login") === true 
                                        && validator("password") === true) {
                                                document.querySelectorAll("form input").forEach((e: HTMLInputElement)=>{
                                                    loginData[e.name] = e.value;     
                                                })
                                                const au = new AutheficationController()
                                                au.signIn(loginData)
                                                
                                                setTimeout( ()=>{const chats = new ChatConroller()
                                                chats.getChats()}, 300)
                                                
                                                setTimeout(()=>chatsListBody(), 2000)
                                        }
                                }
                        }
                }),
                buttonNoAccount: new Button({
                        className:"btn btn_no_account",
                        child: "Нет аккаунта?",
                        type:"button",
                        events: {
                                click: (e: MouseEvent) => {
                                    e.preventDefault();
                                    router.go("/registration")
                                }
                        }
                })
               }
        }
        )
