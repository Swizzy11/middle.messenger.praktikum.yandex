import validator from "../../utils/validator";
import { Input } from "../../components/input";
import Button from "../../components/buttonSendInfo/Button";
import Router from "../../core/router"

import Login from "./loginPage";
import AutheficationController from "../../../service/controllers/authController";
import {Connect}  from "../../core/store";

import ChatConroller from "../../../service/controllers/chatController";
import chatsListBody from "../../components/feedListBody/tmp";
import { Signin } from "../../../service/interfaceAPI";


const router = new Router("#root")

export default Connect(
        Login,
        (state) => {
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
                                        const loginData:Signin = {
                                                login: "",
                                                password: ""
                                        };
                                        validator("login");
                                        if(validator("login") === true ) {
                                                
                                                let login:any = document.querySelector("form div .login")
                                                let password:any = document.querySelector("form div .password")
                                                loginData[login.name] = login.value
                                                loginData[password.name] = password.value
                                                
                                                const au = new AutheficationController()

                                                setTimeout(()=> au.signIn(loginData), 150)
                                                setTimeout( ()=> {
                                                        const chats = new ChatConroller()
                                                        chats.getChats()}
                                                        , 1000)
                                                
                                                setTimeout(()=> chatsListBody(), 2000)
                                                
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
