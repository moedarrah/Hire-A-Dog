
$(document).ready(function(){

$(window).scroll(function(){
if($(this).scrollTop() > 40){
$('#backToTop').fadeIn();
} else{
$('#backToTop').fadeOut();
}
});

$("#backToTop").click(function(){
$('html ,body').animate({scrollTop : 0},800);
});
});




function myFunction() {
    let input, filter, ul, li, a, i;
    input = document.getElementById("mySearch");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myMenu");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  }
