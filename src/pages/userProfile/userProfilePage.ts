
import tpl from "./tpl";
import Block from "../../core/Block";

export default class UserProfile extends Block {
    render() {
        return this.compile(tpl)
    }
}
