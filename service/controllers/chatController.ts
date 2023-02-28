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
        try{
        await this.api.createChat(title);
        }
        catch(e) {
            console.log(e.message)
        }  
    }

    async getChats() {
        try{
            const chats = await this.api.getChats(); 
            store.set(`chats.message`, chats)
        }
        catch(e) {
            console.log(e.message)
        }
    }

    async addUserToChat(data: {users:number[], chatId: number}) {
        try{
        this.api.addUserToChat(data)
        }
        catch(e) {
            console.log(e.message)
        }
    }

    async deleteUserToChat(data: {users:number[], chatId: number}) {
        try{
        this.api.deleteUserToChat(data)
        }
        catch(e) {
            console.log(e.message)
        }
    }

    async getToken(id: string) {
        try{
       const token = await this.api.getToken(id)
       store.set("token", token)
        }
        catch(e) {
            console.log(e.message)
        }
    }
}


export default ChatConroller
