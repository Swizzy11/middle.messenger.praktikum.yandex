import Handlebars from "handlebars";
import tpl from 'bundle-text:./index.hbs';
import { Input } from "../../../../components/input";
import Block from "../../../../core/Block";

export default class Login extends Block {
    constructor(props) {
 
        const login = new Input({
            type: "email",
            name: "login",
            class: "input_common",
        }).render();
        const password = new Input({
            type: "password",
            name: "password",
            class: "input_common",
        }).render();
        super("login",{
            ...props, login, password
        });
        
    }
    render() {
        return Handlebars.compile(tpl)(this.props)
    }
}
