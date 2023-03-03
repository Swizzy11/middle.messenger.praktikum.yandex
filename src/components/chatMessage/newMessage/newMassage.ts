
export default function newMessage(text:string, time: string, friend_id:unknown) {

    let chat = <HTMLElement>document.querySelector(`.chat`)
    let newTime = new Date(time)
    let p = document.createElement("p")
    
    p = document.createElement("p")
    p.innerHTML  = `
    <div class="friend_message">
                <div class="message_people_name">
                        User ID: ${friend_id}
                </div>
                <div class="message_for_people">
                                ${text}
                </div>
                <div class="message_date">${newTime.getHours()} : ${newTime.getMinutes()} (${newTime.getDate().toString().padStart(2, "0")}:${(newTime.getMonth() + 1).toString().padStart(2, "0")}:${newTime.getFullYear()})</div>    
            </div>
            </div>`
  
    return chat?.prepend(p)
}
