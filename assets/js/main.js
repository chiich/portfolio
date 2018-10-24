https://stackoverflow.com/questions/41550585/
document.addEventListener("DOMContentLoaded", function() {
  var faqContainers = document.getElementsByClassName('faq-container');
  var faqToggle = document.getElementsByTagName('body')[0];
  for (var i = 0; i < faqContainers.length; i++) {

    faqContainers[i].addEventListener('click', function() {

      if (faqToggle.classList.contains('faq-display')) {
        faqToggle.classList.remove('faq-display');
        // alert("remove faq display!");
      } else {
        faqToggle.classList.add('faq-display');
        // alert("add faq display!");
      }

    });
  }


});
