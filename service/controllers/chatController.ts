import API, { ChatAPI, IChat} from "../chatAPI";
import Router from "../../src/core/router"
import store from "../../src/core/store"




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
        catch(error) {
            console.log(error.message)
        }  
    }

    async getChats() {
        try{
            const chats = await this.api.getChats(); 
            store.set(`chats.message`, chats)
        }
        catch(error) {
            console.log(error.message)
        }
    }

    async addUserToChat(data: {users:number[], chatId: number}) {
        try{
        this.api.addUserToChat(data)
        }
        catch(error) {
            console.log(error.message)
        }
    }


    async deleteChatByID(id:number) {
        try{
          let chat = await this.api.deleteChatByID(id)

          store.set("deleteChat", chat)
        }
        catch(error) {
            console.log(error.message)
        }
    }

    async deleteUserToChat(data: {users:number[], chatId: number}) {
        try{
        this.api.deleteUserToChat(data)
        }
        catch(error) {
            console.log(error.message)
        }
    }

    async getToken(id: string) {
        try{
        
       const token = await this.api.getToken(id)
       store.set("tokenSet", token)
        }
        catch(error) {
            console.log(error.message)
        }
    }
}


export default ChatConroller
