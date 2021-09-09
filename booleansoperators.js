// Two variables for comparison
let num1 = 15
let num2 = 15

// Variable to test for equality
let isEqual

// Are the numbers equal to one another?
// Double equals compares the first num to the second num
isEqual = num1 == num2

// output (true)
console.log(isEqual)

let num3 = 15
let num4 = "15"

// Are the numbers equal to one another?
// Double equals compares the first num to the second num
isEqual = num3 == num4

// output (true) compares the string as a num
console.log(isEqual)

isEqual = num3 === num4
// output (false) compares type & value
console.log(isEqual)

// not equals operator to check that these two are not equal to each other
isEqual = num3 !== num4
// output (true) compares type & value
console.log(isEqual)

// is not equal
isEqual = num1 !== num2

// output (false)
console.log(isEqual)

// greater than
isEqual = num1 > num2

// output (false)
console.log(isEqual)

// greater than or equal to
isEqual = num1 >= num2

// output (false)
console.log(isEqual)

// less than
isEqual = num1 < num2

// output (false)
console.log(isEqual)

// less than or equal to
isEqual = num1 <= num2

// output (false)
console.log(isEqual)