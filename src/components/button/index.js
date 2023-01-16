import Handlebars from 'handlebars';
import tpl from 'bundle-text:./index.hbs';

export default (id, value) => {
    return Handlebars.compile(tpl)({id, value});
}