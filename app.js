// Pin the first page

const tlIntro = gsap.timeline({
  scrollTrigger: {
    trigger: ".first-page",
    start: "0%",
    end: "100%",
    pin: true,
    pinSpacing: false,
  },
});

// 2nd Page highlights
const tlH = gsap.timeline({
  scrollTrigger: {
    trigger: ".second-page",
    marker: { startColor: "blue", endColor: "blue" },
    scrub: true,
    start: "-20%",
    end: "40%",
  },
});

tlH.fromTo(
  ".highlight",
  { color: "rgba(255,255,255,0.4)" },
  { color: "rgba(255,255,255,1)", stagger: 1 }
);

// tlH Remove Opacity

const tlHRemove = gsap.timeline({
  scrollTrigger: {
    trigger: ".second-page",
    marker: { startColor: "pink", endColor: "pink" },
    scrub: true,
    start: "5%",
    end: "60%",
  },
});

tlHRemove.to(".highlight", { color: "rgba(255,255,255,0.4)", stagger: 1 });

// 3'rd page Animation
const tlSplit = gsap.timeline({
  scrollTrigger: {
    trigger: ".third-page",
    start: "-40%",
    end: "30%",
    scrub: true,
  },
});

tlSplit.fromTo(".large-phone", { x: "40%" }, { x: "20%" });
tlSplit.fromTo(".small-phone", { x: "-40%" }, { x: "-20%" }, "<");
tlSplit.fromTo(
  ".product-text-left",
  { x: 50, opacity: 0 },
  { x: 0, opacity: 1 },
  "<"
);

tlSplit.fromTo(
  ".product-text-right",
  { x: -50, opacity: 0 },
  { x: 0, opacity: 1 },
  "<"
);

const tlSplitPin = gsap.timeline({
  scrollTrigger: {
    trigger: ".third-page",
    start: "0%",
    end: "100%",
    pin: true,
    pinSpacing: false,
  },
});

// Carousel

const swatches = document.querySelectorAll(".swatches img");
const gallery = document.querySelector(".phone-gallery");
const slides = document.querySelectorAll(".phone-gallery-container");

let currentSwatch = "blue";
let currIndex = 2;

swatches.forEach((swatch, index) => {
  const coord = slides[index].getBoundingClientRect().left;

  swatch.addEventListener("click", (e) => {
    let swatchName = e.target.getAttribute("swatch");

    // Get Closeup Image element
    if (currentSwatch === swatchName) return;
    let closeUpImg = document.querySelector("." + swatchName);
    gsap.set(closeUpImg, { zIndex: currIndex });
    gsap.fromTo(closeUpImg, { opacity: 0 }, { opacity: 1, duration: 0.5 });

    // Gallery
    gsap.to(gallery, { x: -coord, ease: "back.out(.5)" });

    // Increment index to switch closeup image
    currIndex++;
    currentSwatch = swatchName;
  });
});

// Page 5 video on scroll

const tlVideo = gsap.timeline({
  scrollTrigger: {
    trigger: ".fifth-page",
    start: "0%",
    end: "110%",
    scrub: true,
    pin: true,
  },
});

tlVideo.fromTo(
  ".product-video",
  { currentTime: 0 },
  { currentTime: 3, duration: 1 }
);
tlVideo.fromTo(
  ".product-info-container h3",
  { opacity: 0 },
  { opacity: 1, stagger: 0.25, duration: 0.5 },
  "<"
);

// 6th page animation

const tlParallax = gsap.timeline({
  scrollTrigger: {
    trigger: "sixth-page",
    start: "50%",
    end: "100%",
    scrub: true,
  },
});
tlParallax.fromTo(".photo-descripton", { y: 0 }, { y: -80 });
tlParallax.fromTo(".portrait-container", { y: 0 }, { y: -80 }, "<");
tlParallax.fromTo(".phone-video", { y: 0 }, { y: -400 }, "<");
