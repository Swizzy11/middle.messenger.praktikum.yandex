import Block from "../../core/Block";
import Handlebars from "handlebars";
import tmpl from "bundle-text:./tmpl.hbs";

export default class Button extends Block {
    constructor(props) {
      super("div", props);
    }
  
    render() {
        
      return Handlebars.compile(tmpl)(this.props);
    }
  } 
