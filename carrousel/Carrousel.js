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
let currentImage = 0;

// next
const nextBtn = document.getElementById('next');
nextBtn.addEventListener('click',()=>{
    // Get imageTag
    const imageTag = document.getElementById('image');
    currentImage += 1;
    if (currentImage >= lastImage){
      currentImage = 8;
    }
    imageTag.src = images[currentImage];
    document.getElementById('info').innerHTML = (currentImage + 1) + '/9';
})

// previous
const previousBtn = document.getElementById('previous');
previousBtn.addEventListener('click',()=>{
    // Get imageTag
    const imageTag = document.getElementById('image');
    currentImage -= 1;
    if (currentImage <= firstImage){
      currentImage = 0;
    }
    imageTag.src = images[currentImage];
    document.getElementById('info').innerHTML = (currentImage+1) + '/9';
})