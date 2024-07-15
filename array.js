// function setColor(name){
//   divbody.style.backgroundColor = name;
// }

function myFunction() {
  var x = document.getElementById("colorChoice").value;
  const y = document.getElementById('textChoice').value;
  document.getElementById("demo").innerHTML = y;
  document.getElementById('demo').style.color = y;
  document.getElementById('container').style.backgroundColor = x;

}