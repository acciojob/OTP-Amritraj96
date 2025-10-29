// script.js
window.addEventListener("DOMContentLoaded", () => {
  const inputs = document.querySelectorAll(".code");

  // Focus the first input on page load
  inputs[0].focus();

  inputs.forEach((input, index) => {
    input.addEventListener("input", (e) => {
      const value = e.target.value;

      // Allow only single digit
      if (!/^[0-9]$/.test(value)) {
        e.target.value = "";
        return;
      }

      // Move to next input if available
      if (index < inputs.length - 1) {
        inputs[index + 1].focus();
      }
    });

    input.addEventListener("keydown", (e) => {
      if (e.key === "Backspace") {
        if (input.value === "") {
          // Move to previous input if current empty
          if (index > 0) {
            inputs[index - 1].focus();
            inputs[index - 1].value = "";
          }
        } else {
          // Clear current field
          input.value = "";
        }
      }
    });
  });
});

