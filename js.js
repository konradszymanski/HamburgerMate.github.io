
  document.querySelectorAll('.hamburger-menu').forEach(hamburger => {
    hamburger.addEventListener('click', function() {
        //hamburger.style.backgroundColor = "gray";
        hamburger.classList.toggle("rotHmb");
    })
  })