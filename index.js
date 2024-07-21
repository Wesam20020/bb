const decrease = document.getElementById('decrease');
const increase = document.getElementById('increase');
const reset = document.getElementById('reset');
const counterLabel = document.getElementById('counter');

let counter = 0;

increase.onclick = function() {
  counter++;
  counterLabel.textContent = counter;
}

decrease.onclick = function() {
  counter--;
  counterLabel.textContent = counter;
}

reset.onclick = function() {
  counter = 0;
  counterLabel.textContent = counter;
}
