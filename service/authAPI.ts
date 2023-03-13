import HTTPTransport from "../src/core/HTTPTransport";
import { BaseAPI } from "./baseAPI";
import { Signin, Signup, UserInfo } from "./interfaceAPI";

const http = new HTTPTransport("/auth");


export class AuthAPI extends BaseAPI {

    async loginApi(data: Signin):Promise<unknown> {
        return http.post("/signin", data);
    }
    
    registration(data: Signup):Promise<unknown> {
        return http.post('/signup', data);
    }
    
    async logout():Promise<unknown> {
        return http.post('/logout', "");
    }
    
    
    async userInfo():Promise<UserInfo[]> {
        return http.get("/user");
    }
 
    
}


export default new AuthAPI();
