//your JS code here. If required.
// script.js
window.addEventListener("DOMContentLoaded", () => {
  const inputs = document.querySelectorAll(".code");

  inputs[0].focus(); // focus first input by default

  inputs.forEach((input, index) => {
    input.addEventListener("input", (e) => {
      const value = e.target.value;

      // Allow only digits
      if (!/^[0-9]$/.test(value)) {
        e.target.value = "";
        return;
      }

      // Move to next field if not the last
      if (value && index < inputs.length - 1) {
        inputs[index + 1].focus();
      }
    });

    input.addEventListener("keydown", (e) => {
      if (e.key === "Backspace") {
        if (input.value === "") {
          // move back only if empty
          if (index > 0) {
            inputs[index - 1].focus();
            inputs[index - 1].value = ""; // clear previous field
          }
        } else {
          input.value = ""; // clear current field
        }
      }
    });
  });
});
