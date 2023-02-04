import {render} from "./utils/renderDOM"

import './style.scss'


import mainPage from "./pages/home";
import EditProfile from "./pages/home/modules/editProfile";
import Error404 from "./pages/home/modules/error404";
import Error500 from "./pages/home/modules/error500";
import Login from "./pages/home/modules/login";
import Registration from "./pages/home/modules/registration";
import UserProfile from "./pages/home/modules/userProfile";

const homeBtn = document.getElementById('homeBtn')
homeBtn.addEventListener("click", function(){
        document.getElementById("root").innerHTML = ""
        return render("#root", new mainPage({})) ;
})

const edit_Profile = document.getElementById('edit_Profile')
    edit_Profile.addEventListener("click", function(){
        document.getElementById("root").innerHTML = ""
        return render("#root", new EditProfile({}));
})

const profile = document.getElementById('profile')
profile.addEventListener("click", function(){
        document.getElementById("root").innerHTML = ""
        return render("#root", new UserProfile({}));
})

const loginIn = document.getElementById('loginIn')
loginIn.addEventListener("click", function(){
        document.getElementById("root").innerHTML = "";
        return render("#root", new Login({}));
})

const reg = document.getElementById('reg')
reg.addEventListener("click", function(){
        document.getElementById("root").innerHTML = "";
        return render("#root", new Registration({}));
})

const err404 = document.getElementById('error_404')
err404.addEventListener("click", function(){
        document.getElementById("root").innerHTML = ""
        return render("#root", new Error404({}));
})

const err500 = document.getElementById('error_500')
err500.addEventListener("click", function(){
        document.getElementById("root").innerHTML = ""
        return render("#root", new Error500({}));
})
