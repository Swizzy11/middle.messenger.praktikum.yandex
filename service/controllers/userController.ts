import API,{ UserAPI } from "../userAPI"
import Router from "../../src/utils/router.js"
import store from "../store"
import { PasswordUpdate, UserProfileUpdate } from "../interfaceAPI";


const router = new Router("#root")

export class UserConroller {
    private api: UserAPI;

    constructor() {
        this.api = API;
    }
    async updateUserData(data: UserProfileUpdate) {
        try {
        const userInfo = await this.api.updateProfile(data)
        store.set("user", userInfo)
        }
        catch(e) {
            console.log(e.message)
        }

    }
    async updatePassword(oldPassword: PasswordUpdate, newPassword:PasswordUpdate) {
        try {
        const userInfo = await this.api.updatePassword(oldPassword, newPassword);
        }
        catch(e) {
            console.log(e.message)
        }

    }
    
    async updateAvatar(form:FormData) {
        try {
         const userInfo:any = await this.api.uploadChatAvatar(form)
         store.set("user.avatar", userInfo.avatar)
        }
        catch(e) {
            console.log(e.message)
        }
    }

}

export default UserConroller;
