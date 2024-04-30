let active = 0;
let slides = document.querySelectorAll(".slide");
let points = document.querySelectorAll(".points > span");
let prev = document.querySelector(".button-next");
let next = document.querySelector(".button-prev");


function classSwitcher() {
    slides.forEach(slide => slide.classList.remove("active"));
    points.forEach(point => point.classList.remove("active"));
    slides[active].classList.add("active");
    points[active].classList.add("active");
}

function goNext() {
    if (active == slides.length - 1) {
        active = 0;
    } else {
        active++;
    }
    classSwitcher()
}


next.addEventListener("click", (e) => {
    goNext();
})


function goPrev() {
    if (active == 0) {
        active = slides.length - 1;
    } else {
        active--;
    }
    classSwitcher()
}

prev.addEventListener("click", (e) => {
    goPrev();
})


points.forEach((point, index) => {
    point.addEventListener("click", (e) => {
        active = index;
        classSwitcher();
    })
})