import { footer_reload, header_reload } from "../../modules/ui";

let wrapper = document.querySelector('.wrapper');
header_reload(wrapper);
footer_reload(wrapper);


let info = document.querySelector('[data-info]');
let biog = document.querySelector('[data-biog]');
let infor = document.querySelector('.information');
let biogref = document.querySelector('.biograf');

infor.onclick = () => {
   infor.classList.add('active');
   biogref.classList.remove('active');
   info.style.display="block";
   biog.style.display='none';
}

biogref.onclick = () => {
   infor.classList.remove('active');
   biogref.classList.add('active');
   info.style.display="none";
   biog.style.display='block';
}