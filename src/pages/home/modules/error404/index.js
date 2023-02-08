import Handlebars from "handlebars";
import tpl from './index.hbs';
import Block from "../../../../core/Block";


export default class Error404 extends Block {
    constructor(props) {
        super("div", props);
        
    }
    render() {
        return this.compile(tpl,{
            buttonBack: this.props.buttonBack
        })
    }
}
