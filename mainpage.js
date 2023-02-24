


window.addEventListener('scroll', () => {
  document.body.style.setProperty('--scroll',window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
}, false);




const grid = document.querySelector('.grid')
const items = document.querySelectorAll('.item')

items.forEach((item) => {
  item.addEventListener('mouseenter', () => {
    gsap.to(grid, {
      '--track': '2fr',
      duration: 0.3,
    })
    gsap.to(item, {
      '--innerTrack': '1fr',
      duration: 0.3,
    })
  })

  item.addEventListener('mouseleave', () => {
    gsap.to(grid, {
      '--track': '1fr',
      duration: 0.3,
    })
    gsap.to(item, {
      '--innerTrack': '0fr',
      duration: 0.3,
    })
  })
})




$(document).ready(function(){
    var scrollTop = 0;
    $(window).scroll(function(){
      scrollTop = $(window).scrollTop();
       $('.counter').html(scrollTop);
      
      if (scrollTop >= 100) {
        $('#global-nav').addClass('scrolled-nav');
      } else if (scrollTop < 100) {
        $('#global-nav').removeClass('scrolled-nav');
      } 
      
    }); 
    
  });
