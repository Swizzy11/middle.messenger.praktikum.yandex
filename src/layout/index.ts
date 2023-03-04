import Block from "../core/Block"
import tpl from "./tpl"
export default class Index extends Block {
	constructor(tag, props = {}) {

		super(tag,props);
 	
	}

	render() {
		return this.compile(tpl, {});
	}
}
