var myVar;
function myFunction() {
  myVar = setTimeout(showPage);
}
function showPage() {
  var body = document.getElementById("body")
  var all = document.getElementById("all")
  var element = document.getElementById("body")
  document.getElementById("loader").style.top = "-100%";
  document.getElementById("myDiv").style.display = "block";
  body.classList.remove("body1")
  all.classList.remove("all-js")
}

$(document).ready(function(){
  $(".click-on, .click-on-1").click(function(){
    $(".all").toggleClass("all-1");
    $(".top-menu").toggleClass("all-1");
    $(".all-bl").fadeToggle(100)
    $(".menu-toggle").toggleClass("right-toggle")
    $("body").toggleClass("body1")
  });
  $(".all-bl").click(function(){
    $(".all").removeClass("all-1");
    $(".top-menu").toggleClass("all-1");
    $(".all-bl").fadeToggle(100)
    $(".menu-toggle").removeClass("right-toggle")
     $("body").removeClass("body1")
  });
});

  wow = new WOW(
  {
  boxClass:     'wow',      // default
  animateClass: 'animated', // default
  offset:       100,          // default
  mobile:       true,       // default
  live:         true        // default
}
)
wow.init();
