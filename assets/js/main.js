$(function() {
  var $container = $('.summary');
  var $subheadings = $container.find('h2');
  
  
  $subheadings.on('click', function(e) {
    e.preventDefault();
    var $sibling = $(this).siblings('ul').first();
    $container.find('ul.active').removeClass('active');
    $sibling.addClass('active');
  });
});
