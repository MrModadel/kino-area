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
   for (let item of arr) {
      place.innerHTML += `<div class="item" id="${item.id}">
      <div class="item__top">
         <img src="${item.img}" alt="">
         <div class="item__reyting">6.70</div>
         <div class="blue-effect">
            <button>Карточка фильма</button>
         </div>
      </div>
      <div class="item__bottom">
         <h4 class="item__title">${item.title}</h4>
         <p class="item__p">${item.description}</p>
      </div>
   </div>`
   }
   let items = place.querySelectorAll('.item');
   items.forEach(item => {
      let button = item.querySelector('button');
      button.onclick = () => {
         location.assign(`http://localhost:5173/pages/card/index.html?itemId=${item.id}`);
      }
   });
}

export let card = [
   {
      title: "Побег из Претории",
      description: "Триллер",
      img: "/public/icons/image 1.png",
      id:10
   },
   {
      title: "Побег из Претории",
      description: "Триллер",
      img: "/public/icons/image 1.png",
      id:9
   },
   {
      title: "Побег из Претории",
      description: "Триллер",
      img: "/public/icons/image 1.png",
      id:8
   },
   {
      title: "Побег из Претории",
      description: "Триллер",
      img: "/public/icons/image 1.png",
      id:7
   }, {
      title: "Побег из Претории",
      description: "Триллер",
      img: "/public/icons/image 1.png",
      id:6
   },
   {
      title: "Побег из Претории",
      description: "Триллер",
      img: "/public/icons/image 1.png",
      id:5
   },
   {
      title: "Побег из Претории",
      description: "Триллер",
      img: "/public/icons/image 1.png",
      id:4
   },
   {
      title: "Побег из Претории",
      description: "Триллер",
      img: "/public/icons/image 1.png",
      id:3
   },
   {
      title: "Побег из Претории",
      description: "Триллер",
      img: "/public/icons/image 1.png",
      id:2
   },
   {
      title: "Побег из Претории",
      description: "Триллер",
      img: "/public/icons/image 1.png",
      id:1
   }
]