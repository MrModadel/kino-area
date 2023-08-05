import { footer_reload, header_reload, reload_item } from "../../modules/ui";
var months = ["January", "February", "March", "April", "May", "June",
   "July", "August", "September", "October", "November", "December"];
let wrapper = document.querySelector('.wrapper');
let info = document.querySelector('[data-info]');
let biog = document.querySelector('[data-biog]');
let infor = document.querySelector('.information');
let biogref = document.querySelector('.biograf');
let suptitle = document.querySelector('.right__suptitle');
let title = document.querySelector('.right__title');
let span = document.querySelector('.right__location span')
let img = document.querySelector('.left img');
let container = document.querySelector('.staff__container');
let arr = [];
header_reload(wrapper);
footer_reload(wrapper);
let l = location.search.split('=').at(-1);
await fetch('https://kinopoiskapiunofficial.tech/api/v1/staff/' + l, {
   method: 'GET',
   headers: {
      'X-API-KEY': '3c25d2e7-bb7e-4d62-9721-145b3f9c34e9',
      'Content-Type': 'application/json',
   },
}).then(res => res.json())
   .then(json => {
      arr = json;
   })
let lis = info.querySelectorAll('ul li a');
lis.forEach(li => {
   let data = li.dataset.type;
   let value = arr[data];
   if (arr[data]) {
      if (data === 'birthday') {
         let sp_vl = value.split('-');
         li.innerHTML = sp_vl[2] + ',' + months[+sp_vl[1] - 1] + ',' + sp_vl[0];
      } else if (data === "films") {
         li.innerHTML = arr[data].length;
      }
      else
         li.innerHTML = arr[data]
   } else {
      li.innerHTML = 'Не найдено'
   }
})
title.innerHTML = arr.nameRu;
suptitle.innerHTML = arr.nameEn;
img.src = arr.posterUrl;
span.innerHTML = arr.nameRu;
infor.onclick = () => {
   infor.classList.add('active');
   biogref.classList.remove('active');
   info.style.display = "block";
   biog.style.display = 'none';
}

biogref.onclick = () => {
   infor.classList.remove('active');
   biogref.classList.add('active');
   info.style.display = "none";
   biog.style.display = 'block';
}
let films_arr = [];
// arr.films.forEach(async film => {
//    console.log(film);
   
   // await fetch('https://kinopoiskapiunofficial.tech/api/v2.2/films/449993' , {
   //    method: 'GET',
   //    headers: {
   //       'X-API-KEY': '3c25d2e7-bb7e-4d62-9721-145b3f9c34e9',
   //       'Content-Type': 'application/json',
   //    },
   // }).then(res => res.json())
   //    .then(json => {
   //       console.log(json);
         
   //       films_arr.push(json);
   //    })
