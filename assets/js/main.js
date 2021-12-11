// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the header
let header = document.getElementById("myHeader");

// Get the offset position of the navbar

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > 100) {
    header.classList.add("sticky");
    header.style.transform="translateY(49px)"
  } else {
    header.classList.remove("sticky");
    header.style.transform="translateY(0px)"
  }
}


let close_btn = document.querySelector('.close_btn');
let menu = document.querySelector('.menu');

close_btn.addEventListener('click', function(){
    menu.classList.toggle('active');
})
