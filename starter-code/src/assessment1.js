// Write a function that returns the product of 2 numbers
function product(x, y) {
  return x * y
}

// Write a function that returns whether a given number is even
function isEven(num) {
  return num % 2 === 0
}

// Return the largest of 2 numbers
function maxOfTwoNumbers(a, b) {
  if (a>b) {
    return a
  }
  else { return b }
}

// Return the largest of 3 numbers
function maxOfThreeNumbers(a, b, c) {
  return Math.max(a,b,c)
}

// Calculate the sum of an array of numbers
function sumArray(numbers) {
  if (numbers.length === 0) {
    return 0
  }
  return numbers.reduce((acc, currentValue) => acc + currentValue)
}

// Return the largest number of a non-empty array
function maxOfArray(numbers) {
  if (numbers.length === 0) {
    return 0
  }
  return Math.max(...numbers)

}

// Return the longest string in an array
function longestString(strings) {
  let longestString = ""
  strings.forEach(string => {
    if (string.length > longestString.length) {
      longestString = string
    }
  })
  return longestString
}


// Return whether a word is in an array
function doesWordExist(wordsArr, word) {
  let answer = false
  wordsArr.forEach( element => {
    if (element === word) {
      answer = true
      return true
    }
  })
  return answer
}


// Finding the first non-duplicate (non-repeating) word in an array

const assertion = [
  'foo',
  'bar',
  'foo',
  'baz',
  'bar',
  'fizz',
  'foo',
];

function findUnique(wordsArr) {
  if (wordsArr.length === 0) {
    return false
  }

  let wordFound
  for (i = 0; i < wordsArr.length; i++) {
    if (wordsArr.indexOf(wordsArr[i]) === -1) {
      wordFound = wordsArr[i]
      return wordFound
    }
}
return wordFound
}

console.log(findUnique(assertion))
// Get the fullName from the object { firstName: 'Tony', lastName: 'Stark'}
function getFullName(personObj) {
  let concactName =  personObj.firstName + " " +personObj.lastName
  return concactName
}

// Return the largest number in a two dimensional array
function maxTwoDimArray(matrix) {
  let highestNumber = 0 

  for (let num = 0; num < matrix.length; num++) {
    let arr = matrix[num]
    arr.forEach( number => {
      if (number > highestNumber) {
         highestNumber = number
      }
    })
  }
  return highestNumber
}
