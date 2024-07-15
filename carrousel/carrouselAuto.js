// Get all the images
const images = [
  '1.bmp',
  '2.bmp',
  '3.bmp',
  '4.bmp',
  '5.png',
  '6.bmp',
  '7.bmp',
  '8.bmp',
  '9.bmp',
]

const firstImage = 0;
const lastImage = images.length - 1;
let rotate = 0;

//DOMContentLoaded
document.addEventListener('DOMContentLoaded', slide);

function slide() {
  // Get imageTag
  const imageTag = document.getElementById('image');
  // assign image
  imageTag.src = images[rotate];
  rotate ++;
  if (rotate >= lastImage) {
    rotate = firstImage;
  }
}

setInterval(function() {
  slide();
}, 1500)
