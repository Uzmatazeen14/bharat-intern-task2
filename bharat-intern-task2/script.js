document.getElementById('celsius').addEventListener('input', function () {
    const celsius = parseFloat(this.value);
    if (isNaN(celsius)) {
      document.getElementById('fahrenheit').innerText = "-";
      document.getElementById('kelvin').innerText = "-";
    } else {
      const fahrenheit = (celsius * 9/5) + 32;
      const kelvin = celsius + 273.15;
  
      document.getElementById('fahrenheit').innerText = fahrenheit.toFixed(2) + " °F";
      document.getElementById('kelvin').innerText = kelvin.toFixed(2) + " K";
    }
  });
  
