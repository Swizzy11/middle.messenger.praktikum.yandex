import Store from "../../core/store";

export default function addValue() {
    const avatar = <HTMLInputElement>document.querySelector(".personal-avatar")
    avatar.src = `https://ya-praktikum.tech/api/v2/resources/${Store.getState().user.avatar}`

    const inputFN = <HTMLInputElement>document.querySelector(".first_name");
    inputFN.value = Store.getState().user.first_name;

    const inputSN = <HTMLInputElement>document.querySelector(".second_name")
    inputSN.value = Store.getState().user.second_name

    const inputMail = <HTMLInputElement>document.querySelector(".email")
    inputMail.value = Store.getState().user.email

    const inputLogin = <HTMLInputElement>document.querySelector(".login")
    inputLogin.value = Store.getState().user.login

    const inputName = <HTMLInputElement>document.querySelector(".display_name")
    inputName.value = Store.getState().user.display_name

    const inputPhone = <HTMLInputElement>document.querySelector(".phone")
    inputPhone.value = Store.getState().user.phone
}
