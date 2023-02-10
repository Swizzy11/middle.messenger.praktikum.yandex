
import tpl from './index.hbs';
import Block from "../../../../core/Block";

import { Button } from "../../../../components/button";
import { IUnderline } from '../../../../components/underlineName/underlineName';
import { IButton } from '../../../../components/button/Button';

type PropsType = {
    buttonEdit: Block<IButton>,
    userName: Block<IUnderline>,
    userSurname: Block<IUnderline>,
    email: Block<IUnderline>,
    login: Block<IUnderline>,
    nameInChat: Block<IUnderline>,
    password: Block<IUnderline>,
    phone: Block<IUnderline>,
}

export default class UserProfile extends Block<PropsType> {
    constructor(props: PropsType) {
        super("div", props);
    }
    render() {
        return this.compile(tpl,{
            buttonEdit: this.props.buttonEdit,
            userName: this.props.userName,
            userSurname: this.props.userSurname,
            login: this.props.login,
            email: this.props.email,
            nameInChat: this.props.nameInChat,
            password: this.props.password,
            phone: this.props.phone,
        })
    }
}
