/*nav bar change bg*/
var nav = document.querySelector("nav");
window.addEventListener("scroll" , function()
{

   if (window.pageYOffset > 100) 
   { 
       nav.classList.add('bg-dark' , 'shadow');
       
   }
   else
   {
       nav.classList.remove('bg-dark' , 'shadow');
   }

} );

/*end navbar cahnge bg*/ 

/*==================== SHOW SCROLL TOP ====================*/ 
function scrollTop(){
    const scrollTop = document.getElementById('scroll-top');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 560) scrollTop.classList.add('show-scroll');
    else scrollTop.classList.remove('show-scroll')
  }
  window.addEventListener('scroll', scrollTop)
  

/*==================== SCROLL REVEAL ANIMATION ====================*/
ScrollReveal({ distance: '60px' });
ScrollReveal().reveal(' .one , .tow ' , { origin: 'right' });
ScrollReveal().reveal(' .item-aimation , .item-service ,.item-client  ', { origin: 'left' });