import tpl from "./tpl";
import Block from "../../../../core/Block";

export default class Login extends Block {
    render() {
        //@ts-ignore
        return this.compile(tpl)
    }
}



