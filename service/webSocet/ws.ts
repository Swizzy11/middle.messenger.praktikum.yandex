import store from "../store";

export interface wsChat {
    userID: number | null;
    chatID: number | null;
    token: any
}


export default function wSocket(userID, chatID, token) {
    const ws = new WebSocket(`wss://ya-praktikum.tech/ws/chats/${userID}/${chatID}/${token}`)

    ws.addEventListener("open" , (e) => {
        store.set("stateWs", e.type);
        console.log("Соединение устновлено");
    });

    ws.addEventListener("close", event => {
        if(event.wasClean) {
            console.log("Соединение закрыто чисто");
        }else {
            console.log("Обрыв соединения");
        }
    
        console.log(`Код: ${event.code} | Причина: ${event.reason}`);
    });

    ws.addEventListener("message", event => {
        store.set("lastMessage", "")
        let lastMessage;
        console.log(event.data)
        if(event.data === undefined || event.data === "WS token is not valid") {
            lastMessage = ""
           console.log("Сообщений нет")
        }else {
            lastMessage = JSON.parse(event.data)
        }
        store.set(`lastMessage`, lastMessage)
    });

    ws.addEventListener("error", event => {
        //@ts-ignore
        console.log("Ошибка", event.message)
    })

    // const sendMessage = (text:string) => {
    //             ws.send(JSON.stringify({
    //                 content: text,
    //                 type: "message",
    //             }))
    // }

    // const oldMessage = (count: string | number) => {
    //     ws.send(JSON.stringify({
    //         content: count,
    //         type: "get old",
    //     }))
    return ws;
}
// class WSocket {
//     private socket: WebSocket;

//     constructor({userID, chatID, token}: wsChat) {

//         this.socket = new WebSocket(`wss://ya-praktikum.tech/ws/chats/${userID}/${chatID}/${token}`)
        
//         this.socket.addEventListener("open" , (e) => {
//             store.set("stateWs", e.type);
//             console.log("Соединение устновлено");
//         });
        
        
//         this.socket.addEventListener("close", event => {
//             if(event.wasClean) {
//                 console.log("Соединение закрыто чисто");
//             }else {
//                 console.log("Обрыв соединения");
//             }
        
//             console.log(`Код: ${event.code} | Причина: ${event.reason}`);
//         });
        
        
//         this.socket.addEventListener("message", event => {
//             store.set("lastMessage", "")
//             let lastMessage;
//             console.log(event.data)
//             if(event.data === undefined || event.data === "WS token is not valid") {
//                 lastMessage = ""
//                console.log("Сообщений нет")
//             }else {
//                 lastMessage = JSON.parse(event.data)
//             }
//             store.set(`lastMessage`, lastMessage)
//         });
        
        
//         this.socket.addEventListener("error", event => {
//             //@ts-ignore
//             console.log("Ошибка", event.message)
//         })
        
//     }


//     getSocket() {
//         return this.socket;
//     }

//     sendMessage(text: string) {
//         console.log("1")
//         this.socket.send(JSON.stringify({
//             content: text,
//             type: "message",
//         }))
        
//     }


//     oldMessage(count: string | number) {
//         this.socket.send(JSON.stringify({
//             content: count,
//             type: "get old",
//         }))
//     }
// }


// export default WSocket
