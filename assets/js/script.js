var lastScrollTop;
const btn = document.getElementById('menu-btn');
const nav = document.getElementById('menu');
const navbar = document.getElementById('navbar');

btn.addEventListener('click', () => {
  btn.classList.toggle('open')
  nav.classList.toggle('flex')
  nav.classList.toggle('hidden')
})
window.addEventListener('scroll',function(){
 
   var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
   
   if(scrollTop > lastScrollTop){ 
     navbar.style.top='-80px';
   }
   else{
     navbar.style.top='0';
   }
   lastScrollTop = scrollTop; 
 });