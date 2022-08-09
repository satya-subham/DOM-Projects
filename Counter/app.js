let value = document.getElementById('span');
let button = Array.from(document.querySelectorAll("button"));
let count = 0;
button.map((button) => {
  button.addEventListener("click", (event) => {
    
    if (button.innerText == "INCREASE") {
      count++;
      value.style.color = 'green';
    } else if (button.innerText == "RESET") {
      count = 0;
      value.style.color = 'black';
    } else if (button.innerText == "DECREASE") {
      count--;
      value.style.color = 'red';
    }
    value.textContent = count;
  });
});
