import tpl from './index.hbs';
import Block from "../../../../core/Block";

import { IInput } from '../../../../components/input/input';
import { IButton } from '../../../../components/button/Button';

type PropsType = {
    userName: Block<IInput>,
    userSurname: Block<IInput>,
    email: Block<IInput>,
    password: Block<IInput>,
    phone: Block<IInput>,
    login: Block<IInput>,
    nameInChat: Block<IInput>,
    buttonSave: Block<IButton>,
}

export default class EditProfile extends Block<PropsType> {
    constructor(props: PropsType) {
        super("div", props); 
    }

    render() {
        return this.compile(tpl, {
            userName: this.props.userName,
            userSurname: this.props.userSurname,
            email: this.props.email,
            password: this.props.password,
            phone: this.props.phone,
            buttonSave: this.props.buttonSave,
        })
    }
    
}

