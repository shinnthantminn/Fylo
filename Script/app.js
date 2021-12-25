let header = document.querySelector(".navbar");
let but = document.querySelector(".forBut");

but.classList.add("hidden");

let headerControl = new Waypoint({
    element: document.getElementById('home'),
    handler: function(direction) {
        if (direction == "down"){
            but.classList.remove("animate__bounceOutUp");
            but.classList.add("show");
            header.classList.remove("heightPadding");
            header.classList.remove("animate__fadeInDown");
            header.classList.remove("main");
            header.classList.add("navBg");
            header.classList.add("animate__slideInDown");
            header.classList.add("lowPadding");
            but.classList.add("animate__bounceInDown");
            header.classList.add("shadow");
        }
        else {
            header.classList.remove("navBg");
            header.classList.remove("shadow");
            header.classList.remove("animate__slideInDown");
            header.classList.remove("lowPadding");
            but.classList.remove("animate__bounceInDown");
            header.classList.add("main");
            header.classList.add("heightPadding");
            header.classList.add("animate__fadeInDown");
            but.classList.add("animate__bounceOutUp");
        }
    }
})

ScrollReveal({
    origin:"top",
    distance: "30px",
    duration:2000,
    reset:true
}).reveal(".header",{
    interval:200
})

ScrollReveal({
    origin:"left",
    distance: "30px",
    duration:2000,
    reset:true
}).reveal(".left",{
    interval:200
})

ScrollReveal({
    origin:"right",
    distance: "30px",
    duration:2000,
    reset:true
}).reveal(".right",{
    interval:200
})