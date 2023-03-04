import tpl from "./tpl";
import Block from "../../../../core/Block";


export default class Error404 extends Block {

    render() {
        return this.compile(tpl)
    }
}

