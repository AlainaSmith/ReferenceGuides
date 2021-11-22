// Just uncomment the start of the array and the function/(method) will console.log to your terminal.
// How to uncomment: Highlight the desired section, then for a mac you press command and then press the / once. Same way to comment out. 
// A method is a function that belongs to an object, and an array IS an object.
// So in these array examples I just called them FUNCTIONS USED.


// FUNCTION USED: .push
// PURPOSE: This ADDS an item to the end of an array

// let namesArr = ['Scott', 'Kyle', 'Dev', 'Mountain']
// namesArr.push('Alaina')
// console.log(namesArr)

// The updated array will look like this:
// ['Scott', 'Kyle', 'Dev', 'Mountain', 'Alaina']




// FUNCTION USED: .pop
// PURPOSE: This REMOVES the last item from the array

// let namesArr = ['Scott', 'Kyle', 'Dev', 'Mountain', 'Alaina']
// removedName = namesArr.pop('alaina')
// console.log(namesArr)

// The updated array will look like this:
// ['Scott', 'Kyle', 'Dev', 'Mountain']

// The removedName variable will now contain the item that was removed from the array.
// console.log(removedName)
// It will print: Alaina




// FUNCTION USED: .shift
// PURPOSE: This REMOVES the FIRST item from the array 

// let namesArr = ['Scott', 'Kyle', 'Dev', 'Mountain']
// let newArray = namesArr.shift()
// console.log(namesArr)

// The updated array will look like this:
// ['Kyle', 'Dev', 'Mountain'] 

// The newArray variable will now contain the item that was removed from the array.
// console.log(newArray)
// It will print: Scott




// FUNCTION USED: .unshift
// PURPOSE: This ADDS an item to the FRONT of an array.

// let namesArr = ['Kyle', 'Dev', 'Mountain']
// namesArr.unshift('Alaina')
// console.log(namesArr)

// The updated array will look like this:
// ['Alaina', 'Kyle', 'Dev', 'Mountain']




// FUNCTION USED: .slice()
// PURPOSE: This will save a COPY of the array, depending on what TWO arguments you pass into it. The original array will NOT be changed.
// NOTES: The first argument indicates where you want to START your copy of the array, the second argument is where you want to END the copy
// .slice(1st argument, 2nd argument). Then we must save the COPY to a new variable that is chained to the .splice function. 
// If we do not save the copy to a new variable, it will be lost.

// let namesArr = ['Alaina', 'Kyle', 'Dev', 'Mountain']
// let arrayCopy = namesArr.slice(0, 3)
// console.log(arrayCopy)

// The copy of the array will look like this:
// ['Alaina', 'Kyle', 'Dev']

// NOTES: .slice does this funky thing where it only copies UP UNTIL the second argument. 
// So in this case, it will start copying at index (0) and STOP copying before it hits index [3].
// console.log(namesArr)
// This will print the original array: ['Alaina', 'Kyle', 'Dev', 'Mountain'] unchanged.




// FUNCTION USED: .splice
// PURPOSE: This will take in 3 arguments .splice(1st, 2nd, 3rd). 
// The 1st argument indicates where we want to begin editing.
// The 2nd argument indicates how many items we want to remove.
// The 3rd argument is where we ADD an item if we choose.

// let namesArr = ['Alaina', 'Kyle', 'Dev', 'Mountain']
// let removedName = namesArr.splice(1, 2, 'Sam')
// console.log(namesArr)

// This will print: ['Alaina', 'Sam', 'Mountain']
// In this example I am starting at index [1], which is where Kyle is located.
// I want to remove 2 items. The index at which we started will be removed, and the 1 after it. (Kyle, Dev)
// For the 3rd argument, I am adding 'Sam'. This name will be inserted at the defined index of the 1st argument, in this case it is index [1].

// console.log(removedName)
// This will print: ['Kyle', 'Dev']



// Another way to use .splice
// let namesArr = ['Alaina', 'Kyle', 'Dev', 'Mountain']
// let removedName = namesArr.splice(1, 2)
// console.log(namesArr)

// This will print ['Alaina', 'Mountain']

// console.log(removedName)
// This will print ['Kyle', 'Dev']

// Our namesArray only contains two items now. ['Alaina', 'Mountain']. 
// Even though we are only trying to define the 3rd argument, we still have to fulfill the first two.

// namesArr.splice(2, 0, 'Sam')
// console.log(namesArr)

// This will print ['Alaina', 'Sam', 'Mountain']
// This will start at the 2nd index, it will remove 0 items, 
// and once again Sam will be printed at the indicated index of the 1st argument in .splice, which is [2] in this case.



// PROPERTY USED: .length
// PURPOSE: self explanatory

// let namesArr = ['Alaina', 'Sam', 'Mountain']
// console.log(namesArr.length)

// This will print: 3

// You can use .length to access the last index in an array. 
// If we want the last item in our namesArr array but didn’t know its 
// index, we could reference it like this: namesArr[namesArr.length - 1]. This is a good trick to know.

// console.log(namesArr.length - 1)

