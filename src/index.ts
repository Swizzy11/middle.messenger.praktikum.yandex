import {render} from "./utils/renderDOM"

import './style.scss'


import mainPage from "./pages/home";
import EditProfile from "./pages/home/modules/editProfile";
import Error404 from "./pages/home/modules/error404";
import Error500 from "./pages/home/modules/error500";
import Login from "./pages/home/modules/login";
import Registration from "./pages/home/modules/registration";
import UserProfile from "./pages/home/modules/userProfile";

import { Button } from "./components/button";
import { Input } from "./components/input";
import { FeedList } from "./components/chatPeople";
import { ChatList } from "./components/chatList";
import { UnderlineName } from "./components/underlineName";


import validator from "./utils/validator";
import buttonValidator from "./utils/validatorButton";


function indexPage() {
        const page = new mainPage({
                userName: new UnderlineName({
                        text: "Dmitriy"
                }),
                buttonProfile: new Button({
                        className: "btn_profile",
                        child:"profile",
                        events: {
                                click: () => {
                                        const elem = document.getElementById("root")
                                        if (elem) {
                                                elem.innerHTML = "";
                                                userProfilePage()
                                        }
                                        
                                }
                        }
                    }),
        
                buttonLogout:new Button({
                        className: "btn_logout",
                        child:"logout",
                        events: {
                                click: () => {
                                        const elem = document.getElementById("root")
                                        if (elem) {
                                                elem.innerHTML = "";
                                                registrationPage();
                                        }
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
                                                if(elem) {
                                                        console.log(elem.value)
                                                }
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
                        placeholder: "Напишите имя",
                    }),
                firstPeople: new FeedList({
                        photo: "",
                        name: "Friend",
                        someText: "Привет, как дела?",
                }),
                message1: new ChatList({
                        you: "Вы",
                        yourFriend: "Ваш друг",
                        messageForYou: "Привет, всё хорошо:))",
                        messageForPeople: "Привет, как дела?",
                        date1: `${new Date().getHours()}:${new Date().getMinutes()}`,
                        date2: `${new Date().getHours()}:${new Date().getMinutes()}`,
                })
        });
     return  render('#root', page)
}


function loginPage() {
        const Page = new Login({
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
                        type:"button",
                        events: {
                                click: () => {
                                        const obj = {};
                                        validator("login");
                                        validator("password");
                                        if(validator("login") === true 
                                        && validator("password") === true) {
                                                document.querySelectorAll("form input").forEach((e: HTMLInputElement)=>{
                                                        obj[e.name] = e.value;
                                                        
                                                })
                                        }
                                        if(Object.keys(obj).length !== 0) { 
                                                console.log(obj)
                                            }
                                }
                        }
                }),
                buttonNoAccount: new Button({
                        className:"btn btn_no_account",
                        child: "Нет аккаунта?",
                        type:"button",
                        events: {
                                click: () => {
                                        const elem = document.getElementById("root")
                                        if (elem) {
                                                elem.innerHTML = "";
                                        registrationPage()
                                        }
                                }
                        }
                })
        })
        return render("#root", Page)
}

function userProfilePage() {
        const page = new UserProfile({
                userName: new UnderlineName({
                        text:"Dmitriy"
                }),
                userSurname:new UnderlineName({
                        text:"Kotovskij"
                }),
                email: new UnderlineName({
                        text:"kotovskij.01@yandex.ru"
                }),
                login: new UnderlineName({
                        text:"kotovskij.01"
                }),
                nameInChat:new UnderlineName({
                        text:"Dmitrich"
                }),
                password: new UnderlineName({
                        text:"&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;"
                }),
                phone: new UnderlineName({
                        text:"+79000000000"
                }),
                buttonEdit: new Button({
                        className: "btn btn_edit",
                        child: `Редактировать...`,
                        type: "button",
                        events: {
                                click: () => {
                                        const elem = document.getElementById("root")
                                        if (elem) {
                                                elem.innerHTML = "";
                                                editProfilePage();
                                        }
                                }
                        }
                    }),
        })
        return render("#root", page);
}

function editProfilePage() {
        const page = new EditProfile({
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
                                click: () => {
                                       buttonValidator();
                                }
                        }
                    }),
            
        })
        return render("#root", page);
}


function registrationPage() {
        const page = new Registration({
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
                        name: "login",
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
                                click: () => {
                                        buttonValidator();
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
                                        const elem = document.getElementById("root")
                                        if (elem) {
                                                elem.innerHTML = "";
                                                loginPage();
                                        }
                                }
                        }
                    }),
            
        })

        return render("#root", page);
}

function error404Page() {
        const page = new Error404({
                buttonBack: new Button({
                        className:"btn_404",
                        child: "Вернуться на главную?",
                        events: {
                                click: () => {
                                        const elem = document.getElementById("root")
                                        if (elem) {
                                                elem.innerHTML = "";
                                                indexPage()
                                        }
                                }
                        }
                })
        })
        return render("#root", page);
}

function error500Page() {
        const page = new Error500({
                buttonBack: new Button({
                        className:"btn_500",
                        child: "Вернуться на главную?",
                        events: {
                                click: () => {
                                        const elem = document.getElementById("root")
                                        if (elem) {
                                                elem.innerHTML = "";
                                                indexPage()
                                        }
                                }
                        }
                })
        })
        return render("#root", page);
}

const homeBtn = document.getElementById('homeBtn')
homeBtn?.addEventListener("click", function(){
        const elem = document.getElementById("root")
                if (elem) {
                        elem.innerHTML = "";
                        return indexPage() ;
                }
        
})

const edit_Profile = document.getElementById('edit_Profile')
    edit_Profile?.addEventListener("click", function(){
        const elem = document.getElementById("root")
                if (elem) {
                        elem.innerHTML = "";
                        return editProfilePage();
                }
        
})

const profile = document.getElementById('profile')
profile?.addEventListener("click", function(){
        const elem = document.getElementById("root")
                if (elem) {
                        elem.innerHTML = "";
                        return userProfilePage();
                }
        
})

const loginIn = document.getElementById('loginIn')
loginIn?.addEventListener("click", function(){
        const elem = document.getElementById("root")
                if (elem) {
                        elem.innerHTML = "";
                        return loginPage();
                }

})

const reg = document.getElementById('reg')
reg?.addEventListener("click", function(){
        const elem = document.getElementById("root")
                if (elem) {
                        elem.innerHTML = "";
                        return registrationPage();
                }

})

const err404 = document.getElementById('error_404')
err404?.addEventListener("click", function(){
        const elem = document.getElementById("root")
                if (elem) {
                        elem.innerHTML = "";
                        return error404Page();
                }
 
})

const err500 = document.getElementById('error_500')
err500?.addEventListener("click", function(){
        const elem = document.getElementById("root")
                if (elem) {
                        elem.innerHTML = "";
                        return error500Page();
                }

})
