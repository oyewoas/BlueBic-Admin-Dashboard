
// change navbar color on scroll
$(function () {
  $(document).scroll(function () {
    var $nav = $(".navbar");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});

// change navitem color on scroll
$(function () {
    $(document).scroll(function () {
      var $nav = $(".nav-item");
      $nav.toggleClass('scroll', $(this).scrollTop() > $nav.height());
    });
  });

$(function () {
    $(document).scroll(function () {
      var $nav = $(".navbar-brand>span");
      $nav.toggleClass('scrolling', $(this).scrollTop() > $nav.height());
    });
  });
// $(window).on('scroll', function () {
// if ($(this).scrollTop() > $nav.height()) { // Set position from top
    
//     $('.navbar-brand  img').attr('src', 'images/logo.png');
// }else{
    
//     $('.navbar-brand  img').attr('src', 'images/logo.png');
// }
// });
new WOW().init();
