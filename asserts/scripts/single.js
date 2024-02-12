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

  carousel(".cards-8","back-8","next-8");