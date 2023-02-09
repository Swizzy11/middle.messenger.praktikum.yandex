import Block from "../../core/Block";
import tmp from "./tmp.hbs";

export interface IUnderline {
  text: string;
}

export default class UnderlineName extends Block<IUnderline> {
    constructor(props:IUnderline) {
      super("div", props);
    }
  
    render() {

      return this.compile(tmp, {
        text: this.props.text,
      });
    }
  } 
