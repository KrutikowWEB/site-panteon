$(document).ready(function(){
    $('.galery__slick1').slick(
        {
            dots: true,
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            speed: 800,
            prevArrow: '<button type="button" class="slick-prev"><svg clip-rule="evenodd" fill-rule="evenodd" fill="#FFFF" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m9.474 5.209s-4.501 4.505-6.254 6.259c-.147.146-.22.338-.22.53s.073.384.22.53c1.752 1.754 6.252 6.257 6.252 6.257.145.145.336.217.527.217.191-.001.383-.074.53-.221.293-.293.294-.766.004-1.057l-4.976-4.976h14.692c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-14.692l4.978-4.979c.289-.289.287-.761-.006-1.054-.147-.147-.339-.221-.53-.221-.191-.001-.38.071-.525.215z" fill-rule="nonzero"/></svg></button>',
            nextArrow: '<button type="button" class="slick-next"><svg clip-rule="evenodd" fill-rule="evenodd" fill="#FFFF" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m14.523 18.787s4.501-4.505 6.255-6.26c.146-.146.219-.338.219-.53s-.073-.383-.219-.53c-1.753-1.754-6.255-6.258-6.255-6.258-.144-.145-.334-.217-.524-.217-.193 0-.385.074-.532.221-.293.292-.295.766-.004 1.056l4.978 4.978h-14.692c-.414 0-.75.336-.75.75s.336.75.75.75h14.692l-4.979 4.979c-.289.289-.286.762.006 1.054.148.148.341.222.533.222.19 0 .378-.072.522-.215z" fill-rule="nonzero"/></svg></button>',
            responsive: [
              {
                breakpoint: 1201,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: true
                }
              },
              {
                breakpoint: 993,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                }
              },
              {
                breakpoint: 769,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                }
              },
              {
                breakpoint: 578,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
            ]
          }
    );
  });

  $(document).ready(function(){
    $('.galery__slick2').slick(
        {
            dots: true,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            speed: 800,
            prevArrow: '<button type="button" class="slick-prev"><svg clip-rule="evenodd" fill-rule="evenodd" fill="#FFFF" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m9.474 5.209s-4.501 4.505-6.254 6.259c-.147.146-.22.338-.22.53s.073.384.22.53c1.752 1.754 6.252 6.257 6.252 6.257.145.145.336.217.527.217.191-.001.383-.074.53-.221.293-.293.294-.766.004-1.057l-4.976-4.976h14.692c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-14.692l4.978-4.979c.289-.289.287-.761-.006-1.054-.147-.147-.339-.221-.53-.221-.191-.001-.38.071-.525.215z" fill-rule="nonzero"/></svg></button>',
            nextArrow: '<button type="button" class="slick-next"><svg clip-rule="evenodd" fill-rule="evenodd" fill="#FFFF" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m14.523 18.787s4.501-4.505 6.255-6.26c.146-.146.219-.338.219-.53s-.073-.383-.219-.53c-1.753-1.754-6.255-6.258-6.255-6.258-.144-.145-.334-.217-.524-.217-.193 0-.385.074-.532.221-.293.292-.295.766-.004 1.056l4.978 4.978h-14.692c-.414 0-.75.336-.75.75s.336.75.75.75h14.692l-4.979 4.979c-.289.289-.286.762.006 1.054.148.148.341.222.533.222.19 0 .378-.072.522-.215z" fill-rule="nonzero"/></svg></button>',
            responsive: [
              {
                breakpoint: 1201,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: true,
                }
              },
              {
                breakpoint: 993,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: true,
                }
              },
              {
                breakpoint: 769,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: true,
                }
              }
            ]
          }
    );
  });

  $(document).ready(function(){
    $('.coach__slick').slick(
        {
            slidesToScroll: 1,
            speed: 800,
            prevArrow: '<button type="button" class="slick-prev"><svg clip-rule="evenodd" fill-rule="evenodd" fill="#FFFF" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m9.474 5.209s-4.501 4.505-6.254 6.259c-.147.146-.22.338-.22.53s.073.384.22.53c1.752 1.754 6.252 6.257 6.252 6.257.145.145.336.217.527.217.191-.001.383-.074.53-.221.293-.293.294-.766.004-1.057l-4.976-4.976h14.692c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-14.692l4.978-4.979c.289-.289.287-.761-.006-1.054-.147-.147-.339-.221-.53-.221-.191-.001-.38.071-.525.215z" fill-rule="nonzero"/></svg></button>',
            nextArrow: '<button type="button" class="slick-next"><svg clip-rule="evenodd" fill-rule="evenodd" fill="#FFFF" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m14.523 18.787s4.501-4.505 6.255-6.26c.146-.146.219-.338.219-.53s-.073-.383-.219-.53c-1.753-1.754-6.255-6.258-6.255-6.258-.144-.145-.334-.217-.524-.217-.193 0-.385.074-.532.221-.293.292-.295.766-.004 1.056l4.978 4.978h-14.692c-.414 0-.75.336-.75.75s.336.75.75.75h14.692l-4.979 4.979c-.289.289-.286.762.006 1.054.148.148.341.222.533.222.19 0 .378-.072.522-.215z" fill-rule="nonzero"/></svg></button>',
            responsive: [
              {
                breakpoint: 1201,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                }
              },
              {
                breakpoint: 993,
                settings: {
                  infinite: true,
                  dots: true,
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  
                }
              },
              {
                breakpoint: 769,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: true, 
                }
              }
            ]
          }
    );
  });

  $('a[href^="#"]').click(function(){
    var target = $(this).attr('href');
    $('html, body').animate({scrollTop: $(target).offset().top}, 1000);
    return false;
    });

    window.addEventListener('DOMContentLoaded', () => {
      const menu = document.querySelector('.promo__wrapper'),
      menuItem = document.querySelectorAll('.promo__link'),
      hamburger = document.querySelector('.hamburger');
  
      hamburger.addEventListener('click', () => {
          hamburger.classList.toggle('hamburger_active');
          menu.classList.toggle('promo__wrapper_active');
      });
  
      menuItem.forEach(item => {
          item.addEventListener('click', () => {
              hamburger.classList.toggle('hamburger_active');
              menu.classList.toggle('promo__wrapper_active');
          })
      })
  })

    window.addEventListener('DOMContentLoaded', () => {
      const menu = document.querySelector('.footer__center'),
      menuItem = document.querySelectorAll('.footer__center-link'),
      hamburger = document.querySelector('.hamburger2'),
      bgopacity = document.querySelector('.footer__right');
  
      hamburger.addEventListener('click', () => {
          hamburger.classList.toggle('hamburger2_active');
          menu.classList.toggle('footer__center_active');
          bgopacity.classList.toggle('footer__right_active');
      });
  
      menuItem.forEach(item => {
          item.addEventListener('click', () => {
              hamburger.classList.toggle('hamburger2_active');
              menu.classList.toggle('footer__center_active');
          })
      })
  })


  $(document).ready(function(){
    $('.tickets__slick-slider').slick(
        {
            dots: true,
            infinite: true,
            slidesToShow: 2,
            slidesToScroll: 1,
            speed: 800,
            prevArrow: null,
            nextArrow: null,
            responsive: 
            [
              {
                breakpoint: 578,
                settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
                }
              }
            ]
          }
    );
  });

  $(document).ready(function(){
    $('.tickets__slick-slider2').slick(
        {
            dots: true,
            infinite: true,
            slidesToShow: 2,
            slidesToScroll: 1,
            speed: 800,
            prevArrow: null,
            nextArrow: null,
            responsive: 
            [
              {
                breakpoint: 578,
                settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
                }
              }
            ]
          }
    );
  });