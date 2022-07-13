// Q1. Return the Sum of Two Numbers
function addition(num1, num2) {
  return num1 + num2
}

console.log(addition(3, 5))

// Q2. Convert Hours into Seconds
function hoursIntoSeconds(hours) {
  return hours * 60 * 60
}

console.log(hoursIntoSeconds(10))

// Q3. Calculate the Perimeter of a Rectangle
function calcPerimeter(length, width) {
  return 2 * (length + width)
}

console.log(calcPerimeter(10, 20))

// Q4. Calculate the Area of a Triangle
function calcTriangleArea(base, height) {
  return (1 / 2) * base * height
}

console.log(calcTriangleArea(20, 20))

// Q5. Extend a String
function appendFrontend(string) {
  return string + "Frontend"
}

console.log(appendFrontend("Apple"))

// Q6. Greater than 100?
function sumGreaterThan100(num1, num2) {
  return num1 + num2 > 100
}

console.log(sumGreaterThan100(10, 20))

// Q7. Less than or Equal to Zero?
function lessThanOrEqualToZero(num) {
  return num <= 0
}

console.log(lessThanOrEqualToZero(0))

// Q8. Opposite boolean
function oppositeBoolean(bool) {
  return !bool
}

console.log(oppositeBoolean(false))

// Q9. Is not the number 0
function isNotZero(num) {
  return num !== 0
}

console.log(isNotZero(0))
