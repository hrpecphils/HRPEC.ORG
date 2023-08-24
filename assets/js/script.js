var lastScrollTop;
const btn = document.getElementById('menu-btn');
const nav = document.getElementById('menu');
const back2Top = document.getElementById('back2Top');
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
 window.addEventListener("scroll", (e) => {
  if(window.scrollY >= 400) {
      
      back2Top.classList.remove("hidden");
      back2Top.classList.add("block");
      
  } else {
      back2Top.classList.add("hidden");
      back2Top.classList.remove("block");
  }
});

 back2Top.addEventListener('click', (e) => {
  e.preventDefault();
  window.scroll({
  top:0, left:0, behavior:"smooth"});
  });
  