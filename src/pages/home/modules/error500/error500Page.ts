import tpl from "./tpl";
import Block from "../../../../core/Block";


export default class Error500 extends Block {
    render() {
        //@ts-ignore
        return this.compile(tpl)
    }
}