//This will print 2


// FOR LOOPS

// let numsArr = [1, 2, 3, 4, 5]
//  for (let i = 0; i < numsArr.length; i++)
//   numsArr[i] += 1
// console.log(numsArr)



// FUNCTION: Boolean

// let myVar = 5
// let myVarTwo = Boolean(5)
// console.log(myVarTwo)

//This will print: true


// FUNCTION: Number
// PURPOSE: This converts a string or boolean to a number
// NOTES: True will turn into the number 1, and false into 0

// const bool = true
// const boolTwo = Number(true)
// console.log(boolTwo)

// This will print: 1


// FUNCTION: parseInt
// PURPOSE: This will search for a number in a string and only 
// return that number.

// let string = "Iam26"
// let withNumber = Number(string)
// let withParseInt = parseInt(string)
// console.log(withParseInt)

// !!!!!!!!!!!!!!!QUESTIONS!!!!!!!!!!!!!!!!!!!
//If the purpose of parseInt is to return just the numbers, why is
//it not returning just 26?


// FUNCTION: String 
// PURPOSE: Converting booleans and numbers to Strings 

// let evenNumber = 22
// let stringNumber = String(evenNumber)
// console.log(stringNumber)

//This will print '22'

// const myBool = true
// const phrase = 'That is ' + myBool
// console.log(phrase) // 'That is false'


// FUNCTION: .includes()
// PURPOSE: Checks to see if a string is contained within a Declared Variable.
// It will return true or false.

//let myString = 'DevMountain'     //<--- Declared Variable   
//console.log(myString.includes('De'))
//This will log true

// FUNCTION: .startsWith()
// PURPOSE: Checks to see if a string starts with a certain character, returns true or false

// let myString = 'DevMountain'
// console.log(myString.startsWith('F'))

//This will log false

// FUNCTION: .endsWith()
// PURPOSE: you get it

// let myString = 'DevMountain'
// console.log(myString.endsWith('n'))

// This will log true



// MANIPULATING STRINGS 
// If we want to change the value of the original variable, 
// we’ll need to reassign it. 


// update this 
// lowerString = lowerString.toUpperCase()
// console.log(lowerString) // 'LOWERCASE LETTERS'


// let lowerString = 'lowercase letters'
// lowerString.toUpperCase()
// console.log(lowerString) // 'lowercase letters'


// Let’s say a student takes a test worth 50 points. This student scores 44. 
// Now, we want to work out their percentage, but first, 
// we want our students to receive a 5 point curve. To do this, we could write:

//Example of running a normal code:

// let hermioneScore = 44
// hermioneScore += 5    // 49
// hermioneScore *= 2    // 98

// console.log(hermioneScore)

// Now running with a function:

// let hermioneScore = calculateScore(44)
// let harryScore = calculateScore(41)

// function calculateScore(studentScore) {
//     studentScore += 5
//     studentScore *= 2
//     return studentScore
//   }
  
 // calculatesScore(44)
// We are turning the parameter (studentScore) into a value.
// Variables are used to store data, functions stores logic. 
// Functions are like factories, takes in raw materials and spits out clothing.

// function sumNumbers(num1, num2) {
//     console.log(num1 + num2)
//   }
//   sumNumbers(3, 9)


//   function sumNumbers(num1, num2) {
//     console.log(num1 + num2)
//   }

//   sumNumbers(3, 9) // Output: 12
//   sumNumbers(12, 33) // Output: 45
//   sumNumbers(-15, 15) // Output: 0


// let purse = 20
// function calculateTotal(item1, item2) {
//   return item1 + item2
// }
// purse -= calculateTotal(6.59, 9.99)  // 
//This function returns 16.58 to the call site. 
//The subtraction assignment operator (-=) subtracts the value 
//of the right operand from a variable and assigns the result 
//to the variable. So, purse which is (20) will subtract (16.58) from it, 
//resulting in the total left over stored in the value purse.
//console.log(purse)


// ASK ABOUT THIS SECTION !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// let total = calculateTotal
// purse = purse - total 
// let newTotal = calculateTotal

// console.log(newTotal)

//The invocation value of a function ( calculateTotal (1.5, 1)   
//is equal to the return value of the function. 
//(Return item 1+ item2) which is 2.5


// let age = 21

// function logDetails() {
// let name = 'Tyler'
// console.log(`My name is ${name} and I am ${age}.`)
// }
// logDetails()


// let age = 21

// function logDetails() {
// let name = 'Tyler'
// }

// console.log(`My name is ${name} and I am ${age}.`)

//This will not work because console.log only has access to the age, since it is outside of the scope as well. 
//But name is in the inner scope, and console.log can not access the inner scope since its in the outer.


// let age = 21

// function logDetails() {
// let name = 'Tyler'
// return name
// }

// console.log(`My name is ${logDetails()} and I am ${age}.`)
//In this we are console.log and calling the function in one


//!!!!!!!!!!QUESTION!!!!!
//Can you define this differently The invocation of the function is equal to the return of the function then it will show up. 









