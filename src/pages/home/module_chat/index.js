import Handlebars from "handlebars";
import tpl from './tpl.js';


export default (props = {}) => {
    return Handlebars.compile(tpl)(props);
}