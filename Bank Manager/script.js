let flag=0;
let learnmore=document.getElementById("learnmore");
let feauture=document.getElementById("feauture");
let a1=document.getElementById("Feauturs");
let a2=document.getElementById("Oper");
let a3=document.getElementById("testominals");
let brojac=1;
let out=document.getElementById("out");


function grennnnn() {
   console.log("asasas")
   let carpet = document.getElementById("carpet-header");
   carpet.innerHTML = " ";
   let h2 = document.createElement("h2");
   h2.innerHTML = " Buy a home or make your dreams come true, with instant loans.";
   let p = document.createElement("p");
   p.innerHTML = " Duis aute irure dolor in reprehenderit in voluptate velit esse\n" +
       "            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat\n" +
       "            cupidatat non proident, sunt in culpa qui officia deserunt mollit\n" +
       "            anim id est laborum."
   carpet.append(h2);
   carpet.append(p);
   carpet.style.marginLeft = "60px"
   let yellow = document.getElementById("yellow");
   yellow.style.marginTop = "0";
   let green = document.getElementById("green");
   green.style.marginTop = "-18px";
   let red=document.getElementById("red");
   red.style.marginTop="0";
   let ovdeka=document.getElementById("ovdeka");
   ovdeka.style.width="7rem";
}
document.getElementById("green").addEventListener("click",grennnnn);
function red() {
   console.log("asasas")
   let carpet = document.getElementById("carpet-header");
   carpet.innerHTML = " ";
   let h2 = document.createElement("h2");
   h2.innerHTML = "No longer need your account? No problem! Close it instantly.";
   let p = document.createElement("p");
   p.innerHTML =  " Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minimveniam, quis nostrud exercitation ullamco laboris nisi ut aliquip exea commodo consequat.";
   carpet.append(h2);
   carpet.append(p);
   carpet.style.marginLeft = "60px"
   let yellow = document.getElementById("yellow");
   yellow.style.marginTop = "0";
   let green = document.getElementById("green");
   green.style.marginTop = "0";
   let red=document.getElementById("red");
   red.style.marginTop="-18px";
   let ovdeka=document.getElementById("ovdeka");
   ovdeka.style.width="7rem";
}
function yellow(){
   console.log("asasas")
   let carpet = document.getElementById("carpet-header");
   carpet.innerHTML = " ";
   let h2 = document.createElement("h2");
   h2.innerHTML = "Tranfser money to anyone, instantly! No fees, no BS.";
   let p = document.createElement("p");
   p.innerHTML =  "  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do\n" +
       "                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim\n" +
       "                    ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut\n" +
       "                    aliquip ex ea commodo consequat.";
   carpet.append(h2);
   carpet.append(p);
   //carpet.style.marginLeft = "60px"
   let yellow = document.getElementById("yellow");
   yellow.style.marginTop = "-18px";
   let green = document.getElementById("green");
   green.style.marginTop = "0";
   let red=document.getElementById("red");
   red.style.marginTop="0";
   let ovdeka=document.getElementById("ovdeka");
   ovdeka.style.width="5.5rem";

}
document.getElementById("pol").addEventListener("click",function (e){
  e.preventDefault()
   let logins= document.getElementById("login");
   logins.style.opacity=100;
   let all=document.getElementById("all");
   all.style.filter="blur(4px)";
  // all.style.opacity="0.5";
   logins.style.visibility="visible";
   let nav=document.querySelector("nav")
   nav.style.position="fixed";
    //all.style.display="block"
   flag=1;

})
function exitt(){
   let logins= document.getElementById("login");
   logins.style.opacity=0;
   logins.style.visibility="hidden";
   let all=document.getElementById("all");
   all.style.filter="blur(0)";
  let nav= document.querySelector("nav");
  nav.style.position="fixed";
   flag=0;
}
document.addEventListener("keydown",function (e){
   if(e.key==='Escape'&&flag==1){
      exitt();
   }
})

console.log("The witht and height",document.documentElement.clientWidth,document.documentElement.clientHeight);
learnmore.addEventListener("click",function (){
   feauture.scrollIntoView({behavior:"smooth"});
})
a1.addEventListener("click",function (){
   feauture.scrollIntoView({behavior:"smooth"});
})
a2.addEventListener("click",function (){
   document.getElementById("operation").scrollIntoView({behavior:"smooth"});
})
a3.addEventListener("click",function (){
   document.getElementById("not-sure").scrollIntoView({behavior:"smooth"});


})
document.addEventListener("mouseover",function (e){
   if(e.target.classList.contains("nav__link")){
      let selected=e.target;
      const siblings=selected.closest(".nav").querySelectorAll(".nav__link");
      siblings.forEach(function (items){
         if(items!==selected){
            items.style.opacity="0.5";
         }
      })
      let logo=document.getElementById("logo");
      logo.style.opacity="0.5";
   }
})
document.addEventListener("mouseout",function (e){
   if(e.target.classList.contains("nav__link")){
      let selected=e.target;
      const siblings=selected.closest(".nav").querySelectorAll(".nav__link");
      siblings.forEach(function (items){
         if(items!==selected){
            items.style.opacity="1";
         }
      })
      let logo=document.getElementById("logo");
      logo.style.opacity="1";
   }
})
let blocks=document.querySelectorAll(".blocks");
const representing=function (entry,observer){
   const [enter]=entry;
   enter.target.style.opacity="1";




}
const Observer=new IntersectionObserver(representing,{
   root: null,
   threshold: 0.15,
})
blocks.forEach(function (items){
   Observer.observe(items);
   items.style.opacity="0";
})
const sliki=document.querySelectorAll(".sliki");
const loadImg=function (entries,observer){
   const [entry]=entries;
   if(!entry.isIntersecting) return;
   entry.target.src=entry.target.dataset.src;
   entry.target.addEventListener("load",function () {
      entry.target.style.filter = "blur(0)";
   });
}
const imgObserver=new IntersectionObserver(loadImg,{
   root:null,
   threshold:0,
});
sliki.forEach((items)=>imgObserver.observe(items))
let g=document.querySelectorAll(".go");
//out.removeChild(g[1])
//out.removeChild(g[2]);
/*g[1].remove();
g[2].remove()
*/
g[1].style.visibility="hidden";
 g[2].style.visibility="hidden";
