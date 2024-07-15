const images = [
  '0.png',
  '1.png',
  '2.png',
  '3.png',
  '4.png',
  '5.png',
  '6.png'
  ]

const BtnWrong = document.getElementById('BtnWrong');
const BtnRight = document.getElementById('BtnRight');
const firstImage = 0;
const lastImage = images.length - 1;
let currentImage = 0;


  BtnWrong.addEventListener('click', ()=> {
    currentImage += 1;
    if (currentImage >= lastImage){
      currentImage = 6;
    }
    document.getElementById('answerTxt').innerHTML = "Sorry, wrong answer. You loose a life!!!"
    document.getElementById('image').src = images[currentImage];
  })

  BtnWrong.addEventListener('click', ()=> {
    currentImage += 1;
    if (currentImage >= lastImage){
      currentImage = 6;
    }
    document.getElementById('answerTxt').innerHTML = "Sorry, wrong answer. You loose a life!!!"
    document.getElementById('image').src = images[currentImage];
  })

