import { BaseAPI } from "./baseAPI";
import { Chat } from "./interfaceAPI";
import HTTPTransport from "../src/utils/HTTPTransport";

const http = new HTTPTransport();


export interface IChat {
    title: string
}

export class ChatAPI extends BaseAPI {

    async createChat(data:IChat):Promise<any> {
        return http.post("/chats", data)
    }

    deleteChatByID(id:number): Promise<unknown> {
        return http.delete("/chats", {
            headers: {
                "content-type": "application/json"
            },
            body: {chatId: id,}
        })
    }

    async getChats(): Promise<Chat[]> {
        return http.get("/chats")
    }

    async addUserToChat(data: {users: number[], chatId: number}) {
        return http.put("/chats/users", data)
    }

    async deleteUserToChat(data: {users:number[], chatId: number}) {
        return http.delete("/chats/users", data)
    }

    async getToken(id: string): Promise<any> {
        return http.post(`/chats/token/${id}`, {})
      }
}


export default new ChatAPI()

