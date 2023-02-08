import tmp from './tmp.hbs';
import Block from "../../core/Block";

export default class MainPage extends Block {
    constructor(props) {
        super("div", props);

    }

    componentDidUpdate(oldProps, newProps) {
        if(oldProps.child !== newProps.child) {
            this.children.buttonProfile.setProps({ child: newProps.child })
        }
        
        return true;
        
    }

    render() {
        return this.compile(tmp, {});   
    }
}
