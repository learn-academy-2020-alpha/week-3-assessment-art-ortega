// ASSESSMENT 3: Coding Practical Questions


// --------------------1) Create a function that returns the first 10 numbers of the Fibonacci sequence in an array. Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
const fibo = (num) => {
  let newArr = [1,1]
  for(let i=1; i<num;i++){
      newArr.push(newArr[i]+newArr[i-1])
  }
  return newArr
}
console.log(fibo(9))


// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

var fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
// Expected output: [-9, 9, 7, 199]
var fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// Expected output: [-823, 7, 23]

const sortOdd = array => {
    let newArr = []
    array.map(value => {
        if(typeof value === "number"){
            if(value%2 === 1 || value%2 === -1){
                newArr.push(value)
            }
        }
    })
   return newArr.sort((a,b)=> a-b)
}
console.log(sortOdd(fullArr1))
console.log(sortOdd(fullArr2))


// --------------------3) Create a function that takes in a string of a single word and returns the middle letter of the word. If the word is an even number of letters, return the two middle letters.

var middleLetters1 = "hello"
// Expected output: “l”
var middleLetters2 = "rhinoceros"
// Expected output: “oc”

const middle = str => {
    let newStr = ""
    if(!(str.length %2)){
        newStr = str.slice(str.length/2 -1,str.length/2 +1)
    } else if(str.length %2){
        newStr = str.slice(str.length/2,str.length/2 +1)
    }
    return newStr
}
console.log(middle(middleLetters1))
console.log(middle(middleLetters2))

// --------------------4) Create a class to get the area of a sphere. Create three spheres with different radi as test cases. Area of a sphere =  4πr^2 (four pi r squared)

const areaSphere = r => {
    return 4*Math.PI*Math.pow(r,2)
}
console.log(areaSphere(2))
console.log(areaSphere(4))


// --------------------5) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

var numbersToAdd1 = [2, 4, 45, 9]
// Excpected output: [2, 6, 51, 60]
var numbersToAdd2 = [0, 7, -8, 12]
// Expected output: [0, 7, -1, 11]
var numbersToAdd3 = []
// Expected output: []

const totalSum = arr => {
    let newArr = []
    let sum = 0
    arr.map(value => {
        sum = value + sum;
        newArr.push(sum)
    })
    return newArr
}
console.log(totalSum(numbersToAdd1))
console.log(totalSum(numbersToAdd2))
console.log(totalSum(numbersToAdd3))