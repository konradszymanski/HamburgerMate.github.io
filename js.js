
  document.querySelectorAll('.hamburger-menu').forEach(hamburger => {
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle("rotHmb");
    })
  })