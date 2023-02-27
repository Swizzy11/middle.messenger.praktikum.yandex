import API,{ UserAPI } from "../userAPI"
import Router from "../../src/utils/router.js"
import store from "../store"
import { UserProfileUpdate } from "../interfaceAPI";


const router = new Router("#root")

export class UserConroller {
    private api: UserAPI;

    constructor() {
        this.api = API;
    }
    async updateUserData(data: UserProfileUpdate) {
        const userInfo = await this.api.updateProfile(data)
        store.set("user", userInfo)

    }
    
    async updateAvatar(form:FormData) {
         await this.api.uploadChatAvatar(form)
    }

}

export default UserConroller;
