import Handlebars from "handlebars";
import tpl from 'bundle-text:./index.hbs';
import Block from "../../core/Block";
import { Button } from "../../components/button";
import { Input } from "../../components/input";

export default class mainPage extends Block {
    constructor(props) {
 
        const buttonProfile = new Button({
            className: "btn_profile",
            child:"profile"
        }).render();
        
        const buttonLogout = new Button({
            className: "btn_logout",
            child:"logout"
        }).render();
        
        const buttonUploud = new Button({
            className: "btn btn_upload",
            child: ``,
            type: "button",
        }).render();

        const buttonSend = new Button({
            className: "btn btn_send",
            child: ``,
            type: "button",
            events: {
                click: e => {
                    console.log(e)
                }
            }
        }).render();
        
        const inputMessage = new Input({
            type: "text",
            name: "message",
            class: "input_message",
            placeholder: "Написать сообщение...",
        }).render();

        const inputSearch = new Input({
            type: "text",
            name: "message",
            class: "input_search",
            placeholder: "Напиште имя",
        }).render();
        super("home",{
            ...props, buttonProfile, buttonLogout, buttonUploud, buttonSend, inputMessage, inputSearch
        });
        
    }
    render() {
        return Handlebars.compile(tpl)(this.props)
    }
}


