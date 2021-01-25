function get(domElement) {
  return document.querySelector(domElement);
}

function display(value) {
  let displayBox = get(".calculator__display");
  if (displayBox.textContent === "0") {
    displayBox.textContent = value;
  } else {
    displayBox.textContent += value;
  }
}

function clearDisplay() {
  get(".calculator__display").textContent = "0";
}

function calculate() {
  let result = eval(get(".calculator__display").textContent);
  get(".calculator__display").textContent = result.toLocaleString();
}
