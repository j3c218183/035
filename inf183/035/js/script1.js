$(document).ready(function () {

  //   //ketika di scroll muncul icon scroll ke atas
  $(window).scroll(function () {
    if ($(this).scrollingTop() > 40) {
      $("#topBtn").fadeIn();
    } else {
      $("#topBtn").fadeOut();
    }
  });

  //proses scroll
  $("#topBtn").click(function () {
    $('html ,body').animate({ scrollTop: 0 }, 800);
  });
});
