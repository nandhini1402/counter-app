document.addEventListener('DOMContentLoaded',  () => {
  var decreaseBtn = document.querySelector(".decreaseBtn");
  var resetBtn = document.querySelector(".resetBtn");
  var increaseBtn = document.querySelector(".increaseBtn");
  var countEle = document.querySelector("#count");

  resetBtn.addEventListener("click", () => {
    countEle.textContent = 0;
  });

  decreaseBtn.addEventListener("click", () => {
    var countValue = countEle.textContent;
    var decrementCount = Number(countValue) - 1;
    
    if (decrementCount >= 0) {
      countEle.textContent = decrementCount;
    }
  });

  increaseBtn.addEventListener("click",() => {
    var countValue = countEle.textContent;
    var incrementCount = Number(countValue) + 1;
    countEle.textContent = incrementCount;
  });
});