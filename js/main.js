document.addEventListener("DOMContentLoaded", function(){
  if (!("ontouchstart" in document.documentElement)) {
    document.documentElement.className += " no-touch";
  } else {
    var $menuLink = document.querySelector('.menu-icon');
    $menuLink.addEventListener('click', function(){
//This is where the click will work eventually for iOS Safari
    });

  }
});
