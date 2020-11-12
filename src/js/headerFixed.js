/* Navbar Collapse */
$(document).ready(function () {
    $(".header__menu").click(function () {
        var navbar = document.querySelector(".header__navbar");
        if (navbar.clientHeight) {
            navbar.style.height = 0;
        } else {
            var navbarList = document.querySelector(".navbar__list");
            navbar.style.height = navbarList.clientHeight + "px";
        }
    });
});

/* Navbar Change BgColor after Hero */
$(document).ready(function () {
    $(window).scroll(function() {
        if (window.matchMedia("(min-width: 768px)").matches) {
            if ($(document).scrollTop() > 60) {
                $(".header").addClass("header--bgcolor")
                $(".header__logo").css("fill","#77aad4")
                $(".navbar__item").addClass("navbar__item--color")
                $(".search-input").addClass("header--input")
            } else{
                $(".header").removeClass("header--bgcolor")
                $(".header__logo").css("fill","#fff")
                $(".navbar__item").removeClass("navbar__item--color")
                $(".search-input").removeClass("header--input")
            }
        }
    })
});