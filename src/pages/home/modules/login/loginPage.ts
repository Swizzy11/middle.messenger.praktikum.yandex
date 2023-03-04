import tpl from "./tpl";
import Block from "../../../../core/Block";

export default class Login extends Block {
    render() {
        return this.compile(tpl)
    }
}



