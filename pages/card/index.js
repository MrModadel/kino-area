import { header_reload, card, reload_staff, footer_reload } from "../../modules/ui";
let wrapper = document.querySelector('.wrapper');
header_reload(wrapper);
footer_reload(wrapper);
let img = document.querySelector('.left img'),
   title = document.querySelector('.right__title'),
   sup_title = document.querySelector('.right__suptitle'),
   description = document.querySelector('.right__description'),
   l = location.search.split('=').at(-1),
   p = document.querySelector('.down__reating p'),
   down__green = document.querySelector('.down__green'),
   elements = document.querySelectorAll('[data-type]'),
   staff__container = document.querySelector('.staff__container'),
   video = document.querySelector('.tr-item__top .main-img');
const chart_one = document.getElementById('myChart'),
   chart_two = document.getElementById('myChart_two');
fetch('https://kinopoiskapiunofficial.tech/api/v2.2/films/' + l, {
   method: 'GET',
   headers: {
      'X-API-KEY': '3c25d2e7-bb7e-4d62-9721-145b3f9c34e9',
      'Content-Type': 'application/json',
   },
})
   .then(res => res.json())
   .then(json => {
      console.log(
         json
      );
      description.innerHTML = json.description;
      title.innerHTML = json.nameRu;
      sup_title.innerHTML = json.nameOriginal
      img.src = json.posterUrl;
      document.body.style.backgroundImage = `url(${json.coverUrl})`;
      let one = 10 - json.ratingKinopoisk;
      let two = 10 - json.ratingImdb;
      p.innerHTML = `Рейтинг ожиданий ${json.ratingGoodReview}%`
      down__green.style.width = json.ratingGoodReview + '%'
      const data = {
         datasets: [{
            label: '',
            data: [json.ratingKinopoisk, one],
            backgroundColor: [
               `${getColorForPercentage(json.ratingKinopoisk)}`,
               'transparent'
            ],
            cutout: '75%',
            borderWidth: 0,
         }]
      };
      const data2 = {
         datasets: [{
            label: '',
            data: [json.ratingImdb, two],
            backgroundColor: [
               `${getColorForPercentage(json.ratingImdb)}`,
               'transparent'
            ],
            cutout: '75%',
            borderWidth: 0,
         }]
      };
      const config = {
         type: 'doughnut',
         data: data,
         options: {
            plugins: {
               legend: {
                  display: false
               }
            }
         }
      };
      new Chart(chart_one, config)
      config.data = data2
      new Chart(chart_two, config)
      let spn = chart_one.previousSibling.previousElementSibling;
      let spn2 = chart_two.previousSibling.previousElementSibling;
      spn.innerHTML = json.ratingKinopoisk;
      spn2.innerHTML = json.ratingImdb;


      elements.forEach(el => {
         if (json[el.dataset.type] !== null) {
            if (typeof json[el.dataset.type] !== 'object')
               el.innerHTML = json[el.dataset.type]
            else
               for (let item of json[el.dataset.type]) {
                  el.innerHTML += item[Object.keys(item)] + ","
               }
            if (el.innerHTML.slice(-1,) === ',')
               el.innerHTML = el.innerHTML.slice(0, el.innerHTML.length - 1)
         } else {
            el.parentNode.style.display = 'none'
         }
         console.log();

         if (el.dataset.type === 'filmLength')
            el.innerHTML += ' минут'

         if (el.dataset.type === 'ratingAgeLimits')
            el.innerHTML = "+" + el.innerHTML.slice(-2,)
      })
   })
   .catch(err => console.log(err))


const percentColors = [
   { pct: 0.0, color: { r: 0xff, g: 0x00, b: 0 } },
   { pct: 0.5, color: { r: 0xff, g: 0xff, b: 0 } },
   { pct: 1.0, color: { r: 0x00, g: 0xff, b: 0 } }];

const getColorForPercentage = function (pct) {
   for (var i = 1; i < percentColors.length - 1; i++) {
      if (pct < percentColors[i].pct) {
         break;
      }
   }
   const lower = percentColors[i - 1];
   const upper = percentColors[i];
   const range = upper.pct - lower.pct;
   const rangePct = (pct - lower.pct) / range;
   const pctLower = 1 - rangePct;
   const pctUpper = rangePct;
   const color = {
      r: Math.floor(lower.color.r * pctLower + upper.color.r * pctUpper),
      g: Math.floor(lower.color.g * pctLower + upper.color.g * pctUpper),
      b: Math.floor(lower.color.b * pctLower + upper.color.b * pctUpper)
   };
   return 'rgb(' + [color.r, color.g, color.b].join(',') + ')';
   // or output as hex if preferred
};

fetch('https://kinopoiskapiunofficial.tech/api/v1/staff?filmId=' + l, {
   method: 'GET',
   headers: {
      'X-API-KEY': '3c25d2e7-bb7e-4d62-9721-145b3f9c34e9',
      'Content-Type': 'application/json',
   },
}).then(res => res.json())
   .then(json => {
      reload_staff(json.slice(0, 10), staff__container)
   })

fetch('https://kinopoiskapiunofficial.tech/api/v2.2/films/' + l + '/videos', {
   method: 'GET',
   headers: {
      'X-API-KEY': '3c25d2e7-bb7e-4d62-9721-145b3f9c34e9',
      'Content-Type': 'application/json',
   },
}).then(res => res.json())
   .then(json => {
      let { items } = json;
      let item = items[0];
      video.src = "https://www.youtube.com/embed/" + item.url.split('=').at(-1);
   })