var b1 = document.querySelector("#dec");

b1.addEventListener("click", function(){

  var count_value = document.getElementById("count").innerText;
  var decrement = Number(count_value) - 1;
  if(decrement >= 0)
  {
  document.getElementById("count").innerHTML = decrement;
  }
});

var b2 = document.querySelector("#reset");

b2.addEventListener("click", function(){

  document.getElementById("count").innerHTML = 0;

});

var b3 = document.querySelector("#inc");

b3.addEventListener("click",function(){

  var count_value = document.getElementById("count").innerText;
  var increment = Number(count_value) + 1;
  document.getElementById("count").innerHTML = increment
});