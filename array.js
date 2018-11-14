// Comment in js

// Create an array
// Create an empty array
var myArr = new Array()

// recommended way
var myArr2 = []

// Create an array of a certain size
var myBigArr = new Array(100)

var myBigArr2 = [,,,]
var myBigArr3 = [1,2,3,4]

var array = []
array.length = 8 

// Give us the size of the array
array.length

// Position of items in the array
// index
//                0        1        2
var superArr = ['rock', 'paper', 'black']
// 0 base, starts at zero

// get a value with the index
superArr[1]

// insert in the array
var supArr = []

supArr.push('Stan Lee', 'Spiderman')

// it will add into the beginning of an array
supArr.unshift(1 , 2.3 , true)


// remove

// mutable vs immutable 
// mutable are items that can be changed
// immutable are items that cannot be changed

var sArr = [1, 2, 3]

// removes the last element of the array and returns it - mutable
sArr.pop

// removes the first element of the array and returns it - mutable
sArr.shift

// mutable
delete sArr[2]

// immutable
sArr.slice(2)


// iterate, going through an array, loops
var nums = [ 1, 2, 3, 4, 5]

//forEach
nums.forEach(function(num, index) {
  console.log("index of: " + index + "values: " + num)
})

// map
nums.map(function(num, index) {
  console.log(num++)
})

nums.filter(function(num, index) {
  console.log(num % 2 == 0)
})

  ['s', 23, 23.2, true, false].filter(boolean)

// for
for (var index = 0; index < nums.length; index++) {
  console.log(num[index])
}

// type checking
//checks for what datatype is something?
typeof []
typeof 0
typeof true

// misc functions
var lastArr = ["rock", "green", "blue"]

//return a string of what the array looks like
lastArr.toString

// brings two values together
lastArr.join

// reverses the array
lastArr.reverse

// put the items in order, asc, alphabetical for 
// strings, numbers, and floats < >
lastArr.sort()

// search the array
lastArr.find()

// tell the index of the value
lastArr.indexOf()

// boolean on if the arry includes a value
lastArr.includes()

// combine two arrays, or more if you put commas
lastArr.concat()
