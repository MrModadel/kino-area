export function header_reload(place) {
   let header = document.createElement('header');
   header.classList.add('header')
   header.innerHTML = `<div class="header__container container">
   <div class="header__logo-box">
      <div class="header__logo-top">
         <img src="/public/icons/cinema.svg" alt="cinema" class="header__logo-img">
         <span>Kino</span>area
      </div>
      <img src="/public/icons/social-network.png" alt="Social Network" class="header__social-network">
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
   place.prepend(header)
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
      div.append(img , title , sup_title , p);
      place.append(div);
   }
}