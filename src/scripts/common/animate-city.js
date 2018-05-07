const $ = require('jquery');
$(document).ready(function() {
  if($('.animate').length){
    $("document").ready(function($){
  
        var animate = $('.animate');
       
        $(window).scroll(function () {
          if ($(this).scrollTop() > $(".service").height()*0.8) {
            animate.addClass("active");
          }
        });
    });
  }
});