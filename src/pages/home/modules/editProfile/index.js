import Handlebars from "handlebars";
import tpl from 'bundle-text:./index.hbs';
import Block from "../../../../core/Block";
import { Input } from "../../../../components/input";
import { Button } from "../../../../components/button";

export default class EditProfile extends Block {
    constructor(props) {
        const userName = new Input({
            type: "text",
            name: "first_name",
            class: "input_form", 
        }).render();

        const userSurname = new Input({
            type: "text",
            name: "second_name",
            class: "input_form", 
        }).render();

        const email = new Input({
            type: "email",
            name: "login",
            class: "input_form", 
        }).render();

        const password = new Input({
            type: "password",
            name: "password",
            class: "input_form", 
        }).render();

        const phone = new Input({
            type: "text",
            name: "phone",
            class: "input_form", 
        }).render();

        const buttonSave = new Button({
            className: "btn btn_save",
            child: "Сохранить",
            type: "button"
        }).render();


        super("editProfile",{
            ...props, userName, userSurname, email, password, phone, buttonSave
        });
        
    }

    render() {
        return Handlebars.compile(tpl)(this.props)
    }
    
}

