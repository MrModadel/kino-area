import axios from "axios";
let baseUrl = 'http://localhost:5050';

export function header_reload(place) {
   let header = document.createElement('header');
   header.classList.add('header')
   header.innerHTML = `<div class="header__container container">
   <div class="header__logo-box">
      <div class="header__logo-top">
         <img src="/public/icons/cinema.svg" alt="cinema" class="header__logo-img">
         <span>Kino</span>area
      </div>
      <div class="header__social-network-box">
      <img src="/public/icons/social-network.png" alt="Social Network" class="header__social-network">
      </div>
   </div>
   <nav class="header__nav">
      <ul>
         <li><a href="#" class="header__link">Афиша</a></li>
         <li><a href="#" class="header__link">Медиа</a></li>
         <li><a href="#" class="header__link">Фильмы</a></li>
         <li><a href="#" class="header__link">Актёры</a></li>
         <li><a href="#" class="header__link">Новости</a></li>
         <li><a href="#" class="header__link">Подборки</a></li>
         <li><a href="#" class="header__link">Категории</a></li>
      </ul>
   </nav>
   <div class="header__right">
      <div class="header__search">
         <input type="text">
      </div>
      <div class="header__btn btn">Войти</div>
   </div>
   </div>`
   place.prepend(header);
   let icons = header.querySelector('.header__social-network-box');
   axios.get(baseUrl + '/social_net')
      .then(res => icons_reload(icons, res.data))
}

export function reload_item(place, arr) {
   place.innerHTML = ''
   console.log(arr);

   for (let item of arr) {
      place.innerHTML += `<div class="item" id="${item.kinopoiskId}">
      <div class="item__top">
         <img src="${item.posterUrl}" alt="">
         <div class="item__reyting">${item.ratingKinopoisk}</div>
         <div class="blue-effect">
            <button>Карточка фильма</button>
         </div>
      </div>
      <div class="item__bottom">
         <h4 class="item__title">${item.nameRu}</h4>
         <p class="item__p">${item.type}</p>
      </div>
   </div>`
   }
   let items = place.querySelectorAll('.item');
   items.forEach(item => {
      let button = item.querySelector('button');
      button.onclick = () => {
         location.assign(`pages/card/?itemId=${item.id}`);
      }
   });
}

export let card = [
   {
      title: "Побег из Претории",
      description: "Триллер",
      img: "/public/icons/image 1.png",
      id: 10
   },
   {
      title: "Побег из Претории",
      description: "Триллер",
      img: "/public/icons/image 1.png",
      id: 9
   },
   {
      title: "Побег из Претории",
      description: "Триллер",
      img: "/public/icons/image 1.png",
      id: 8
   },
   {
      title: "Побег из Претории",
      description: "Триллер",
      img: "/public/icons/image 1.png",
      id: 7
   }, {
      title: "Побег из Претории",
      description: "Триллер",
      img: "/public/icons/image 1.png",
      id: 6
   },
   {
      title: "Побег из Претории",
      description: "Триллер",
      img: "/public/icons/image 1.png",
      id: 5
   },
   {
      title: "Побег из Претории",
      description: "Триллер",
      img: "/public/icons/image 1.png",
      id: 4
   },
   {
      title: "Побег из Претории",
      description: "Триллер",
      img: "/public/icons/image 1.png",
      id: 3
   },
   {
      title: "Побег из Претории",
      description: "Триллер",
      img: "/public/icons/image 1.png",
      id: 2
   },
   {
      title: "Побег из Претории",
      description: "Триллер",
      img: "/public/icons/image 1.png",
      id: 1
   }
]
let a = {
   description: null,
   nameEn: "Frank Darabont",
   nameRu: "Фрэнк Дарабонт",
   posterUrl: "https://kinopoiskapiunofficial.tech/images/actor_posters/kp/24262.jpg",
   professionKey: "DIRECTOR",
   professionText: "Режиссеры",
   staffId: 24262
}

export function reload_staff(arr, place) {
   place.innerHTML = '';
   for (let item of arr) {
      console.log(item);

      let div = document.createElement('div');
      let img = document.createElement('img');
      let title = document.createElement('h3');
      let sup_title = document.createElement('h5');
      let p = document.createElement('p');
      //style
      div.className = 'staff__item';
      //inner
      img.src = item.posterUrl;
      title.innerText = item.nameRu;
      sup_title.innerText = item.nameEn;
      p.innerText = item.professionText;
      //append 
      div.append(img, title, sup_title, p);
      place.append(div);

      div.onclick = () => {
         location.assign('/pages/actior/?staffId=' + item.staffId)
      }
   }
}

