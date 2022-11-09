$(function (){
  $('.box1').slideDown(function (){
    $('.box1').css({
      'height': '100px',
      'width': '200px',
      'background-color': '#0000FF'
    }).slideUp();
  });
});