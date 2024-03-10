let currentIndex = 0;
const images = ["image2.jpg", "image3.jpg", "image4.jpg", "image5.jpg"]; // Add your image filenames here
const slideshowContainer = document.querySelector(".slideshow-container");

function preloadImages() {
  images.forEach((image) => {
    const img = new Image();
    img.src = image;
  });
}

function changeBackgroundImage() {
  currentIndex = (currentIndex + 1) % images.length;
  const nextImage = images[currentIndex];
  const bgImage = document.querySelector(".bg-image");
  bgImage.style.backgroundImage = `url(${nextImage})`;
}

preloadImages();

// Change the background image every 4 seconds (4000 milliseconds)
setInterval(changeBackgroundImage, 4000);
