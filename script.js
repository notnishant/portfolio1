
function revealToSpan(){
  document.querySelectorAll(".reveal")
      .forEach(function(elem){
        let parent = document.createElement("span");
        let child = document.createElement("span");
        parent.classList.add("parent");
        child.classList.add("child");
        child.innerHTML = elem.innerHTML;
        parent.appendChild(child);
        elem.innerHTML = "";
        elem.appendChild(parent);
      })
  }

function valueSetter(){
  gsap.set("#nav a", { y: "-100%", opacity: 0 });
  gsap.set("#home span .child", { y: "100%"});
  gsap.set("#home .row img", { opacity: 0 });
}

function loaderAnimation(){
  var tl = gsap.timeline();

tl
.from("#loader .child span",{
  x: 100,
  stagger: .2,
  duration: 1.4,
  ease: Power3.easeInOut,

})
.to("#loader .parent .child",{
  y: "-100%",
  duration: 1,
  ease: Circ.easeInOut
})
.to("#loader", {
  height: 0,
  duration: 1.3,
  ease: Circ.easeInOut
})
.to("#green", {
  height: "100%",
  top: 0,
  duration: 1.3,
  delay: -.8,
  ease: Circ.easeInOut,
  
})
.to("#green", {
  height: "0%",
  duration: 1,
  delay: -.2,
  ease: Circ.easeInOut,
  onComplete : function(){
    animateHomepage();
  }
})
}
function animateSvg(){
  document.querySelectorAll("#Visual>g").forEach(function (e) {
    
    childNodes[1].childNodes[1].style.strokeDasharray = childNodes[1].childNodes[1].getTotalLength();
    childNodes[1].childNodes[1].style.strokeDashoffset = childNodes[1].childNodes[1].getTotalLength();
  })

  gsap.to("#Visual>g>g>path, #Visual>g>polyline",  {
    strokeDashoffset: 0,
    strokeDasharray: 0,
    duration: 1.5,
    ease: Expo.easeInOut,
  })
}

function animateHomepage(){
  var tl = gsap.timeline();
  tl.to("#nav a", {
    y: 0,
    opacity: 1,
    stagger: .05,
    ease: Expo.easeInOut,
    
  })
  tl.to("#home .parent .child" ,{
    y: 0,
    duration: 1.6,
    stagger: .1,
    ease: Expo.easeInOut,
    
  })
  tl.to("#home .row img" ,{
    opacity: 1,
    ease: Expo.easeInOut,
    onComplete: function(){
       animateSvg();
    }
  })
}

revealToSpan();

valueSetter();
loaderAnimation();

