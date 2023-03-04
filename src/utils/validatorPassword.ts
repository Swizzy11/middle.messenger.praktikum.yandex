
function validatorPassword(classes:string) {
    const passwordReg = /^.*(?=.{8,40})(?!.*\s)(?=.*[a-z])(?=.*[A-Z])(?=.*\d).*$/;


    const typeInput: HTMLInputElement | null = document.querySelector(`.${classes}`)

    if(classes === "passwordValid") {
        if(passwordReg.test(typeInput?.value ?? '') === false){
            const error = <HTMLElement>document.querySelector('.error_message_pass');
            error.innerHTML = "Пароль должен содержать от 8 до 40 символов, обязательно хотя бы одна заглавная буква и цифра!";
            return false;
        }else {
            const error = <HTMLElement>document.querySelector('.error_message_pass');
            error.innerHTML = "";
            return true
        }
    }
}

export default validatorPassword;
