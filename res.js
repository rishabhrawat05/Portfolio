gsap.registerPlugin(ScrollTrigger);
const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
  
});
locoScroll.on("scroll", ScrollTrigger.update);
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();
let prevScrollPos = window.pageYOffset;

window.addEventListener('scroll', function() {
  const currentScrollPos = window.pageYOffset;

  if (prevScrollPos > currentScrollPos) {
    document.querySelector('#nav').classList.add('show');
  } else {
    document.querySelector('#nav').classList.remove('show');
  }

  // update previous scroll position
  prevScrollPos = currentScrollPos;
});
var clutter="";
document.querySelector("#page2 #about p").textContent.split("").forEach(function(char){
  clutter +=`<span>${char}</span>`
})
document.querySelector("#page2 #about p").innerHTML=clutter;
gsap.from("#page2 #about p>span",{
  scrollTrigger:{
    trigger:`#page2 #about p>span`,
    scroller:`#main`,
    start:`top 70%`,
    scrub:2,
   
    end:`100% top`
  },
  stagger:.5,
  opacity:0

})
gsap.to("#nav1>h5" ,{
  transform: "translateX(calc(-100% - 2vw - 4px))",
  scrollTrigger: {
    trigger: "#nav1>h5",
    scroller: "#main",
    scrub: 0.7,
  },
})
const right=document.querySelector("#page4 #right");
const pro=document.querySelector("#page4 #project");
const left=document.querySelector("#page4 #left");
const set=document.getElementById("set2")
right.addEventListener("click",function(){
  pro.style.opacity=0;
  set.style.opacity=1;
  left.style.opacity=1;
  right.style.opacity=0;
  set.style.zIndex=99;
  pro.style.zIndex=0;
})
left.addEventListener("click",function(){
  pro.style.opacity=1;
  set.style.opacity=0;
  left.style.opacity=0;
  right.style.opacity=1;
  set.style.zIndex=0;
  pro.style.zIndex=99;
})
