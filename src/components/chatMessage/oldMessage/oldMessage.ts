import Store from "../../../../service/store"


export default function getOldMessage(name:string, text:string, blockID: string, friend_id: string, message_time:string) {

    let chat = <HTMLElement>document.querySelector(`${blockID}`)
    const userId = Store.getState().user.id
    let time = new Date(message_time)
    let p: any;
    
    if(friend_id === userId) {
        p = document.createElement("p")
        p.innerHTML  = `
        <div class="you_message">
            <div class="message_people_name">
                    You:
            </div>
            <div class="message_for_people">
                        ${text}
            </div>
            <div class="message_date">${time.getHours()} : ${time.getMinutes()} (${time.getDate().toString().padStart(2, "0")}:${(time.getMonth() + 1).toString().padStart(2, "0")}:${time.getFullYear()})</div>    
            </div>
        </div>`
        }else {
            p = document.createElement("p")
            p.innerHTML  = `
            <div class="friend_message">
                <div class="message_people_name">
                        User ID: ${name}
                </div>
                <div class="message_for_people">
                                ${text}
                </div>
                <div class="message_date">${time.getHours()} : ${time.getMinutes()} (${time.getDate().toString().padStart(2, "0")}:${(time.getMonth() + 1).toString().padStart(2, "0")}:${time.getFullYear()})</div>    
            </div>
            </div>`
        }
    
    return chat?.appendChild(p)
}
