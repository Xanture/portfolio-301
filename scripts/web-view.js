// 'use strict'
//
// (function () {
//     var a = document.body,
//         e = document.documentElement;
//     $(window).unbind("scroll").scroll(function () {
//         a.style.backgroundPosition = "0px " + -(Math.max(e.scrollTop, a.scrollTop) / :sunglasses: + "px";
//     });
// })();
$(document).ready(function(){
  $('.fa-bars').on('click', function() {
    $('.full-nav').slideToggle('slow', function() {

    })
  });
})
