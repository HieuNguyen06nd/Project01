// login
const btnloginshow = document.querySelector("#header_login")

btnloginshow.addEventListener("click", function(){
    document.querySelector("#login__form").style.display="block";
    console.log(btnloginshow)
});
// reg
const btnregshow = document.querySelector("#header_reg")

btnregshow.addEventListener("click", function(){
    document.querySelector("#register__form").style.display="block";
    console.log(btnloginshow)
});
// header
// $(Document).ready(function(){
//     $(window).scroll(function(){
//         if($(this.scrollTop)){
//             $('header').addClass('sticky');
//         }else{
//             $('header').removeClass('sticky');
//         }
//     });
    
// });

// slider
$('.slider_owl').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay:true,
    autoplayTimeout:3000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});
// cagetory
$('.category__content-items').owlCarousel({
    loop:true,
    margin:10,
    dots:false,
    nav:true,
    responsive:{
        0:{
            items:3
        },
        600:{
            items:3
        },
        1000:{
            items:8
        }
    }
});
var owl = $('.category__content-items');
owl.on('mousewheel', '.owl-stage', function (e) {
    if (e.deltaY>0) {
        owl.trigger('next.owl');
    } else {
        owl.trigger('prev.owl');
    }
    e.preventDefault();
});

// list product

$('.list_product-content-items').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})