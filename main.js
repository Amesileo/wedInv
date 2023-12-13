var scrollToTopBtn = document.getElementById("scrollToTopBtn");
var rootElement = document.documentElement;
var accordian = document.getElementById("accordian");

function scrollToTop() {
  // Scroll to top logic
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}
scrollToTopBtn.addEventListener("click", scrollToTop);

function showAccordian() {
if (accordian.style.display == 'block') {
  accordian.style.display = 'none';
  } else {
    accordian.style.display = 'block'
  }
}

function showAccordianScroll() {
  accordian.style.display = 'none';
}
window.addEventListener("scroll", showAccordianScroll);