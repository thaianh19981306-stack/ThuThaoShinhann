window.addEventListener("load",()=>{setTimeout(()=>document.getElementById("loader").classList.add("hidden"),500)});const header=document.querySelector(".header");window.addEventListener("scroll",()=>header.classList.toggle("scrolled",window.scrollY>20));const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add("visible");observer.unobserve(entry.target)}})},{threshold:.14});document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));const counters=document.querySelectorAll("[data-count]");const counterObserver=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(!entry.isIntersecting)return;const el=entry.target;const target=Number(el.dataset.count);let current=0;const duration=900;const step=Math.max(1,Math.ceil(target/35));const timer=setInterval(()=>{current+=step;if(current>=target){current=target;clearInterval(timer)}el.textContent=current},duration/35);counterObserver.unobserve(el)})},{threshold:.5});counters.forEach(el=>counterObserver.observe(el));
const policyModal=document.getElementById("policyModal");
const policyModalImage=document.getElementById("policyModalImage");
document.querySelectorAll(".view-policy").forEach(button=>{
  button.addEventListener("click",()=>{
    policyModalImage.src=button.dataset.image;
    policyModal.classList.add("open");
    policyModal.setAttribute("aria-hidden","false");
    document.body.style.overflow="hidden";
  });
});
document.querySelectorAll("[data-close-modal]").forEach(el=>{
  el.addEventListener("click",()=>{
    policyModal.classList.remove("open");
    policyModal.setAttribute("aria-hidden","true");
    document.body.style.overflow="";
  });
});
document.addEventListener("keydown",event=>{
  if(event.key==="Escape"&&policyModal.classList.contains("open")){
    policyModal.classList.remove("open");
    policyModal.setAttribute("aria-hidden","true");
    document.body.style.overflow="";
  }
});
