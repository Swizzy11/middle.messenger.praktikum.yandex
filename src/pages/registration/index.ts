import validator from "../../utils/validator"
import buttonValidator from "../../utils/validatorButton"
import { Input } from "../../components/input"
import Button from "../../components/buttonSendInfo/Button";
import Router from "../../core/router"

import Registration from "./registrationPage"

import AutheficationController from "../../../service/controllers/authController"
import { Connect } from "../../core/store";



const router = new Router("#root")

export default Connect(
        Registration,
        (state) => {
                return {
                        userName: new Input({
                                type: "text",
                                name: "first_name",
                                class: "input_common first_name",
                                events: {
                                        focusin: () => {
                                                validator("first_name")
                                        }
                                }
                            }),
                    
                        userSurname: new Input({
                                type: "text",
                                name: "second_name",
                                class: "input_common second_name",
                                events: {
                                        focusin: () => {
                                                validator("second_name")
                                        }
                                } 
                            }),
                    
                        email: new Input({
                                type: "email",
                                name: "email",
                                class: "input_common email",
                                events: {
                                        focusin: () => {
                                                validator("email")
                                        }
                                } 
                            }),
            
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
                    
                        phone: new Input({
                                type: "tel",
                                name: "phone",
                                class: "input_common phone",
                                events: {
                                        focusin: () => {
                                                validator("phone")
                                        }
                                }
                            }),
                    
                        buttonRegistr: new Button({
                                className: "btn btn_registration",
                                child: `Зарегистрироваться`,
                                type: "button",
                                events: {
                                        click: (e: MouseEvent) => {
                                                if(buttonValidator()) {
                                                    e.preventDefault();
                                                    const regData = buttonValidator();
                                                    const reg = new AutheficationController();
                                                    reg.signUp(regData);
                                                    router.go("/messanger")
                                                };
                                        }
                                }
                            }),
                    
                        buttonHasAccount: new Button({
                                className: "btn btn_has_account",
                                child: `Есть аккаунт?`,
                                type: "button",
                                placeholder: "Напишите сообщение...",
                                events: {
                                        click: () => {
                                            router.go("/login")
                                        }
                                }
                            }),
                    
                }
        }
)
