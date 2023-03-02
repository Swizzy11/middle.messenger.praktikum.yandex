import { BaseAPI } from "./baseAPI";
import HTTPTransport from "../src/utils/HTTPTransport";
import { UserInfo, UserProfileUpdate } from "./interfaceAPI";
import { PasswordUpdate } from "./interfaceAPI";

const http = new HTTPTransport();

export class UserAPI extends BaseAPI {

   async uploadChatAvatar(formdata: FormData) {
        return http.put(`/user/profile/avatar`, formdata)
    }

    async updatePassword(oldPassword: PasswordUpdate, newPassword:PasswordUpdate) {
        return http.put(`/user/password`,
        {
            oldPassword: oldPassword, 
            newPassword: newPassword,
        })
    }

    async updateProfile(body: UserProfileUpdate) {
        return http.put(`/user/profile`, body)
    }

    async getUserById(id: number):Promise<UserInfo[]> {
        return http.put(`/user/${id}`, {
        })
    }

}


export default new UserAPI();
