import Handlebars from "handlebars";
import tpl from './index.hbs';
import { Input } from "../../../../components/input";
import Block from "../../../../core/Block";
import { Button } from "../../../../components/button";

export default class Registration extends Block {
    constructor(props) {
        super("div",props);
    }

    render() {
        return this.compile(tpl, {
            userName: this.props.userName,
            userSurname: this.props.userSurname,
            email: this.props.email,
            password: this.props.password,
            phone: this.props.phone,
            buttonRegistr: this.props.buttonRegistr,
            buttonHasAccount: this.props.buttonHasAccount,
        })
    }
    
}