// })
// reload_item(container , films_arr);
// [
//    {
//       "filmId": 449993,
//       "nameRu": "Финес и Ферб",
//       "nameEn": "Phineas and Ferb",
//       "rating": "7.6",
//       "general": false,
//       "description": "Officer Concord",
//       "professionKey": "ACTOR"
//    },
//    {
//       "filmId": 461750,
//       "nameRu": "Удивительные злоключения Флэпджека",
//       "nameEn": "The Marvelous Misadventures of Flapjack",
//       "rating": "7.0",
//       "general": false,
//       "description": "",
//       "professionKey": "WRITER"
//    },
//    {
//       "filmId": 573553,
//       "nameRu": "Рыбология",
//       "nameEn": "Fish Hooks",
//       "rating": "4.4",
//       "general": false,
//       "description": "",
//       "professionKey": "WRITER"
//    },
//    {
//       "filmId": 573553,
//       "nameRu": "Рыбология",
//       "nameEn": "Fish Hooks",
//       "rating": "4.4",
//       "general": false,
//       "description": "Clamantha, озвучка",
//       "professionKey": "ACTOR"
//    },
//    {
//       "filmId": 591929,
//       "nameRu": "Гравити Фолз",
//       "nameEn": "Gravity Falls",
//       "rating": "9.0",
//       "general": false,
//       "description": "",
//       "professionKey": "WRITER"
//    },
//    {
//       "filmId": 591929,
//       "nameRu": "Гравити Фолз",
//       "nameEn": "Gravity Falls",
//       "rating": "9.0",
//       "general": false,
//       "description": "Grunkle Stan / Soos / Bill Cipher / Norman / Jeff, озвучка",
//       "professionKey": "ACTOR"
//    },
//    {
//       "filmId": 591929,
//       "nameRu": "Гравити Фолз",
//       "nameEn": "Gravity Falls",
//       "rating": "9.0",
//       "general": false,
//       "description": "исполнительный продюсер",
//       "professionKey": "PRODUCER"
//    },
//    {
//       "filmId": 685246,
//       "nameRu": "Рик и Морти",
//       "nameEn": "Rick and Morty",
//       "rating": "9.0",
//       "general": false,
//       "description": "Toby Matthews, озвучка",
//       "professionKey": "ACTOR"
//    },
//    {
//       "filmId": 790322,
//       "nameRu": "С приветом по планетам",
//       "nameEn": "Wander Over Yonder",
//       "rating": "8.1",
//       "general": false,
//       "description": "дополнительные голоса",
//       "professionKey": "ACTOR"
//    },
//    {
//       "filmId": 818971,
//       "nameRu": "Звёздная принцесса и силы зла",
//       "nameEn": "Star vs. the Forces of Evil",
//       "rating": "8.5",
//       "general": false,
//       "description": "Ben Fotino",
//       "professionKey": "ACTOR"
//    },
//    {
//       "filmId": 885584,
//       "nameRu": "Гравити Фолз: Короткие истории",
//       "nameEn": "Gravity Falls Shorts",
//       "rating": "8.2",
//       "general": false,
//       "description": "",
//       "professionKey": "WRITER"
//    },
//    {
//       "filmId": 885584,
//       "nameRu": "Гравити Фолз: Короткие истории",
//       "nameEn": "Gravity Falls Shorts",
//       "rating": "8.2",
//       "general": false,
//       "description": "Grunkle Stan",
//       "professionKey": "ACTOR"
//    },
//    {
//       "filmId": 885584,
//       "nameRu": "Гравити Фолз: Короткие истории",
//       "nameEn": "Gravity Falls Shorts",
//       "rating": "8.2",
//       "general": false,
//       "description": "исполнительный продюсер, в титрах не указан",
//       "professionKey": "PRODUCER"
//    },
//    {
//       "filmId": 885584,
//       "nameRu": "Гравити Фолз: Короткие истории",
//       "nameEn": "Gravity Falls Shorts",
//       "rating": "8.2",
//       "general": false,
//       "description": "исполнительный продюсер (в титрах не указан) (2 эпизода, 2014)",
//       "professionKey": "PRODUCER"
//    },
//    {
//       "filmId": 885584,
//       "nameRu": "Гравити Фолз: Короткие истории",
//       "nameEn": "Gravity Falls Shorts",
//       "rating": "8.2",
//       "general": false,
//       "description": "исполнительный продюсер, в титрах не указан (2 эпизода, 2014)",
//       "professionKey": "PRODUCER"
//    },
//    {
//       "filmId": 926854,
//       "nameRu": "Вся правда о медведях",
//       "nameEn": "We Bare Bears",
//       "rating": "8.3",
//       "general": false,
//       "description": "Internet Troll",
//       "professionKey": "ACTOR"
//    },
//    {
//       "filmId": 977618,
//       "nameRu": "Гравити Фолз: Между сосен",
//       "nameEn": "Gravity Falls: Between the Pines",
//       "rating": "7.8",
//       "general": false,
//       "description": "играет самого себя",
//       "professionKey": "HIMSELF"
//    },
//    {
//       "filmId": 1040441,
//       "nameRu": "Angry Birds 2 в кино",
//       "nameEn": "The Angry Birds Movie 2",
//       "rating": "7.2",
//       "general": false,
//       "description": "Steve, озвучка",
//       "professionKey": "ACTOR"
//    },
//    {
//       "filmId": 1122269,
//       "nameRu": null,
//       "nameEn": "Mabel's Scrapbook",
//       "rating": null,
//       "general": false,
//       "description": "Grunkle Stan",
//       "professionKey": "ACTOR"
//    },
//    {
//       "filmId": 1122269,
//       "nameRu": null,
//       "nameEn": "Mabel's Scrapbook",
//       "rating": null,
//       "general": false,
//       "description": "в титрах не указан",
//       "professionKey": "WRITER"
//    },
//    {
//       "filmId": 1122269,
//       "nameRu": null,
//       "nameEn": "Mabel's Scrapbook",
//       "rating": null,
//       "general": false,
//       "description": "исполнительный продюсер, в титрах не указан (2 эпизода, 2014)",
//       "professionKey": "PRODUCER"
//    },
//    {
//       "filmId": 1135889,
//       "nameRu": null,
//       "nameEn": "My Moon",
//       "rating": null,
//       "general": false,
//       "description": "исполнительный продюсер",
//       "professionKey": "PRODUCER"
//    },
//    {
//       "filmId": 1146303,
//       "nameRu": "Митчеллы против машин",
//       "nameEn": "The Mitchells vs the Machines",
//       "rating": "7.8",
//       "general": false,
//       "description": "Dirk, озвучка",
//       "professionKey": "ACTOR"
//    },
//    {
//       "filmId": 1146303,
//       "nameRu": "Митчеллы против машин",
//       "nameEn": "The Mitchells vs the Machines",
//       "rating": "7.8",
//       "general": false,
//       "description": "история",
//       "professionKey": "WRITER"
//    },
//    {
//       "filmId": 1146303,
//       "nameRu": "Митчеллы против машин",
//       "nameEn": "The Mitchells vs the Machines",
//       "rating": "7.8",
//       "general": false,
//       "description": "озвучка",
//       "professionKey": "ACTOR"
//    },
//    {
//       "filmId": 1167667,
//       "nameRu": null,
//       "nameEn": "Gravity Falls: TV Shorts",
//       "rating": "7.6",
//       "general": false,
//       "description": "Grunkle Stan, озвучка",
//       "professionKey": "ACTOR"
//    },
//    {
//       "filmId": 1167667,
//       "nameRu": null,
//       "nameEn": "Gravity Falls: TV Shorts",
//       "rating": "7.6",
//       "general": false,
//       "description": "в титрах не указан",
//       "professionKey": "WRITER"
//    },
//    {
//       "filmId": 1167667,
//       "nameRu": null,
//       "nameEn": "Gravity Falls: TV Shorts",
//       "rating": "7.6",
//       "general": false,
//       "description": "исполнительный продюсер, в титрах не указан",
//       "professionKey": "PRODUCER"
//    },
//    {
//       "filmId": 1174294,
//       "nameRu": "Амфибия",
//       "nameEn": "Amphibia",
//       "rating": "8.9",
//       "general": false,
//       "description": "Frog Soos",
//       "professionKey": "ACTOR"
//    },
//    {
//       "filmId": 1183519,
//       "nameRu": "Семейка Грин в городе",
//       "nameEn": "Big City Greens",
//       "rating": "6.5",
//       "general": false,
//       "description": "дополнительные голоса",
//       "professionKey": "ACTOR"
//    },
//    {
//       "filmId": 1212459,
//       "nameRu": null,
//       "nameEn": "Elvis & Dimmi",
//       "rating": null,
//       "general": false,
//       "description": "Gary / Shopkeeper, озвучка",
//       "professionKey": "ACTOR"
//    },
//    {
//       "filmId": 1254041,
//       "nameRu": "Дом совы",
//       "nameEn": "The Owl House",
//       "rating": "8.6",
//       "general": false,
//       "description": "King, озвучка",
//       "professionKey": "ACTOR"
//    },
//    {
//       "filmId": 1263653,
//       "nameRu": "Корпорация «Заговор»",
//       "nameEn": "Inside Job",
//       "rating": "7.8",
//       "general": false,
//       "description": "",
//       "professionKey": "WRITER"
//    },
//    {
//       "filmId": 1263653,
//       "nameRu": "Корпорация «Заговор»",
//       "nameEn": "Inside Job",
//       "rating": "7.8",
//       "general": true,
//       "description": "Grassy Noel Atkinson",
//       "professionKey": "ACTOR"
//    },
//    {
//       "filmId": 1263653,
//       "nameRu": "Корпорация «Заговор»",
//       "nameEn": "Inside Job",
//       "rating": "7.8",
//       "general": true,
//       "description": "Grassy Noel, озвучка",
//       "professionKey": "ACTOR"
//    },
//    {
//       "filmId": 1263653,
//       "nameRu": "Корпорация «Заговор»",
//       "nameEn": "Inside Job",
//       "rating": "7.8",
//       "general": false,
//       "description": "исполнительный сопродюсер",
//       "professionKey": "PRODUCER"
//    },
//    {
//       "filmId": 77164,
//       "nameRu": "Симпсоны",
//       "nameEn": "The Simpsons",
//       "rating": "8.4",
//       "general": true,
//       "description": "Bill Cipher",
//       "professionKey": "ACTOR"
//    },
//    {
//       "filmId": 1332007,
//       "nameRu": "Космобой",
//       "nameEn": "Kid Cosmic",
//       "rating": "7.8",
//       "general": false,
//       "description": "история",
//       "professionKey": "WRITER"
//    },
//    {
//       "filmId": 1368529,
//       "nameRu": null,
//       "nameEn": "Owl Pellets",
//       "rating": null,
//       "general": false,
//       "description": "King",
//       "professionKey": "ACTOR"
//    },
//    {
//       "filmId": 1386049,
//       "nameRu": null,
//       "nameEn": "Gravity Falls: Pilot",
//       "rating": null,
//       "general": false,
//       "description": "",
//       "professionKey": "DIRECTOR"
//    },
//    {
//       "filmId": 5054072,
//       "nameRu": null,
//       "nameEn": "Chibiverse",
//       "rating": null,
//       "general": false,
//       "description": "Grunkle Stan",
//       "professionKey": "ACTOR"
//    },
//    {
//       "filmId": 5164633,
//       "nameRu": null,
//       "nameEn": "Take Your Hatchlings to Work Day",
//       "rating": null,
//       "general": false,
//       "description": "Steve, озвучка",
//       "professionKey": "ACTOR"
//    }
// ]