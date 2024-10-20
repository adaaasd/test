document.querySelector(".burger_btn").addEventListener("click", function() {
    document.querySelector(".burger_btn").classList.toggle("burger_icon_close");
    document.querySelector(".nav_mobile").classList.toggle("nav_mobile_active");
    document.querySelector(".logo").classList.toggle("logo_close");
    document.body.classList.toggle("body_scroll");
});

document.querySelectorAll(".nav_mobile .nav_text_header").forEach(function(element) {
    element.addEventListener("click", function() {
        document.querySelector(".burger_btn").classList.remove("burger_icon_close");
        document.querySelector(".nav_mobile").classList.remove("nav_mobile_active");
        document.querySelector(".logo").classList.remove("logo_close");
        document.body.classList.remove("body_scroll");
    });
});