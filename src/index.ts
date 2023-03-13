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
                        addValue();
                }
        },150 );
        
}
const router = new Router("#root");
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
        