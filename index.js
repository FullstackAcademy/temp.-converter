function convertToCelsius(fahrenheit) {
  return (fahrenheit - 32) * (5 / 9);
}

function describeTemperature(fahrenheit) {
  const celsiuse = convertToCelsius(fahrenheit);
  let description = `${fahrenheit}°F is ${celsiuse}°C, which is`;
  if (celsiuse < 0) {
    description += " very cold";
  } else if (celsiuse < 20) {
    description += " cold";
  } else if (celsiuse < 30) {
    description += " warm";
  } else if (celsiuse < 40) {
    description += " hot";
  } else {
    description += " very hot";
  }
  return description;
}

const fahrenheit = parseFloat(prompt("Enter temperature in Fahrenheit:"));

const result = describeTemperature(fahrenheit);

alert(result);