function insert(num) {
  document.form1.textview.value += num;
}
function equal() {
  var exp = document.form1.textview.value;
  var calc = eval(exp);
  document.form1.textview.value = calc;
}
function backspace() {
  document.form1.textview.value = "";
}

 kevadiya
