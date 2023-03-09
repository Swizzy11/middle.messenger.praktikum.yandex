import { BaseAPI } from "./baseAPI";
import HTTPTransport from "../src/core/HTTPTransport";
import { UserInfo, UserProfileUpdate } from "./interfaceAPI";
import { PasswordUpdate } from "./interfaceAPI";

const http = new HTTPTransport("/user");

export class UserAPI extends BaseAPI {

   async uploadChatAvatar(formdata: FormData) {
        return http.put(`/profile/avatar`, formdata)
    }

    async updatePassword(oldPassword: PasswordUpdate, newPassword:PasswordUpdate) {
        return http.put(`/password`,
        {
            oldPassword: oldPassword, 
            newPassword: newPassword,
        })
    }

    async updateProfile(body: UserProfileUpdate) {
        return http.put(`/profile`, body)
    }

    async getUserById(id: number):Promise<UserInfo[]> {
        return http.put(`/${id}`, {
        })
    }

}


export default new UserAPI();
