
import tpl from "./tpl";
import { Component } from "../../core/Component";

export default class UserProfile extends Component {
    render() {
        return this.compile(tpl)
    }
}
