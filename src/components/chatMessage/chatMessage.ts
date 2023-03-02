
export default function sendMessage(text:string, blockID: string) {

    let chat = <HTMLElement>document.querySelector(`${blockID}`)
    let time = new Date()
    let p = document.createElement("p")
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
  
    return chat?.prepend(p)
}
