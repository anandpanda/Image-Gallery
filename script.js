let scrollCont = document.querySelector(".gallery");
let backBtn = document.getElementById("backBtn");
let nextBtn = document.getElementById("nextBtn");

scrollCont.addEventListener("wheel", (evt) => {
    scrollCont.style.scrollBehavior = 'auto';
    evt.preventDefault();
    scrollCont.scrollLeft += evt.deltaY;
});

nextBtn.addEventListener("click", () => {
    scrollCont.style.scrollBehavior = 'smooth';
    scrollCont.scrollLeft += 900;
});
backBtn.addEventListener("click", () => {
    scrollCont.style.scrollBehavior = 'smooth';
    scrollCont.scrollLeft -= 900;
});