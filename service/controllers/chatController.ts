import API, { ChatAPI, IChat} from "../chatAPI";
import Router from "../../src/utils/router.js"
import store from "../store"




const router = new Router("#root")

export class ChatConroller {
    private api: ChatAPI;

    constructor() {
        this.api = API;
    }

    async createChat(title: IChat) {
        await this.api.createChat(title)    
    }

    async getChats() {
            const chats = await this.api.getChats(); 
            store.set(`chats.message`, chats)
    }

    async addUserToChat(data: {users:number[], chatId: number}) {
        this.api.addUserToChat(data)
    }

    async deleteUserToChat(data: {users:number[], chatId: number}) {
        this.api.deleteUserToChat(data)
    }

    async getToken(id: string) {
       const token = await this.api.getToken(id)
       store.set("token", token)
    }
}


export default ChatConroller
