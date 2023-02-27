
export default function sendMessage(name:string, text:string, blockID: string) {

    let chat = <HTMLElement>document.querySelector(`${blockID}`)

    let p = document.createElement("p")
    p.innerHTML  = `<div class="you_message">
    <div class="message_people_name">
            ${name}
    </div>
    <div class="message_for_people">
        ${text}
    </div>
    <div class="message_date">${new Date().getHours()} : ${new Date().getMinutes()}</div>    
</div>
</div>`
  
    return chat?.prepend(p)
}
