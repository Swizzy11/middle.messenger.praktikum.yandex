import { Input } from "../../../../components/input"
import  Button  from "../../../../components/buttonSendInfo/Button"
import validator from "../../../../utils/validator"

import EditProfile from "./editProfilePage"
import { buttonClose } from "../../../../components/bottonClose"
import Router from "../../../../utils/router.js"
import UserConroller from "../../../../../service/controllers/userController"
import { Connect } from "../../../../../service/store"
import { Avatar } from "../../../../components/avatar"
import Store from "../../../../../service/store"
import { buttonAdd } from "../../../../components/buttonAdd"
import { buttonAddChat } from "../../../../components/buttonAdd/buttonAddChat"
import { buttonCloseModal } from "../../../../components/buttonAdd/butoonCloseModal"
import { buttonSendInfo } from "../../../../components/buttonSendInfo"
import comparisonPassword from "../../../../utils/heplerApp/passwordComparison"
import { errorMessage } from "../../../../components/errorMessage"
import validatorPassword from "../../../../utils/validatorPassword"
import addValue from "../../../../utils/heplerApp/addValue"
import AutheficationController from "../../../../../service/controllers/authController"
import chatsListBody from "../../../../components/feedListBody/tmp"


const router = new Router("#root")



export default Connect(
        EditProfile,
        (state) => {

                let avatarlink;
                if(Store.getState().user.avatar !== "null") {
                        avatarlink = `https://ya-praktikum.tech/api/v2/resources/${Store.getState().user.avatar}`
                  }else {
                        avatarlink = ""
                  }
                if(Object.entries(Store.getState()).length !== 0) {
                        return {

                                avatar: new Avatar({
                                        formClassAvatar: "avatarForm",
                                        type: "file",
                                        class: "avatar",
                                        name: "avatar",
                                        accept: "image/*",
                                        userPhoto: `${avatarlink}`,
                                        formId: "avatarUp",
                                        buttonUpdataAvatar: new buttonSendInfo({
                                                type: "button",
                                                className: "avatarUpdate",
                                                child: "Изменить",
                                        }),
                                        events: {
                                                submit: (e:Event) => {
                                                        e.preventDefault()
                                                        const userForm = <HTMLFormElement>document.getElementById("avatarUp")
                                                        
                                                        const form = new FormData(userForm)
                                                        
                                                        const editAvatar = new UserConroller()
                                                        editAvatar.updateAvatar(form);
                                                        const authController = new AutheficationController()
                                                        setTimeout(()=>{
                                                        authController.userInfoAvatar()
                                                        , 500})
                                                        setTimeout(()=>addValue(), 1000)  
                                                }
                                        }
                                }),
        
                                userName: new Input({
                                        type: "text",
                                        name: "first_name",
                                        class: "input_form first_name",
                                        events: {
                                                focusin: () => {
                                                        validator("first_name")
                                                }
                                        }
                                        }),
                                
                                userSurname: new Input({
                                        type: "text",
                                        name: "second_name",
                                        class: "input_form second_name",
                                        events: {
                                                focusin: () => {
                                                        validator("second_name")
                                                }
                                        }
                                        }),
                                
                                email: new Input({
                                        type: "email",
                                        name: "email",
                                        class: "input_form email",
                                        events: {
                                                focusin: () => {
                                                        validator("email")
                                                }
                                        } 
                                        }),
                                login: new Input({
                                        type: "text",
                                        name: "login",
                                        class: "input_form login",
                                        events: {
                                                focusin: () => {
                                                        validator("login")
                                                }
                                        }
                                        }),
                                nameInChat: new Input({
                                        type: "text",
                                        name: "display_name",
                                        class: "input_form display_name",
                                        }),
                                password: new Input({
                                        type: "password",
                                        name: "password",
                                        class: "input_form password",
                                        events: {
                                                focusin: () => {
                                                        validator("password")
                                                }
                                        } 
                                        }),
                                
                                phone: new Input({
                                        type: "text",
                                        name: "phone",
                                        class: "input_form phone",
                                        events: {
                                                focusin: () => {
                                                        validator("phone")
                                                }
                                        } 
                                        }),
                                
                                buttonSave: new Button({
                                        className: "btn btn_save",
                                        child: "Сохранить",
                                        type: "button",
                                        events: {
                                                click: (e:Event) => {
                                                        e.preventDefault();
                                                        const ediData:any = {};
        
                                                        validator("email");
                                                        validator("login")
                                                        validator("phone");
                                                        validator("first_name");
                                                        validator("second_name");
                                                        if(validator("email") === true
                                                        && validator("login") === true
                                                        && validator("phone") === true 
                                                        && validator("first_name") === true
                                                        && validator("second_name") === true) {
                                                                document.querySelectorAll("form input").forEach((e: HTMLInputElement)=>{
                                                                        ediData[e.name] = e.value;     
                                                                })
                                                                const editInfo = new UserConroller()
                                                                
                                                                setTimeout(()=>addValue(), 1000)
                                                                
                                                                editInfo.updateUserData(ediData)
                                                        }                    
                                        }
                                        }
                                }
                                        ),
                                buttonClose: new buttonClose({
                                        className: "btn btn_close",
                                        type:"button",
                                        events: {
                                                click: () => {
                                                        router.go("/messanger");
                                                        setTimeout(()=> chatsListBody(), 1000)
                                                }
                                        }
                                }),

                                buttonChangePassword: new buttonAdd({
                                        errorMessage: new errorMessage({
                                                class: "error_message_pass",
                                                text: ``
                                        }),
                                        buttonAddChat: new buttonAddChat({
                                                child: "Изменить пароль",
                                                class: "myBtn_changePassword",
                                                events: {
                                                  click: (e:Event) => {
                                                    e.preventDefault()
                                                    let modal:any = document.getElementById('changePassword');
                                                    modal.style.display = "block";
                                                  }
                                                }
                                              }),
                                        modalID:"changePassword",
                                        modalName: "Изменение пароля",
                                        inputSend: new buttonSendInfo({
                                                className: 'btn btn_add btn_sendPassword',
                                                child: "Change",
                                                events: {
                                                  click: (e:Event) => {
                                                    e.preventDefault()
                                                    
                                                        const modal:any = document.getElementById('changePassword');
                                                        const errorMessage:any = document.querySelector(".error_message_pass");
                                                        const oldPassword:any = document.querySelector(".oldPassword")
                                                        const password:any = document.querySelector(".change_password");
                                                        errorMessage.style.color = "red";
                                                        errorMessage.style.fontSize = "smaller";
                                                        let error_password = <HTMLDivElement>document.querySelector(".error_password") 
                                                        if(validatorPassword("passwordValid") === true) {
                                                                if(oldPassword.value !== "" && oldPassword.value !== undefined){
                                                                        if(comparisonPassword() === true) {
                                                                                errorMessage.innerHTML = ""
                                                                                const userController = new UserConroller();
                                                                                
                                                                                userController.updatePassword(oldPassword.value, password.value)
                                                                                modal.style.display = "none";
                                                                        }else {
                                                                        errorMessage.innerHTML = "Пароли отличаются";
                                                                        errorMessage.style.color = "red";
                                                                        }
                                                                }else {
                                                                        errorMessage.innerHTML = "Впишите старый пароль";  
                                                                }
                                                        }
                                                        
                                                    
                                                        
                                                  }
                                                }
                                              }),
                                        closeModal: new buttonCloseModal({
                                                events: {
                                                  click: () => {
                                                        const modal:any = document.getElementById('changePassword');
                                                        const modalClose = document.getElementsByClassName("close")
                                                        let span:Node;

                                                    if(modalClose.length === 4) {
                                                        span = document.getElementsByClassName("close")[3];
                                                    }else {
                                                        span = document.getElementsByClassName("close")[0];
                                                    }            
                                                      span.addEventListener("click", function() {
                                                              modal.style.display = "none";
                                                              }) 
                                                  }
                                                }
                                              }),
                                        passwordID: "Password:",
                                        passwordRepeatID: "Repeat password:",
                                        oldPasswordID: "Old Password",
                                        oldPassword: new Input({
                                                class: "input_common oldPassword",
                                                type: "text",
                                        }),
                                        password: new Input({
                                                class: "input_common change_password password passwordValid",
                                                type: "text",
                                        }),
                                        passwordRepeat: new Input({
                                                class:"input_common change_password_repeate password",
                                                type: "text",
                                        }),
                                })
                                
                        }
                }
                
                        }
)
