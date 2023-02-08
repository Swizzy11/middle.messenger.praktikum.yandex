
import tpl from './index.hbs';
import { Input } from "../../../../components/input";
import Block from "../../../../core/Block";

export default class Login extends Block {
    constructor(props) { 
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
