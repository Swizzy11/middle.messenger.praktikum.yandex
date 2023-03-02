
export default function comparisonPassword() {
    let password:any = document.querySelector(".change_password");
    let passwordRepeate:any = document.querySelector(".change_password_repeate");

    if(password.value === passwordRepeate.value) {
        return true
    }else {
        return false
    }

}
