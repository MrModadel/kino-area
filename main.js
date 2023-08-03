
import { header_reload, reload_item, reload_next, footer_reload } from "./modules/ui";
let wrapper = document.querySelector('.wrapper');
header_reload(wrapper)
footer_reload(wrapper)
fetch('https://kinopoiskapiunofficial.tech/api/v2.2/films', {
   method: 'GET',
   headers: {
      'X-API-KEY': '3c25d2e7-bb7e-4d62-9721-145b3f9c34e9',
      'Content-Type': 'application/json',
   },
})
   .then(res => res.json())
   .then(json => reload_item(items_wr, json.items.slice(0, 8)))
   .catch(err => console.log(err))
let items_wr = document.querySelector('.items-wrapper');
let wr = document.querySelector('.footer__items');
let arrow_one = document.querySelector('.tr-arrow__one');
let arrow_two = document.querySelector('.tr-arrow__two');
let popular__wrapper = document.querySelector('.popular__wrapper')
let count = document.querySelector('.tr-count');
let one = document.querySelector('.arw__one');
let two = document.querySelector('.arw__two');
let arw__count = document.querySelector('.arw__count');
let btn__more = document.querySelector('.btn__more-click');
reload_next(arrow_two, arrow_one, count, wr, 0, 5);
reload_next(two, one, arw__count, popular__wrapper, 0, 5);


let iframe = document.querySelector('.tr-item-img-iframe');
let items = document.querySelectorAll('.scroll-bar__item');
items.forEach(item => {
   let clicks = item.querySelectorAll('img');
   clicks[1].onclick = () => {
      console.log(iframe, clicks[0]);

      iframe.src = clicks[0].dataset.src
   }
})



let lis = document.querySelectorAll('.now__nav ul li a');
lis.forEach(li => {
   li.onclick = () => {
      lis.forEach(el => el.classList.remove('active'));
      li.classList.add("active");
      fetch('https://kinopoiskapiunofficial.tech/api/v2.2/films?genres=' + li.dataset.type, {
         method: 'GET',
         headers: {
            'X-API-KEY': '3c25d2e7-bb7e-4d62-9721-145b3f9c34e9',
            'Content-Type': 'application/json',
         },
      }).then(res => res.json())
         .then(json => reload_item(items_wr, json.items.slice(0, 8)))
         .catch(err => console.log(err))
   }
})


fetch('https://kinopoiskapiunofficial.tech/api/v2.2/films', {
   method: 'GET',
   headers: {
      'X-API-KEY': '3c25d2e7-bb7e-4d62-9721-145b3f9c34e9',
      'Content-Type': 'application/json',
   },
})
   .then(res => res.json())
   .then(json => reload_item(wr, json.items.slice(0, 4)))
   .catch(err => console.log(err))

btn__more.onclick = () => {
   if (btn__more.classList.contains('not-more')) {
      btn__more.innerHTML = ` Все новинки `
      btn__more.classList.remove('not-more');
      fetch('https://kinopoiskapiunofficial.tech/api/v2.2/films', {
         method: 'GET',
         headers: {
            'X-API-KEY': '3c25d2e7-bb7e-4d62-9721-145b3f9c34e9',
            'Content-Type': 'application/json',
         },
      })
         .then(res => res.json())
         .then(json => reload_item(items_wr, json.items.slice(0 , 8)))
         .catch(err => console.log(err))
   } else {
      btn__more.innerHTML = 'Скрыть';
      btn__more.classList.add('not-more');
      fetch('https://kinopoiskapiunofficial.tech/api/v2.2/films', {
         method: 'GET',
         headers: {
            'X-API-KEY': '3c25d2e7-bb7e-4d62-9721-145b3f9c34e9',
            'Content-Type': 'application/json',
         },
      })
         .then(res => res.json())
         .then(json => reload_item(items_wr, json.items))
         .catch(err => console.log(err))
   }
}