
//     var silder = $(".testimonials");
//     silder.testimonials({
//         autoplay: true,
//         autoplayTimeout: 3000,
//         autoplayHoverPause: false,
//         items: 1,
//         stagePadding: 20,
//         center: true,
//         nav: false,
//         margin: 50,
//         dots: true,
//         loop: true,
//         responsive: {
//             0: { items: 1 },
//             480: { items: 2 },
//             575: { items: 2 },
//             768: { items: 2 },
//             991: { items: 3 },
//             1200: { items: 4 }
//         }
//     });
// });



// $(".question").click(function(){
//     var id = $(this).attr("rel");
//     $(".answer").hide();
//     $(".fa").removeClass("fa-minus").addClass("fa-plus");
//       $("#i"+id).addClass("fa-minus").removeClass("fa-plus");
//     $("#answer"+id).show();
// })

$(document).ready(function () {
    $("uni-nav-menu").click(function () {
        // $(".answer").hide();
        $("uni-nav-items").removeClass("uni-nav-items").addClass("active");
        // $("active").removeClass("active").addClass("uni-nav-items");
        //   $("#i"+id).addClass("fa-minus").removeClass("fa-plus");
        // $("#answer"+id).show();
    })
});


$(document).ready(function () {
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }
    });
});
$(document).ready(function () {
    $('.test').tecard({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            1000: {
                items: 2,
                nav: false
            }
        }
    });
});

function openNav() {
    document.getElementById("mySidepanel").style.width = "250px";
}
function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
}