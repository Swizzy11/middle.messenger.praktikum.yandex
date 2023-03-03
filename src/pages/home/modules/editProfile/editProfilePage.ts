import tpl from "./tpl";
import Block from "../../../../core/Block";


export default class EditProfile extends Block {

    render() {
        return this.compile(tpl)
    }
    
}

