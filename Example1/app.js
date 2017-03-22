var student = {
  name : "",
  type : "student"
};

document.addEventListener('DOMContentLoaded', contentLoaded);

function contentLoaded(event) {
  document.getElementById('name').addEventListener("keyup",keyUp);
}
function keyUp(event) {
  calculateNumericOutput();
}

function calculateNumericOutput(){
  student.name = document.getElementById('name').value;

  var totalName = 0;
  for(var i = 0; i< student.name.length; i++) {
    totalName += student.name.charCodeAt(i);
  }
var output = "Total Numeric Value of Person's Name is : " + totalName;

document.getElementById('output').innerText = output;
}
