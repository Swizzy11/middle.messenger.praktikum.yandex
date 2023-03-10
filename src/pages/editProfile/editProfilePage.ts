import tpl from "./tpl";
import { Component } from "../../core/Component";


export default class EditProfile extends Component {

    render() {
        return this.compile(tpl)
    }
    
}

