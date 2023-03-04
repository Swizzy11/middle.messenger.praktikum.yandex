import tpl from "./tpl";
import Block from "../../core/Block";

export default class MainPage extends Block {

    render() {
        return this.compile(tpl);   
    }
}
