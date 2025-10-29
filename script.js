// script.js
window.addEventListener("DOMContentLoaded", () => {
  const inputs = document.querySelectorAll(".code");

  // Focus the first input by default
  inputs[0].focus();

  inputs.forEach((input, index) => {
    input.addEventListener("input", (e) => {
      const value = e.target.value;

      // Allow only digits
      if (!/^[0-9]$/.test(value)) {
        e.target.value = "";
        return;
      }

      // Move focus to next input
      if (index < inputs.length - 1) {
        inputs[index + 1].focus();
      }
    });

    input.addEventListener("keydown", (e) => {
      if (e.key === "Backspace") {
        if (input.value === "") {
          // Move focus to previous input if empty
          if (index > 0) {
            inputs[index - 1].focus();
            inputs[index - 1].value = "";
          }
        } else {
          // Clear current input if not empty
          input.value = "";
        }
      }
    });
  });
});

