


            /* back To Top function with jquiry  */


$(document).ready(function() {
  $(window).scroll(function() {
    if ($(this).scrollTop() > 40) {
      $("#backToTop").fadeIn();
    } else {
      $("#backToTop").fadeOut();
    }
  });

  $("#backToTop").click(function() {
    $("html ,body").animate({ scrollTop: 0 }, 800);
  });
});


/* form function with jquiry  */

$(function() {
  $("#date").combodate({
    minYear: 2019,
    maxYear: 2020
  });
});

$(function() {
  $("#time1").combodate({
    firstItem: "name",
    minuteStep: 1
  });
});

$(function() {
  $("#time2").combodate({
    firstItem: "name",
    minuteStep: 1
  });
});



          /* The searsh function start here */

function myFunction() {

  /*Creating some variables*/
  let input, filter, ul, li, a, i;

  /* Declare variables */
  input = document.getElementById("mySearch");

  filter = input.value.toUpperCase();  // toUpperCase() the way the search is not case sensitive

  ul = document.getElementById("myMenu");

  li = ul.getElementsByTagName("li");

  //Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {    
    a = li[i].getElementsByTagName("a")[0];
    if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}
