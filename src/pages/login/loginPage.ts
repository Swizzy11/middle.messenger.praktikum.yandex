import tpl from "./tpl";
import { Component } from "../../core/Component";

export default class Login extends Component {
    render() {
        return this.compile(tpl)
    }
}



