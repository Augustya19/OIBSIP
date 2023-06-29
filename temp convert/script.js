function convertTemperature() {
    // Get input value and unit
    var inputValue = document.getElementById('inputValue').value;
    var inputUnit = document.getElementById('inputUnit').value;

    // Convert temperature
    var outputValue;
    var outputUnit;

    if (inputUnit === 'celsius') {
        outputValue = (inputValue * 9/5) + 32;
        outputUnit = 'Fahrenheit';
    } else if (inputUnit === 'fahrenheit') {
        outputValue = (inputValue - 32) * 5/9;
        outputUnit = 'Celsius';
    }

    // Update output value and unit
    document.getElementById('outputValue').textContent = outputValue.toFixed(2);
    document.getElementById('outputUnit').textContent = outputUnit;
}