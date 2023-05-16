const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

const slides = document.querySelectorAll(".imgSlides");
const quotes = document.querySelectorAll("blockquote, footer");
const totalLength = slides.length;

let currentIndex = 0;
slides[currentIndex].classList.remove("hidden");
Array.from(quotes)
  .filter((q) => q.dataset.person === slides[currentIndex].dataset.person)
  .forEach((q) => q.classList.remove("hidden"));

nextBtn.addEventListener("click", () => {
  slides[currentIndex].classList.add("hidden");
  Array.from(quotes)
    .filter((q) => q.dataset.person === slides[currentIndex].dataset.person)
    .forEach((q) => q.classList.add("hidden"));

  currentIndex = (currentIndex + 1) % totalLength;

  slides[currentIndex].classList.remove("hidden");
  Array.from(quotes)
    .filter((q) => q.dataset.person === slides[currentIndex].dataset.person)
    .forEach((q) => q.classList.remove("hidden"));
});

prevBtn.addEventListener("click", () => {
  slides[currentIndex].classList.add("hidden");
  Array.from(quotes)
    .filter((q) => q.dataset.person === slides[currentIndex].dataset.person)
    .forEach((q) => q.classList.add("hidden"));

  currentIndex = (currentIndex - 1 + totalLength) % totalLength;

  slides[currentIndex].classList.remove("hidden");
  Array.from(quotes)
    .filter((q) => q.dataset.person === slides[currentIndex].dataset.person)
    .forEach((q) => q.classList.remove("hidden"));
});
