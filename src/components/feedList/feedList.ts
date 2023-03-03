import Block from "../../core/Block";
import tpl from "./tpl";

export interface IFeedlist {
  [key: string]:string | {
    [key: string]:string
  }
}

export default class FeedList extends Block {
    constructor(props:IFeedlist) {
      super("div", props);
    }
  
    render() {
      return this.compile(tpl);
    }
  } 

 
