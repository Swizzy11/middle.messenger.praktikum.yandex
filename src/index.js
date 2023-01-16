import Handlebars from "handlebars";
import tpl from "bundle-text:./index.hbs";

import './style.scss'

import menu from "./components/menu";
import button from './components/button'
import input from "./components/input"

import home from "./pages/home";
import edit_profile from "./pages/home/modules/edit_profile";
import error_404 from "./pages/home/modules/error_404";
import error_500 from "./pages/home/modules/error_500";
import login from "./pages/home/modules/login";
import registration from "./pages/home/modules/registration";
import user_profile from "./pages/home/modules/user_profile";





const comp = Handlebars.compile(tpl);
const res = comp({
    menu: menu()
});
document.getElementById('root').innerHTML = res;




function homePage(){
    const comp = Handlebars.compile(tpl);
    const res = comp({
        home: home({name : 'Dmitriy', 
        btn1: button('btn_profile','profile'), 
        btn2: button('btn_logout','logout')}),
    });
    return res;
}


function login_in(){
    const comp = Handlebars.compile(tpl);
    const res = comp({
        login: login({login: input('email', 'email', 'input_common'),
            password : input('password', 'password', 'input_common')}),
    });
return res;
}

function registration_user(){
    const comp = Handlebars.compile(tpl);
    const res = comp({
        registration: registration({
        userName : input('text', 'user_name', 'input_common'),
        userSurname : input('text', 'user_surname', 'input_common'),
        email : input('email', 'email', 'input_common'),
        password : input('password', 'password', 'input_common'),
        phone : input('text', 'phone', 'input_common')}),
    });
return res;
}


function editProfile(){
    const comp = Handlebars.compile(tpl);
    const res = comp({
        edit_profile: edit_profile({
            userName : input('text', 'user_name', 'input_form'),
            userSurname : input('text', 'user_surname', 'input_form'),
            email : input('email', 'email', 'input_form'),
            password : input('password', 'password', 'input_form'),
            phone : input('text', 'phone', 'input_form')}),
    });
return res;
}


function userProfile(){
    const comp = Handlebars.compile(tpl);
    const res = comp({
        user_profile: user_profile({user_name: 'Dmitriy',
        user_surname: 'Ivanov',
        user_email: 'kotovskij.01@yandex.ru',
        user_password: '*******',
        user_phone: '+79000000000'}),
    });
return res;
}


function error404(){
    const comp = Handlebars.compile(tpl);
    const res = comp({
        error_404: error_404(),
    });
return res;
}


function error500(){
    const comp = Handlebars.compile(tpl);
    const res = comp({
        error_500: error_500(),
    });
return res;
}







let homeBtn = document.getElementById('homeBtn')
homeBtn.addEventListener("click", function(){
        return document.getElementById('root').innerHTML = homePage();
})

let edit_Profile = document.getElementById('edit_Profile')
    edit_Profile.addEventListener("click", function(){
        return document.getElementById('root').innerHTML = editProfile();
})

let profile = document.getElementById('profile')
profile.addEventListener("click", function(){
        return document.getElementById('root').innerHTML = userProfile();
})

let loginIn = document.getElementById('loginIn')
loginIn.addEventListener("click", function(){
        return document.getElementById('root').innerHTML = login_in();
})

let reg = document.getElementById('reg')
reg.addEventListener("click", function(){
        return document.getElementById('root').innerHTML = registration_user();
})

let err404 = document.getElementById('error_404')
err404.addEventListener("click", function(){
        return document.getElementById('root').innerHTML = error404();
})

let err500 = document.getElementById('error_500')
err500.addEventListener("click", function(){
        return document.getElementById('root').innerHTML = error500();
})
