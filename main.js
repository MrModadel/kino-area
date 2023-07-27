import { header_reload, reload_item ,card } from "./modules/ui";
const url = 'https://api.themoviedb.org/3/trending/movie/day';
const options = { method: 'GET', headers: { accept: 'application/json', apiKey: '287022ce5e56888175bf732f64c60df0' } };

fetch(url, options)
   .then(res => res.json())
   .then(json => console.log(json))
   .catch(err => console.error('error:' + err));


let wrapper = document.querySelector('.wrapper');
let items_wr = document.querySelector('.items-wrapper')
header_reload(wrapper)



reload_item(items_wr , card.slice(0,8))