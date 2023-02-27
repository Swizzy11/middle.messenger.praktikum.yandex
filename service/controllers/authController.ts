import API,{ AuthAPI } from "../authAPI"
import {Signin, Signup} from "../interfaceAPI"
import Router from "../../src/utils/router.js"
import store from "../store"

const router = new Router("#root")
export class AutheficationController {
    private api: AuthAPI;
    constructor() {
        this.api = API;
    }

    async signIn(data: Signin) {
        
        const response:any = await this.api.loginApi(data);

        if(response["reason"] === "Login or password is incorrect") {
            const error:any =  document.querySelector(".error_password");
            error.innerHTML = "Неправильный логин или пароль";
            return;
        }else if(response["reason"] === "User already in system") {
            const error:any =  document.querySelector(".error_password");
            error.innerHTML = "Произошла ошибка";
            setTimeout(()=>{
                error.innerHTML = ""
                router.go("/error404"); 
                }, 2000)

            return;
            
        }else if(response !== "OK") {
            router.go("/login");
            return;
        }

        const userInfo = await this.api.userInfo()
        store.set("user", userInfo)
        router.go("/messanger");
    }

    async signUp(data: Signup) {
        const response:any = await this.api.registration(data)
        if(response["reason"] === "Login already exists") {
            const error:any =  document.querySelector(".error_phone");
            error.innerHTML = "Этот пользователь уже зарегистрирован";
            return;
        }


        const userInfo = await this.api.userInfo()
        store.set("user", userInfo)
        router.go("/messanger");
    }

    async logout() {
        await this.api.logout();
        router.go("/login");
    }

    async userInfo() {
        await this.api.userInfo();
    }

    
}

export default AutheficationController;
