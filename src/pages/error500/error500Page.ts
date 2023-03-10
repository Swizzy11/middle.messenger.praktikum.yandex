import tpl from "./tpl";
import { Component } from "../../core/Component";


export default class Error500 extends Component {
    render() {
        return this.compile(tpl)
    }
}
