
import tpl from './index.hbs';
import Block from "../../../../core/Block";
import { Button } from "../../../../components/button";
export default class UserProfile extends Block {
    constructor(props) {
        super("div", props);
    }
    render() {
        return this.compile(tpl,{
            buttonEdit: this.props.buttonEdit,
            userName: this.props.userName,
            userSurname: this.props.userSurname,
            email: this.props.email,
            password: this.props.password,
            phone: this.props.phone,
        })
    }
}
