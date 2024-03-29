import { BaseAPI } from "./baseAPI";
import { Chat } from "./interfaceAPI";
import HTTPTransport from "../src/core/HTTPTransport";

const http = new HTTPTransport("/chats");


export interface IChat {
    title: string
}

export class ChatAPI extends BaseAPI {

    async createChat(data:IChat):Promise<unknown> {
        return http.post("", data)
    }

    async deleteChatByID(id:number): Promise<unknown> {
        return http.delete("", {
            chatId: id,
        })
    }

    async getChats(): Promise<undefined> {
        return http.get("")
    }

    async addUserToChat(data: {users: number[], chatId: number}):Promise<unknown> {
        return http.put("/users", data)
    }

    async deleteUserToChat(data: {users:number[], chatId: number}):Promise<unknown> {
        return http.delete("/users", data)
    }

    async getToken(id: string):Promise<unknown> {
        return http.post(`/token/${id}`, {})
      }
}


export default new ChatAPI()

