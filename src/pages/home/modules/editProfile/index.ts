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

const router = new Router("#root")



export default Connect(
        EditProfile,
        (state) => {
                if(Store.getState() !== undefined) {
                        return {

                                avatar: new Avatar({
                                        formClassAvatar: "avatarForm",
                                        type: "file",
                                        class: "avatar",
                                        name: "avatar",
                                        accept: "image/*",
                                        //@ts-ignore
                                        userPhoto: Store.getState().user.avatar
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
                                                click: (e) => {
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
                                                                const editAvatar = new UserConroller()
        
                                                                // const userForm = <HTMLFormElement>document.querySelector(".avatarForm")
                                                                // const form = new FormData(userForm)
        
                                                                // editAvatar.updateAvatar(form)
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
                                                        router.go("/messanger")
                                                }
                                        }
                                })
                                
                        }
                }
                
                        }
)
