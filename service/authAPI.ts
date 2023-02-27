import HTTPTransport from "../src/utils/HTTPTransport";
import { BaseAPI } from "./baseAPI";
import { Signin, Signup, UserInfo } from "./interfaceAPI";
const http = new HTTPTransport();


export class AuthAPI extends BaseAPI {

    async loginApi(data: Signin) {
        return http.post("/auth/signin", data);
    }
    
    registration(data: Signup) {
        return http.post('/auth/signup', data);
    }
    
    async logout() {
        return http.post('/auth/logout', "");
    }
    
    
    async userInfo():Promise<UserInfo> {
        return http.get("/auth/user", {});
    }
 
    
}


export default new AuthAPI();
