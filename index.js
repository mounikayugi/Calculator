const display = document.getElementById("display");
function apprendToDispaly(input){
  display.value += input;
  }
function equal(){
  display.value = eval(display.value);
}
function clearDispaly(){
  display.value = "";
}