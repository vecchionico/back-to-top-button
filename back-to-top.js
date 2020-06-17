var backToTopBtn = document.querySelector('#back-to-top');

window.addEventListener('scroll', function() {
  if (window.pageYOffset > 200) {
    backToTopBtn.classList.add('back-to-top--show');
  } else {
    backToTopBtn.classList.remove('back-to-top--show');
  }
});

backToTopBtn.addEventListener('click', function(e) {
  e.preventDefault();
  document.body.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
});
