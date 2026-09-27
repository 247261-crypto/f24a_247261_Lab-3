const numbers = [2, 6, 1];

function getTotal(list) {
  let total = 0;
  for (let i = 0; i < list.length; i++) {
    total += list[i];
  }
  return total;
}

function getLargest(list) {
  let largest = list[0];
  for (let i = 1; i < list.length; i++) {
    if (list[i] > largest) {
      largest = list[i];
    }
  }
  return largest;
}

function getAboveFirstCount(list) {
  let count = 0;
  for (let i = 1; i < list.length; i++) {
    if (list[i] > list[0]) {
      count++;
    }
  }
  return count;
}

console.log(getTotal(numbers));
console.log(getLargest(numbers));
console.log(getAboveFirstCount(numbers));

const showButton = document.getElementById("show");

showButton.addEventListener("click", function () {
  document.getElementById("total").textContent = getTotal(numbers);
  document.getElementById("big").textContent = getLargest(numbers);
  document.getElementById("above").textContent = getAboveFirstCount(numbers);
});