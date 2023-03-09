import HTTPTransport from "../src/core/HTTPTransport";
import { BaseAPI } from "./baseAPI";
import { Signin, Signup, UserInfo } from "./interfaceAPI";

const http = new HTTPTransport("/auth");


export class AuthAPI extends BaseAPI {

    async loginApi(data: Signin) {
        return http.post("/signin", data);
    }
    
    registration(data: Signup) {
        return http.post('/signup', data);
    }
    
    async logout() {
        return http.post('/logout', "");
    }
    
    
    async userInfo() {
        return http.get("/user");
    }
 
    
}


export default new AuthAPI();
