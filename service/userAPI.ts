import { BaseAPI } from "./baseAPI";
import HTTPTransport from "../src/core/HTTPTransport";
import { UserInfo, UserProfileUpdate } from "./interfaceAPI";
import { PasswordUpdate } from "./interfaceAPI";

const http = new HTTPTransport("/user");

export class UserAPI extends BaseAPI {

   async uploadChatAvatar(formdata: FormData):Promise<unknown> {
        return http.put(`/profile/avatar`, formdata)
    }

    async updatePassword(oldPassword: PasswordUpdate, newPassword:PasswordUpdate):Promise<unknown> {
        return http.put(`/password`,
        {
            oldPassword: oldPassword, 
            newPassword: newPassword,
        })
    }

    async updateProfile(body: UserProfileUpdate):Promise<unknown> {
        return http.put(`/profile`, body)
    }

    async getUserById(id: number):Promise<UserInfo[]> {
        return http.put(`/${id}`, {
        })
    }

}


export default new UserAPI();
