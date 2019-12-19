/*  ################### 
       ! Preloader
    ###################  */
$(window).on('load', function () {
    $("#status").fadeOut();
    $("#preloader").delay(350).fadeOut(500);
});
// ! mobile menu click option

function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}



/*  ############################### 
      ? ((...PORTFOLIO...))
    ###############################  */
$(document).ready(function () {
    var mixer = mixitup('.portfolio-gallery');
});



/*  ############################### 
    ? ((...HIDE SHOW BACK BUTTON...))
    ###############################  */
$(function () {
    $(window).scroll(function () {
        // ! Show/hide page loade
        showHideNav();
    });

    function showHideNav() {
        if ($(window).scrollTop() > 50) {
            // ! Show Back To right Button
            $("#back-to-top").fadeIn();
        } else {
            // ! Hide Back To right Button
            $("#back-to-top").fadeOut();
        }
    }
});