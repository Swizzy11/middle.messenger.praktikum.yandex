import Handlebars from "handlebars";
import tpl from 'bundle-text:./index.hbs';
import { Input } from "../../../../components/input";
import Block from "../../../../core/Block";
import { Button } from "../../../../components/button";

export default class Registration extends Block {
    constructor(props) {
        const userName = new Input({
            type: "text",
            name: "first_name",
            class: "input_common", 
        }).render();

        const userSurname = new Input({
            type: "text",
            name: "second_name",
            class: "input_common", 
        }).render();

        const email = new Input({
            type: "email",
            name: "login",
            class: "input_common", 
        }).render();

        const password = new Input({
            type: "password",
            name: "password",
            class: "input_common", 
        }).render();

        const phone = new Input({
            type: "text",
            name: "phone",
            class: "input_common", 
        }).render();

        const buttonRegistr = new Button({
            className: "btn btn_registration",
            child: `Зарегистрироваться`,
            type: "button"
        }).render();

        const buttonHasAccount = new Button({
            className: "btn btn_has_account",
            child: `Есть аккаунт?`,
            type: "button",
            placeholder: "Напишите сообщение..."
        }).render();

        super("registration",{
            ...props, userName, userSurname, email, password, phone, buttonRegistr, buttonHasAccount
        });
        
    }

    render() {
        return Handlebars.compile(tpl)(this.props)
    }
    
}
