import Handlebars from "handlebars";
import tpl from 'bundle-text:./index.hbs';



export default (type,name,clas) => {
    return Handlebars.compile(tpl)({type,name,clas});
}