
const changeBtn = document.getElementById('change');


changeBtn.addEventListener('click', ()=>{
  const imageTag = document.getElementById('image');
  imageTag.src = '4.bmp'
})


changeBtn.addEventListener('mouseover', ()=>{
  changeBtn.style.fontSize = "50px";
})