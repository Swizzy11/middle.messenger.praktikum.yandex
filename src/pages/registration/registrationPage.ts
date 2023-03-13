import tpl from "./tpl";
import { Component } from "../../core/Component";


export default class Registration extends Component {

    render() {
        return this.compile(tpl)
    }
    
}
