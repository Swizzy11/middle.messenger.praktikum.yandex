import Store from "../../../service/store";

export default function addValue() {
    const inputFN = <HTMLInputElement>document.querySelector(".first_name");
    //@ts-ignore
    inputFN.value = Store.getState().user.first_name;

    const inputSN = <HTMLInputElement>document.querySelector(".second_name")
    //@ts-ignore
    inputSN.value = Store.getState().user.second_name

    const inputMail = <HTMLInputElement>document.querySelector(".email")
    //@ts-ignore
    inputMail.value = Store.getState().user.email

    const inputLogin = <HTMLInputElement>document.querySelector(".login")
    //@ts-ignore
    inputLogin.value = Store.getState().user.login

    const inputName = <HTMLInputElement>document.querySelector(".display_name")
    //@ts-ignore
    inputName.value = Store.getState().user.display_name

    const inputPhone = <HTMLInputElement>document.querySelector(".phone")
    //@ts-ignore
    inputPhone.value = Store.getState().user.phone
}
