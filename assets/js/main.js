var chie = document.querySelector('.menu-link.more');
var more = document.querySelector('header>section');
chie.addEventListener('click', function(e) {
  toggleClass(more);
});

function toggleClass(element) {
  if (element.classList) { 
    element.classList.toggle("showing");
  } else {
    // For IE9
    var classes = element.className.split(" ");
    var i = classes.indexOf("showing");

    if (i >= 0) 
      classes.splice(i, 1);
    else 
      classes.push("showing");
      element.className = classes.join(" "); 
  }
}
