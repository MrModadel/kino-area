import axios from "axios";
import { footer_reload, header_reload, icons_reload } from "../../modules/ui";
let wrapper = document.querySelector('.wrapper');
header_reload(wrapper);
let baseUrl = 'http://localhost:5050';
let icons = document.querySelector('.user__icons');
let btn = document.querySelector('.setting');
let right = document.querySelector('.right');
let settings_menu = document.querySelector('.settings-menu');
let p = btn.querySelector('p');
await axios.get(baseUrl + '/social_net')
   .then(res => icons_reload(icons, res.data))
let inputs = document.querySelectorAll('.settings-menu input ,.settings-menu textarea ');
let inputs2 = document.querySelectorAll('.cl-net-box input');
let cl_menu = document.querySelector('.cl-net-box')
var months = ["January", "February", "March", "April", "May", "June",
   "July", "August", "September", "October", "November", "December"];

let user = {};
let cl_net = [];
await axios.get(baseUrl + '/user')
   .then(res => user = res.data);
await axios.get(baseUrl + '/social_net')
   .then(res => cl_net = res.data);

let items = document.querySelectorAll('[data-type]');

btn.onclick = async () => {
   if (!btn.classList.contains('btn-active-setting')) {
      btn.classList.add('btn-active-setting');

      inputs.forEach(input => {
         input.value = user[input.name]
      })

      inputs2.forEach(input => {
         console.log('rgfed');
         console.log(cl_net);
         
         cl_net.forEach(el => {
            console.log('tgrfed');

            if (input.name === el.name) {
               console.log('trf');

               input.value = el.url;
               input.id = el.id
               console.log(input.id);

            }
         })
      })
      cl_menu.style.display = 'flex';
      settings_menu.style.display = 'grid';
      right.style.display = 'none';
      p.innerText = 'Сохранить';

   } else {
      btn.classList.remove('btn-active-setting')
      settings_menu.style.display = 'none';
      right.style.display = 'flex';
      cl_menu.style.display = 'none';
      p.innerText = 'Настройки';
      let obj = {};
      inputs.forEach(input => {
         obj[input.name] = input.value;
      })
      inputs2.forEach(async input => {
         let item = {};
         item.name = input.name;
         item.url = input.value;
         await axios.patch(baseUrl + '/social_net/' + input.id ,item )
      })
      await axios.patch(baseUrl + '/user', obj)
         .then(res => user = res.data);

      items.forEach((item) => {
         let data = item.dataset.type;
         let value = user[data];
         console.log(value);

         if (data === 'dr') {
            let sp_vl = value.split('-');
            item.innerHTML = sp_vl[2] + ',' + months[+sp_vl[1] - 1] + ',' + sp_vl[0];
            return
         } else if (data === 'name')
            item.innerHTML = value + ' ' + user.lastname;
         else
            item.innerHTML = value
      })
      axios.get(baseUrl + '/social_net')
         .then(res => icons_reload(icons, res.data))
   }
}


items.forEach((item) => {
   let data = item.dataset.type;
   let value = user[data];
   if (data === 'dr') {
      let sp_vl = value.split('-');
      item.innerHTML = sp_vl[2] + ',' + months[+sp_vl[1] - 1] + ',' + sp_vl[0];
      return
   } else if (data === 'name')
      item.innerHTML = value + ' ' + user.lastname;
   else
      item.innerHTML = value
})



footer_reload(wrapper);
