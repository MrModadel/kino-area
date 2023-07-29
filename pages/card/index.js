import { header_reload, card } from "../../modules/ui";
let wrapper = document.querySelector('.wrapper');



header_reload(wrapper)
let img = document.querySelector('.left img'),
   title = document.querySelector('.right__title'),
   sup_title = document.querySelector('.right__suptitle'),
   description = document.querySelector('.right__description'),
   l = location.search.split('=').at(-1),
   p = document.querySelector('.down__reating p'),
   down__green = document.querySelector('.down__green');
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
      p.innerHTML =`Рейтинг ожиданий ${json.ratingGoodReview}%`
      down__green.style.width = json.ratingGoodReview +'%'
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
   })
   .catch(err => console.log(err))


var percentColors = [
   { pct: 0.0, color: { r: 0xff, g: 0x00, b: 0 } },
   { pct: 0.5, color: { r: 0xff, g: 0xff, b: 0 } },
   { pct: 1.0, color: { r: 0x00, g: 0xff, b: 0 } }];

var getColorForPercentage = function (pct) {
   for (var i = 1; i < percentColors.length - 1; i++) {
      if (pct < percentColors[i].pct) {
         break;
      }
   }
   var lower = percentColors[i - 1];
   var upper = percentColors[i];
   var range = upper.pct - lower.pct;
   var rangePct = (pct - lower.pct) / range;
   var pctLower = 1 - rangePct;
   var pctUpper = rangePct;
   var color = {
      r: Math.floor(lower.color.r * pctLower + upper.color.r * pctUpper),
      g: Math.floor(lower.color.g * pctLower + upper.color.g * pctUpper),
      b: Math.floor(lower.color.b * pctLower + upper.color.b * pctUpper)
   };
   return 'rgb(' + [color.r, color.g, color.b].join(',') + ')';
   // or output as hex if preferred
};