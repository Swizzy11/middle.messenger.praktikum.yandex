
export default function comparisonPassword() {
    let password = <HTMLInputElement>document.querySelector(".change_password");
    let passwordRepeate = <HTMLInputElement>document.querySelector(".change_password_repeate");

    if(password.value === passwordRepeate.value) {
        return true
    }else {
        return false
    }

}
