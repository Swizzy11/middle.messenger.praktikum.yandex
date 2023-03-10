import tpl from "./tpl";
import { Component } from "../../core/Component";


export default class Error404 extends Component {

    render() {
        return this.compile(tpl)
    }
}

