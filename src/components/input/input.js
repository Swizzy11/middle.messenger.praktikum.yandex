import Handlebars from "handlebars";
import tmpl from "bundle-text:./input.hbs";
import Block from "../../core/Block";

export default class Input extends Block {
    constructor(props) {
      super("input", props);
    }
  
    render() {
        
      return Handlebars.compile(tmpl)(this.props);
    }
  } 
