import Block from "../../core/Block";
import tmp from "./tmp.hbs";

export interface IFeedlist {
  [key: string]:string | {
    [key: string]:string
  }
}

export default class FeedList extends Block<IFeedlist> {
    constructor(props:IFeedlist) {
      super("div", props);
    }
  
    render() {

      return this.compile(tmp, {
        photo: this.props.photo,
        name: this.props.name,
        someText: this.props.someText,
      });
    }
  } 
