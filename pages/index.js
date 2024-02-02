let scrollContainer=document.querySelector(".carousel-cards");
let nextBtn=document.getElementById("nextBtn");

nextBtn.addEventListener("click", () => {
    const cardWidth = document.querySelector(".card").offsetWidth;

    const totalWidth = scrollContainer.scrollWidth;

    if (scrollContainer.scrollLeft + scrollContainer.offsetWidth >= totalWidth) {
        scrollContainer.scrollLeft = 0;
    } else {
        scrollContainer.style.scrollBehavior = "smooth";
        scrollContainer.scrollLeft += totalWidth;
    }
});


let carouselCards=document.querySelector(".cards");
let preview=document.getElementById("back");
let next=document.getElementById("next");

next.addEventListener("click",()=>{
    carouselCards.style.scrollBehavior="smooth";
    carouselCards.scrollLeft+=360;
});

preview.addEventListener("click",()=>{
    carouselCards.style.scrollBehavior="smooth";
    carouselCards.scrollLeft-=360;
});




let carouselCards6=document.querySelector(".section-6-mobile-cards");
let preview6=document.getElementById("back-6");
let next6=document.getElementById("next-6");

next6.addEventListener("click",()=>{
    carouselCards6.style.scrollBehavior="smooth";
    carouselCards6.scrollLeft+=360;
});

preview6.addEventListener("click",()=>{
    carouselCards6.style.scrollBehavior="smooth";
    carouselCards6.scrollLeft-=360;
});





let carouselCards7=document.getElementById("cards-7");
let carouselCards7_2=document.getElementById("cards-7-2");
let preview7=document.getElementById("back-7");
let next7=document.getElementById("next-7");

next7.addEventListener("click",()=>{
    carouselCards7.style.scrollBehavior="smooth";
    carouselCards7_2.style.scrollBehavior="smooth";
    carouselCards7.scrollLeft+=360;
    carouselCards7_2.scrollLeft+=360;
});

preview7.addEventListener("click",()=>{
    carouselCards7.scrollLeft-=360;
    carouselCards7_2.scrollLeft-=360;
});
