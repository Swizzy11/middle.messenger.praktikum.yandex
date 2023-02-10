import tpl from './index.hbs';
import Block from "../../../../core/Block";

import { Input } from "../../../../components/input";
import { Button } from "../../../../components/button";
import { IInput } from '../../../../components/input/input';
import { IButton } from '../../../../components/button/Button';


type PropsType = {
    userName: Block<IInput>,
    userSurname: Block<IInput>,
    email: Block<IInput>,
    password: Block<IInput>,
    phone: Block<IInput>,
    login: Block<IInput>,
    buttonRegistr: Block<IButton>,
    buttonHasAccount: Block<IButton>,
}

export default class Registration extends Block<PropsType> {
    constructor(props: PropsType) {
        super("div",props);
    }

    render() {
        return this.compile(tpl, {
            userName: this.props.userName,
            userSurname: this.props.userSurname,
            email: this.props.email,
            login: this.props.login,
            password: this.props.password,
            phone: this.props.phone,
            buttonRegistr: this.props.buttonRegistr,
            buttonHasAccount: this.props.buttonHasAccount,
        })
    }
    
}
