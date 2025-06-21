document.addEventListener("DOMContentLoaded", function () {
    const unitInputEl = document.getElementById("inputValue");
    const fromEl = document.getElementById("fromUnit");
    const toEl = document.getElementById("toUnit");
    const btnConvertEl = document.getElementById("convertBtn");
    const resultEl = document.getElementById("result");
  
    const conversionRates = {
      cm: 0.01,
      m: 1,
      km: 1000,
      in: 0.0254,
      ft: 0.3048
    };
  
    btnConvertEl.addEventListener("click", function () {
      const unitInput = parseFloat(unitInputEl.value);
      const fromUnit = fromEl.value;
      const toUnit = toEl.value;
  
      if (isNaN(unitInput)) {
        alert("Please enter a valid number.");
        return;
      }
  
      if (conversionRates[fromUnit] && conversionRates[toUnit]) {
        const valueInMeters = unitInput * conversionRates[fromUnit];
        const convertedValue = valueInMeters / conversionRates[toUnit];
  
        resultEl.innerText = `${unitInput} ${fromUnit} = ${convertedValue.toFixed(4)} ${toUnit}`;
      } else {
        alert("Invalid unit selection");
      }
    });
  });
  