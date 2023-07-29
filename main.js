import { header_reload, reload_item, card } from "./modules/ui";
fetch('https://kinopoiskapiunofficial.tech/api/v2.2/films?genres=2', {
   method: 'GET',
   headers: {
      'X-API-KEY': '3c25d2e7-bb7e-4d62-9721-145b3f9c34e9',
      'Content-Type': 'application/json',
   },
})
   .then(res => res.json())
   .then(json => reload_item(items_wr, json.items.slice(0, 8)))
   .catch(err => console.log(err))
let wrapper = document.querySelector('.wrapper');
let items_wr = document.querySelector('.items-wrapper')
header_reload(wrapper)



