import Handlebars from "handlebars";
import tpl from 'bundle-text:./index.hbs';




export default (props = {}) => {
    return Handlebars.compile(tpl)(props);
}