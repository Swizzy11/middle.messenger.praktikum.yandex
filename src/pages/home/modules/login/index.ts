import tpl from './index.hbs';
import Block from "../../../../core/Block";

import { Input } from "../../../../components/input";
import { IButton } from '../../../../components/button/Button';
import { IInput } from '../../../../components/input/input';



type PropsType = {
    login: Block<IInput>,
    password: Block<IInput>,
    buttonEnter: Block<IButton>,
    buttonNoAccount: Block<IButton>,
}



export default class Login extends Block<PropsType> {
    constructor(props:PropsType) { 
        super("div", props);
        
    }
    render() {
        return this.compile(tpl,{
            login: this.props.login,
            password: this.props.password,
            buttonEnter: this.props.buttonEnter,
            buttonNoAccount: this.props.buttonNoAccount,
        })
    }
}



