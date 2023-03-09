import {render} from "./core/renderDOM"

import './style.scss'




import UserProfile from "./pages/userProfile"
import Login from "./pages/login"
import Registration from "./pages/registration"
import MainPage from "./pages/home"
import EditProfile from "./pages/editProfile"
import Error404 from "./pages/error404"
import Error500 from "./pages/error500"

import Router from "./core/router"


import Index from "./components/layout"
import addValue from "./utils/heplerApp/addValue"




if (performance.navigation.type === 1) {  
        setTimeout(()=>{
                if(window.location.pathname === "/settings"){
                        addValue()
                }
        },150 );
        
}
const router = new Router("#root")
router
        .use("/messanger",Index, "div", {
                content: new MainPage("div")})

        .use("/login",Index, "div", {
                content: new Login("div")})

        .use("/registration",Index, "div", { 
                content: new Registration("div")})

        .use("/settings",Index, "div", {
                content: new EditProfile("div")})

        .use("/profile",Index, "div", {
                content: new UserProfile("div")})

        .use("/error404",Index, "div", {
                content: new Error404("div")})   
        
        .use("/error500",Index, "div", {
                content: new Error500("div")})
        .start()


        if(window.location.pathname === "/") {
                router.go("/login")
        }     
        

const homeBtn = document.getElementById('homeBtn')
homeBtn?.addEventListener("click", function(){
        router.go("/messanger")
        
})

const edit_Profile = document.getElementById('edit_Profile')
    edit_Profile?.addEventListener("click", function(){
        router.go("/settings")
        
})

const profile = document.getElementById('profile')
profile?.addEventListener("click", function(){
        router.go("/profile")
        
})

const loginIn = document.getElementById('loginIn')
loginIn?.addEventListener("click", function(){
        router.go("/")

})

const reg = document.getElementById('reg')
reg?.addEventListener("click", function(){
        router.go("/registration")

})

const err404 = document.getElementById('error_404')
err404?.addEventListener("click", function(){
        router.go("/error404")
 
})

const err500 = document.getElementById('error_500')
err500?.addEventListener("click", function(){
        router.go("/error500")

})



// if(window.location.pathname === "/messanger") {
//         const scrollChat:any = document.querySelector(".chat");
//         scrollChat.scrollTop = scrollChat.scrollHeight
// }

