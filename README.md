# Frontend Mentor - Coding bootcamp testimonials slider solution

This is a solution to the [Coding bootcamp testimonials slider challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/coding-bootcamp-testimonials-slider-4FNyLA8JL). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

![](design/desktop-preview.jpg)

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- Navigate the slider using either their mouse/trackpad or keyboard

### Screenshot

![](./screenshots/mobile.webp)
![](./screenshots/desktop.webp)

### Links

- Solution URL: [GitHub](https://github.com/TuanAnh45468/coding-bootcamp-testimonial-slider)
- Live Site URL: [Netlify](https://testimonial-slider-tuananh.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- [TailwindCSS](https://tailwindcss.com/) - For styles

### What I learned

In this section I've learned how to use data attribute to create image slider

```html
<blockquote
  class="hidden tanya-quote laptop:text-2xl laptop:pr-5"
  data-person="tanya"
>
  &ldquo; I’ve been interested in coding for a while but never taken the jump,
  until now. I couldn’t recommend this course enough. I’m now in the job of my
  dreams and so excited about the future. &rdquo;
</blockquote>

<footer class="mt-5 hidden tanya-quote" data-person="tanya">
  <span class="font-bold">Tanya Sinclair</span>
  <br />
  <span class="text-grayish-blue">UX Engineer</span>
</footer>

<img
  alt=""
  class="z-10 hidden rounded-sm ml-auto shadow-2xl imgSlides w-[200px] laptop:w-auto laptop:h-[540px] h-[200px]"
  data-person="tanya"
  src="images/image-tanya.jpg"
/>
<img
  alt=""
  class="z-10 hidden rounded-sm shadow-2xl imgSlides w-[200px] h-[200px] laptop:w-[540px] laptop:h-[540px]"
  data-person="john"
  src="images/image-john.jpg"
/>
```

```js
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
```

### Useful resources

- [TailwindCSS cheatsheet](https://tailwindcomponents.com/cheatsheet/)

## Author

- Website - [Tuan Anh](https://tuananhportfolio.netlify.app/)
- Frontend Mentor - [@Tuananh45468](https://www.frontendmentor.io/profile/Tuananh45468)
