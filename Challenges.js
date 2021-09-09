// Convert Fahrenheit to Celsius
let fahrenheit = 32

// Write a function to easy convert fahrenheit to celsius
function fahrenheitToCelsius(fahrenheit) {
    let celsius = (fahrenheit - 32) * (5 / 9)
    return celsius
}

// Write a function to easy convert celsius to fahrenheit
function celsiusToFahrenheit(celsius) {
    let fahrenheit = (celsius * (9 / 5)) + 32
    return fahrenheit
}

// Write a function to easy convert miles to kilometers
function milesToKilometers(miles) {
    let kilometers = miles * 1.609344
    return kilometers
}

// Write a function to easy convert kilometers to miles
function kilometersToMiles(kilometers) {
    let miles = kilometers * 0.62137
    return miles
}

let celsius = fahrenheitToCelsius(fahrenheit)
console.log(celsius)

fahrenheit = 70
celsius = fahrenheitToCelsius(fahrenheit)
console.log(celsius)

fahrenheit = celsiusToFahrenheit(celsius)
console.log(fahrenheit)

let miles = 1
let kilometers = milesToKilometers(miles)
console.log(kilometers)

miles = kilometersToMiles(kilometers)
console.log(miles)