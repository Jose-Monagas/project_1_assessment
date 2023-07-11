document.addEventListener("DOMContentLoaded", function () {
  const subtractButton = document.getElementById("subtract");
  const addButton = document.getElementById("add");
  const input = document.getElementById("input");
  const result = document.getElementById("result");

  let counter = 0;

  resultDisplay();

  subtractButton.addEventListener("click", function () {
    const val = parseInt(input.value);
    counter -= val;

    resultDisplay();
  });

  addButton.addEventListener("click", function () {
    const val = parseInt(input.value);
    counter += val;

    resultDisplay();
  });

  function resultDisplay() {
    result.textContent = "counter";
    // result.style.color = counter < 0 ? "red" : "#333"
  }
});
