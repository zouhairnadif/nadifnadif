

const observer = new IntersectionObserver ((entries) => {
    entries.forEach( (entry) => {
   console.log(entry)
   if (entry.isIntersecting) {
   entry.target.classList.add('show');
   } else {
   entry.target.classList.remove('show');
   }
   });
   });
   const hiddenElements = document.querySelectorAll('.hidden' );
   hiddenElements.forEach((el) => observer. observe (el));
   

  
     
  function show(){
    document.querySelector('.hamburger').classList.toggle('open')
    document.querySelector('.navigation').classList.toggle('active')
}
window.scrollY = function(){
  document.querySelector('.navigation').classList.toggle('active');

}

function scrollFunction() {

     document.getElementById("logo").style.opacity = "0";   //To hide the element.
     document.getElementById("logo").style.animationDelay = "20s";
}

window.onscroll = scrollFunction;
