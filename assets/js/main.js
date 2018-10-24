$(function() {
  var $container = $('.summary');
  var $subheadings = $container.find('h2');
  
  
  $subheadings.on('click', function(e) {
    e.preventDefault();
    var $sibling = $(this).siblings('ul,ol').first();
    $container.find('.active').removeClass('active');
    $sibling.addClass('active');
  });
});
