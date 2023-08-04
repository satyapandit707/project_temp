<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="temp.css">
    <script src="/temp.js"></script>
</head>
<body>
    <div class="container">
        <div class="title">
            <h1>Temperature Converter</h1>
            <span class="Temperature-icon"><i class="fa-solid fa-temperature-three-quarters"></i></span>
        </div>

        <div id="celsius">
            <input type="number" name="" placeholder="Celsius">
            <span class="icon">&#8451;</span>
        </div>
        <div id="fahrenheit">
            <input type="number" name="" placeholder="Fahrenheit">
            <span class="icon">&#8457;</span>
        </div>
        <div id="kelvin">
            <input type="number" name="" placeholder="Kelvin">
            <span class="icon">&#8490;</span>
        </div>

        <div class="button">
            <button onclick="clearFields()">All Clear</button>
        </div>
    </div>

    <script>
        let celsiusInput = document.querySelector('#celsius > input')
        let fahrenheitInput = document.querySelector('#fahrenheit > input')
        let kelvinInput = document.querySelector('#kelvin > input')

        function roundNumber(number) {
            return Math.round(number * 100) / 100
        }

        function celsiusToFahrenheitAndKelvin(cTemp) {
            let fTemp = (cTemp * 9 / 5) + 32
            let kTemp = cTemp + 273.15
            fahrenheitInput.value = roundNumber(fTemp)
            kelvinInput.value = roundNumber(kTemp)
        }

        function fahrenheitToCelsiusAndKelvin(fTemp) {
            let cTemp = (fTemp - 32) * 5 / 9
            let kTemp = (fTemp - 32) * 5 / 9 + 273.15
            celsiusInput.value = roundNumber(cTemp)
            kelvinInput.value = roundNumber(kTemp)
        }

        function kelvinToCelsiusAndFahrenheit(kTemp) {
            let cTemp = kTemp - 273.15
            let fTemp = (kTemp - 273.15) * 9 / 5 + 32
            celsiusInput.value = roundNumber(cTemp)
            fahrenheitInput.value = roundNumber(fTemp)
        }

        function clearFields() {
            celsiusInput.value = ""
            fahrenheitInput.value = ""
            kelvinInput.value = ""
        }

        celsiusInput.addEventListener('input', function() {
            let cTemp = parseFloat(celsiusInput.value)
            if (!isNaN(cTemp)) {
                celsiusToFahrenheitAndKelvin(cTemp)
            } else {
                fahrenheitInput.value = ""
                kelvinInput.value = ""
            }
        })

        fahrenheitInput.addEventListener('input', function() {
            let fTemp = parseFloat(fahrenheitInput.value)
            if (!isNaN(fTemp)) {
                fahrenheitToCelsiusAndKelvin(fTemp)
            } else {
                celsiusInput.value = ""
                kelvinInput.value = ""
            }
        })

        kelvinInput.addEventListener('input', function() {
            let kTemp = parseFloat(kelvinInput.value)
            if (!isNaN(kTemp)) {
                kelvinToCelsiusAndFahrenheit(kTemp)
            } else {
                celsiusInput.value = ""
                fahrenheitInput.value = ""
            }
        })
    </script>
</body>
</html>
