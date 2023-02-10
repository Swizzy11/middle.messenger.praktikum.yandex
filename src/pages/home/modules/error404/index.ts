import tpl from './index.hbs';
import Block from "../../../../core/Block";

import { IButton } from "../../../../components/button/Button";

type PropsType = {
    buttonBack: Block<IButton>,
}

export default class Error404 extends Block<PropsType> {
    constructor(props:PropsType) {
        super("div", props);
        
    }
    render() {
        return this.compile(tpl,{
            buttonBack: this.props.buttonBack
        })
    }
}

