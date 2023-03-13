import { Component } from "../../core/Component";
import tpl from "./tpl"
export default class Index extends Component {
	constructor(tag, props = {}) {

		super(tag,props);
 	
	}

	render() {
		return this.compile(tpl, {});
	}
}
