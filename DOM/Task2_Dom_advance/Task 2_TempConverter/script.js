document.addEventListener("DOMContentLoaded", () => {
  const celsiusInput = document.getElementById("celsius");
  const fahrenheitInput = document.getElementById("fahrenheit");
  const convertBtn = document.getElementById("convertBtn");
  const errorDiv = document.getElementById("error");

  // Function to convert Celsius to Fahrenheit
  const celsiusToFahrenheit = (celsius) => (celsius * 9) / 5 + 32;

  // Function to convert Fahrenheit to Celsius
  const fahrenheitToCelsius = (fahrenheit) => ((fahrenheit - 32) * 5) / 9;

  // Validation for numeric input
  const isValidNumber = (value) => !isNaN(value) && value.trim() !== "";

  // Clear inputs and error
  const clearError = () => {
    errorDiv.textContent = "";
  };

  convertBtn.addEventListener("click", () => {
    clearError(); // Clear any previous error messages

    const celsiusValue = celsiusInput.value.trim();
    const fahrenheitValue = fahrenheitInput.value.trim();

    if (isValidNumber(celsiusValue) && fahrenheitValue === "") {
      // Convert Celsius to Fahrenheit
      const fahrenheitResult = celsiusToFahrenheit(parseFloat(celsiusValue));
      fahrenheitInput.value = fahrenheitResult.toFixed(2);
    } else if (isValidNumber(fahrenheitValue) && celsiusValue === "") {
      // Convert Fahrenheit to Celsius
      const celsiusResult = fahrenheitToCelsius(parseFloat(fahrenheitValue));
      celsiusInput.value = celsiusResult.toFixed(2);
    } else if (celsiusValue === "" && fahrenheitValue === "") {
      errorDiv.textContent = "Please enter a value in one of the fields.";
    } else {
      errorDiv.textContent = "Please enter a valid number in only one field.";
    }
  });
});