document.getElementById("right").addEventListener("click",function right () {
   let slide1 = g[0];
   let slide2 = g[1];
   let slide3 = g[2];
   //brojac++;
   let inside = 0;
   if(brojac==3){
      brojac=1
   }
   else {
      brojac++;
   }

   if (brojac == 1) {
      g[0].style.transform="translateX(100%)";
      g[1].style.transform="translateX(100%)";
      g[2].style.transform="translateX(100%)";
      g[0].style.visibility="visible";
      g[1].style.visibility="hidden";
      g[2].style.visibility="hidden";
   }

   if(brojac==2) {
      g[0].style.transform="translateX(0%)";
      g[1].style.transform="translateX(0%)";
      g[2].style.transform="translateX(0%)";
      g[0].style.visibility="hidden";
      g[1].style.visibility="visible";
      g[2].style.visibility="hidden";
   }

   if(brojac==3){
      g[0].style.transform="translateX(-100%)";
      g[1].style.transform="translateX(-100%)";
      g[2].style.transform="translateX(-100%)";
      g[0].style.visibility="hidden";
      g[1].style.visibility="hidden";
      g[2].style.visibility="visible";
      //brojac=0;
   }
});
document.getElementById("left").addEventListener("click",function left (){
   let slide1 = g[0];
   let slide2 = g[1];
   let slide3 = g[2];

   let inside = 0;

   if(brojac==1){
      brojac=3
   }
   else {
      brojac--;
   }

   if (brojac == 1) {
      g[0].style.transform="translateX(100%)";
      g[1].style.transform="translateX(100%)";
      g[2].style.transform="translateX(100%)";
      g[0].style.visibility="visible";
      g[1].style.visibility="hidden";
      g[2].style.visibility="hidden";
   }

   if(brojac==2) {
      g[0].style.transform="translateX(0%)";
      g[1].style.transform="translateX(0%)";
      g[2].style.transform="translateX(0%)";
      g[0].style.visibility="hidden";
      g[1].style.visibility="visible";
      g[2].style.visibility="hidden";
   }

   if(brojac==3){
      g[0].style.transform="translateX(-100%)";
      g[1].style.transform="translateX(-100%)";
      g[2].style.transform="translateX(-100%)";
      g[0].style.visibility="hidden";
      g[1].style.visibility="hidden";
      g[2].style.visibility="visible";
      //brojac=0;
   }
});
function right(){
   let slide1 = g[0];
   let slide2 = g[1];
   let slide3 = g[2];
   //brojac++;
   let inside = 0;
   if(brojac==3){
      brojac=1
   }
   else {
      brojac++;
   }

   if (brojac == 1) {
      g[0].style.transform="translateX(100%)";
      g[1].style.transform="translateX(100%)";
      g[2].style.transform="translateX(100%)";
      g[0].style.visibility="visible";
      g[1].style.visibility="hidden";
      g[2].style.visibility="hidden";
   }

   if(brojac==2) {
      g[0].style.transform="translateX(0%)";
      g[1].style.transform="translateX(0%)";
      g[2].style.transform="translateX(0%)";
      g[0].style.visibility="hidden";
      g[1].style.visibility="visible";
      g[2].style.visibility="hidden";
   }

   if(brojac==3){
      g[0].style.transform="translateX(-100%)";
      g[1].style.transform="translateX(-100%)";
      g[2].style.transform="translateX(-100%)";
      g[0].style.visibility="hidden";
      g[1].style.visibility="hidden";
      g[2].style.visibility="visible";
      //brojac=0;
   }
}
function left(){
   let slide1 = g[0];
   let slide2 = g[1];
   let slide3 = g[2];

   let inside = 0;

   if(brojac==1){
      brojac=3
   }
   else {
      brojac--;
   }

   if (brojac == 1) {
      g[0].style.transform="translateX(100%)";
      g[1].style.transform="translateX(100%)";
      g[2].style.transform="translateX(100%)";
      g[0].style.visibility="visible";
      g[1].style.visibility="hidden";
      g[2].style.visibility="hidden";
   }

   if(brojac==2) {
      g[0].style.transform="translateX(0%)";
      g[1].style.transform="translateX(0%)";
      g[2].style.transform="translateX(0%)";
      g[0].style.visibility="hidden";
      g[1].style.visibility="visible";
      g[2].style.visibility="hidden";
   }

   if(brojac==3){
      g[0].style.transform="translateX(-100%)";
      g[1].style.transform="translateX(-100%)";
      g[2].style.transform="translateX(-100%)";
      g[0].style.visibility="hidden";
      g[1].style.visibility="hidden";
      g[2].style.visibility="visible";
      //brojac=0;
   }
}
document.addEventListener("keydown",function (e){
   if(e.key==="ArrowLeft"){
      left()
   }
   else if(e.key==="ArrowRight"){

      right()
   }
})