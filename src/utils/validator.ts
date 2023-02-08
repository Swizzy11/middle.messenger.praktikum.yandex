function validator(classes:string) {
    const loginReg = /^[a-zA-Z][a-zA-Z0-9-_]{3,20}$/;
    const emailReg = /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/;
    const passwordReg = /^.*(?=.{8,40})(?!.*\s)(?=.*[a-z])(?=.*[A-Z])(?=.*\d).*$/;
    const phoneReg = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]{10,15}$/g;
    const nameReg = /^[А-ЯA-Z][а-яА-ЯёЁa-zA-Z-]+$/;
    const messageReg = /^\s*$/;


    const typeInput: any = document.querySelector(`.${classes}`)

    if(classes === "email") {
        if(emailReg.test(typeInput.value) === false){
            const error = <HTMLElement>document.querySelector('.error_email');
            error.innerHTML = "Email должен содержать латиницу, может включать цифры и спецсимволы вроде дефиса, обязательно должна быть «собака» (@) и точка после неё, но перед точкой обязательно должны быть буквы!";
            return false;
        }else {
            const error = <HTMLElement>document.querySelector('.error_email');
            error.innerHTML = "";
            return true
        }
    }
    if(classes === "password") {
        if(passwordReg.test(typeInput.value) === false){
            const error = <HTMLElement>document.querySelector('.error_password');
            error.innerHTML = "Пароль должен содержать от 8 до 40 символов, обязательно хотя бы одна заглавная буква и цифра!";
            return false;
        }else {
            const error = <HTMLElement>document.querySelector('.error_password');
            error.innerHTML = "";
            return true
        }
    }

    if(classes === "phone") {
        if(phoneReg.test(typeInput.value) === false){
            const error = <HTMLElement>document.querySelector('.error_phone');
            error.innerHTML = "Телефон должен содержать от 10 до 15 символов, состоит из цифр, может начинается с плюса!";
            return false;
        }else {
            const error = <HTMLElement>document.querySelector('.error_phone');
            error.innerHTML = "";
            return true
        }
    }

    if(classes === "login") {
        if(loginReg.test(typeInput.value) === false){
            const error= <HTMLElement>document.querySelector('.error_login');
            error.innerHTML = "Логин должен содержать от 3 до 20 символов, латиницу, может содержать цифры, но не состоять из них, без пробелов, без спецсимволов (допустимы дефис и нижнее подчёркивание!";
            return false;
        }else {
            const error = <HTMLElement>document.querySelector('.error_login');
            error.innerHTML = "";
            return true
        }
    }

    if(classes === "first_name") {
        if(nameReg.test(typeInput.value) === false){
            const error = <HTMLElement>document.querySelector('.error_name');
            error.innerHTML = "Имя должно содержать Латиницу или кириллицу, первая буква должна быть заглавной, без пробелов и без цифр, нет спецсимволов!";
            return false;
        }else {
            const error = <HTMLElement>document.querySelector('.error_name');
            error.innerHTML = "";
            return true
        }
    }

    if(classes === "second_name") {
        if(nameReg.test(typeInput.value) === false){
            const error = <HTMLElement>document.querySelector('.error_surname') ;
            error.innerHTML = "Фамилия должна Латиницу или кириллицу, первая буква должна быть заглавной, без пробелов и без цифр, нет спецсимволов!";
            return false;
        }else {
            const error = <HTMLElement>document.querySelector('.error_surname');
            error.innerHTML = "";
            return true
        }
    }

    if(classes === "input_message") {
        if(messageReg.test(typeInput.value) === true){
            const error = <HTMLElement>document.querySelector('.input_message') ;
            error.classList.add("error_outline");
            return false;
        }else {
            const error = <HTMLElement>document.querySelector('.input_message');
            error.classList.remove("error_outline");
            return true
        }
    }
}

export default validator;
