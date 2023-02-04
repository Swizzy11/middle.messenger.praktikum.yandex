import Handlebars from "handlebars";
import tpl from 'bundle-text:./index.hbs';
import Block from "../../../../core/Block";
import { Button } from "../../../../components/button";
export default class UserProfile extends Block {
    constructor(props) {
        const buttonEdit = new Button({
            className: "btn btn_edit",
            child: `Редактировать...`,
            type: "button"
        }).render();
        
        super("userProfile",{
            ...props, buttonEdit
        });
        
    }
    render() {
        return Handlebars.compile(tpl)(this.props)
    }
}
