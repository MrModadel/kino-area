import { header_reload, card } from "../../modules/ui";
let wrapper = document.querySelector('.wrapper');
header_reload(wrapper)


let l = location.search.split('=').at(-1);
let item = card.find(el=>el.id === +l);
console.log(item);
