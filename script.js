// flickity crousal

$(".carousel3").flickity({
  contain: true,
  prevNextButtons: false,
  pageDots: false,
  autoPlay: true,
  wrapAround: true,
  groupCells: 2, // Show 3 logos per slide
  setGallerySize: false, // Prevent height issues
});
$(".carousel4").flickity({
  contain: true,
  prevNextButtons: false,
  pageDots: false,
  autoPlay: true,
  wrapAround: true,
});

$(window).on("load", function () {
  var delayMs = 1500;
  // delay in milliseconds
  setTimeout(function () {
    $("#myModal").modal("show");
  }, delayMs);
});

// Aos Animation

AOS.init({
  duration: 1500,
  delay: 100,
  offset: 100,
});
$(".banner_sections .carousel").carousel({
  interval: 2000,
});

//  about us read more button

document.getElementById("readMoreBtn").addEventListener("click", function () {
  const text = document.getElementById("aboutText");
  if (text.classList.contains("text-hidden")) {
    text.classList.remove("text-hidden");
    this.textContent = "Read Less";
  } else {
    text.classList.add("text-hidden");
    this.textContent = "Read More";
  }
});