export function reload_next(next, prev, count, place, numder = 0, max) {
   let n = numder;
   let last_n = numder + 4;
   let count_n = 1;
   next.onclick = () => {
      if (last_n < max * 4) {
         n += 4;
         last_n += 4;
         count_n += 1;
         console.log(n, last_n);

         fetch_reload(n, last_n, place)
            .then(() => {
               count.innerHTML = count_n + '/' + max;
            })
      }
   }
   prev.onclick = () => {
      console.log(n);

      if (n > 0) {
         n -= 4;
         last_n -= 4;
         count_n -= 1;
         fetch_reload(n, last_n, place)
            .then(() => {
               count.innerHTML = count_n + '/' + max;
            })
      }
   }

   async function fetch_reload(n1, n2, place) {
      await fetch('https://kinopoiskapiunofficial.tech/api/v2.2/films', {
         method: 'GET',
         headers: {
            'X-API-KEY': '3c25d2e7-bb7e-4d62-9721-145b3f9c34e9',
            'Content-Type': 'application/json',
         },
      })
         .then(res => res.json())
         .then(json => reload_item(place, json.items.slice(n1, n2)))
         .catch(err => console.log(err))
   }
}

export function footer_reload(place) {
   let footer = document.createElement('footer');
   footer.classList.add('footer');
   footer.innerHTML = `
   <div class="footer__container container">
      <div class="footer__expected">
         <div class="footer__top sec-top">
            <h1 class="sec-top__title">Ожидаемые новинки</h1>
            <div class="arrows">
               <img class="arrows__one  tr-arrow__one" src="/public/icons/arrow.svg" alt="">
               <span class="tr-count">1/5</span>
               <img class="arrows__two  tr-arrow__two" src="/public/icons/arrow.svg" alt="">
            </div>
         </div>
         <div class="footer__items items-wrapper">
            <div class="item">
               <div class="item__top">
                  <img src="/public/icons/image 1.png" alt="">
               </div>
               <div class="item__bottom">
                  <h4 class="item__title">Побег из Претории</h4>
                  <p class="item__p">Триллер</p>
               </div>
            </div>
            <div class="item">
               <div class="item__top">
                  <img src="/public/icons/image 1.png" alt="">
               </div>
               <div class="item__bottom">
                  <h4 class="item__title">Побег из Претории</h4>
                  <p class="item__p">Триллер</p>
               </div>
            </div>
            <div class="item">
               <div class="item__top">
                  <img src="/public/icons/image 1.png" alt="">
               </div>
               <div class="item__bottom">
                  <h4 class="item__title">Побег из Претории</h4>
                  <p class="item__p">Триллер</p>
               </div>
            </div>
            <div class="item">
               <div class="item__top">
                  <img src="/public/icons/image 1.png" alt="">
               </div>
               <div class="item__bottom">
                  <h4 class="item__title">Побег из Претории</h4>
                  <p class="item__p">Триллер</p>
               </div>
            </div>
         </div>
      </div>
   </div>
   <div class="footer__end">
      <img src="/public/icons/social-network.png" alt="">
      <nav class="sec-top__nav">
         <ul>
            <li><a href="#">Афиша</a></li>
            <li><a href="#">Новости</a></li>
            <li><a href="#">Персоны</a></li>
            <li><a href="#">Рейтинги</a></li>
            <li><a href="#">Рецензии</a></li>
            <li><a href="#">Каталог фильмов</a></li>
         </ul>
      </nav>
      <a href="#" class="footer__io">2020 © Kinoarea. Все права защищены</a>
      <a href="#" class="footer__polit">Политика конфиденциальности</a>
   </div>`
   place.append(footer)
}


export function icons_reload(place, arr) {
   place.innerHTML = ''
   for (let item of arr) {
      let itemDiv = document.createElement('a');
      let img = document.createElement('img');
      itemDiv.id = item.id
      img.src = '/icons/' + item.name;
      itemDiv.href = item.url;
      itemDiv.classList.add('cl-net-item');
      itemDiv.appendChild(img);
      place.append(itemDiv);
   }
}