import tpl from './index.hbs';
import Block from "../../../../core/Block";

export default class EditProfile extends Block {
    constructor(props) {
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

