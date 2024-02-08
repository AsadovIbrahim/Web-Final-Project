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
        nextBtn.style.marginLeft="-40px";
    }
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



function carousel(container,previewId,nextId){
  let c=document.querySelector(container);
  let p=document.getElementById(previewId);
  let n=document.getElementById(nextId);

  n.addEventListener("click",()=>{
    c.style.scrollBehavior="smooth";
    c.scrollLeft+=360;
  });

  p.addEventListener("click",()=>{
      c.style.scrollBehavior="smooth";
      c.scrollLeft-=360;
  });

}
carousel(".cards","back","next");
carousel(".section-6-mobile-cards","back-6","next-6");
carousel(".cards-8","back-8","next-8");
carousel(".cards-10","back-10","next-10");



function navigateTo(container,windowName){
  document.getElementById(container).addEventListener('click',function(){
    window.open(windowName,'_blank');
  });
}

navigateTo('myCard','single.html');
navigateTo('myCard1','single.html');
navigateTo('myCard2','single.html');
navigateTo('myCard3','single.html');
navigateTo('myCard4','single.html');
navigateTo('myCard5','single.html');
navigateTo('myCard6','single.html');
navigateTo('myCard7','single.html');


navigateTo('carousel-card','category.html');
navigateTo('carousel-card-1','category.html');
navigateTo('carousel-card-2','category.html');
navigateTo('carousel-card-3','category.html');
navigateTo('carousel-card-4','category.html');
navigateTo('carousel-card-5','category.html');
navigateTo('carousel-card-6','category.html');
navigateTo('carousel-card-7','category.html');


navigateTo('card-end','writer.html');
navigateTo('card-end-1','writer.html');
navigateTo('card-end-2','writer.html');
navigateTo('card-end-3','writer.html');
navigateTo('card-end-4','writer.html');
navigateTo('card-end-5','writer.html');
navigateTo('card-end-6','writer.html');
navigateTo('card-end-7','writer.html');

