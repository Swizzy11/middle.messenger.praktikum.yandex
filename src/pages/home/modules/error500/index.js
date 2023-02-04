import Handlebars from "handlebars";
import tpl from 'bundle-text:./index.hbs';
import Block from "../../../../core/Block";

export default class Error500 extends Block {
    constructor(props) {
        super("error500",{
            ...props
        });
        
    }
    render() {
        return Handlebars.compile(tpl)(this.props)
    }
}
