// Week 3 - Objects

// In the following exercises, you will need to place your code or answer underneath each exercise prompt.

// First try answering these without using references or looking up any information.
// Then, check your answer by using references and/or running your code.
// You can run your JS code using the Chrome or Firefox Developer tools, or by using Node.js or using Replit.com 
// Feel free to update your answers if you got them wrong at first -- this exercise is for your own learning.
// But make sure you understand why the correct answer is right.

// Exercise 1. Write a function called keys, which accepts an object and returns an array of all of the keys in the object.
// IMPORTANT: Do not use the built in Object.keys() function!
// Examples:
let obj = { a: 1, b: 2, c: 3 };
console.log(keys(obj)); // ["a", "b", "c"]
let obj2 = { first: 'Matt', last: 'Lane' };
console.log(keys(obj2)); // ["first", "last"]
let obj3 = {};
console.log(keys(obj3)); // []

// ~~~~~ SOLUTION ~~~~~~~
function keys(object) {
  let arr = [];
  for (const key in object) {
    arr.push(key);
  }
  return arr;
}

// Exercise 2. Write a function called values, which accepts an object and returns an array of all of the values in the object.
// IMPORTANT: Do not use the built in Object.values() function!
// Examples:
let obj4 = { a: 1, b: 2, c: 3 };
console.log(values(obj4)); // [1,2,3]
let obj5 = { first: 'Matt', last: 'Lane', isDogOwner: true };
console.log(values(obj5)); // ["Matt", "Lane", true]
let obj6 = {};
console.log(values(obj6)); // []

// ~~~~~ SOLUTION ~~~~~~~
function values(object) {
  let arr = [];
  for (const value in object) {
    arr.push(object[value]);
  }
  return arr;
}


// Exercise 3. Write a function called entries, which accepts an object and returns an array of arrays of key-value pairs.
// In other words, each sub-array is an "entry" in the object with two elements: the first element is the key, and the second element is the value.
// IMPORTANT: Do not use the built in Object.entries() function!
// Examples:
let obj7 = { a: 1, b: 2, c: 3 };
console.log(entries(obj7));
// [["a",1], ["b",2], ["c",3]]
let obj8 = { first: 'Matt', last: 'Lane', isDogOwner: true };
console.log(entries(obj8));
// [["first","Matt"], ["last","Lane"], ["isDogOwner",true]]
let obj9 = {};
console.log(entries(obj9)); // []

// // ~~~~~ SOLUTION ~~~~~
function entries(object) {
  let arr = [];
  for(let value in object) {
    arr.push([value,object[value]])
  }
  return arr;
}

// Exercise 4. Write a function called pluck, which takes an array of objects and the name of a key.
// The function should return an array containing the value associated with that key for each object, or undefined if that key is not present in the object.
// Examples:
// pluck([{ name: "Tim" }, { name: "Matt" }, { name: "Elie" }],'name')
// ["Tim", "Matt", "Elie"]
// pluck([{ name: "Tim", isBoatOwner: true }, { name: "Matt", isBoatOwner: false }, { name: "Elie" }],'isBoatOwner')
// [true, false, undefined]

// did this with my mentor!

let testArr1 = [{ name: "Tim" }, { name: "Matt" }, { name: "Elie" }]
let testArr2 = [{ name: "Tim", isBoatOwner: true }, { name: "Matt", isBoatOwner: false }, { name: "Elie" }]
console.log(pluck(testArr1, 'name'));
// ["Tim", "Matt", "Elie"]
console.log(pluck(testArr2, 'isBoatOwner'))
// [true, false, undefined]


function pluck(objectArray, keyName) {
  // let arr = [];
  let arrayOfObjValues = objectArray.map((obj) => {
    if (keyName in obj) {
      return obj[keyName];
    } else {
      return undefined;
    }
  })                                       
 return arrayOfObjValues;
};

// Exercise 5. Write a function called stringFromObject that generates a string from an object's key/value pairs.
// The format should be "key = value, key = value".
// Each key/value pair should be separated by a comma and space except for the last pair.
// Examples:
// stringFromObject({ a: 1, b: '2' });
// "a = 1, b = 2"
// stringFromObject({ name: 'Elie', job: 'Instructor', isCatOwner: false });
// "name = Elie, job = Instructor, isCatOwner = false"
// stringFromObject({}); // ""
// worked on this at the Saturday workshop - many thanks to Ruthie, Gisselle and Dana!
//Creating a function called stringFromObject 
//Input is an object, output is a string
//Take input and see what it is,
//Using a for loop over the object
//Access the value of each key in the object

  function stringFromObject(obj){
    //Made empty array
    let emptyArray = [];
    let joinedStr = "";
    //Loop through object to push each key and value into the array
    for(key in obj){
      emptyArray.push(key + " = " + obj[key]);
      // emptyArray.push("=");
      // emptyArray.push(obj[key]); tried to do this on more than one line, but wasn't printinig properly
      
    }
    joinedStr = emptyArray.join(", ");
    return joinedStr;
  }

  console.log(stringFromObject({ a: 1, b: '2' }));
  // "a = 1, b = 2"
  console.log(stringFromObject({ name: 'Elie', job: 'Instructor', isCatOwner: false }));
  // "name = Elie, job = Instructor, isCatOwner = false"
  console.log(stringFromObject({})); // ""

// Exercise 6. Write a function called minMaxKeyInObject that accepts an object with numeric keys.*
// The function should return an array with the following format: [lowestKey, highestKey]
// Examples:
// minMaxKeyInObject({ 2: 'a', 7: 'b', 1: 'c', 10: 'd', 4: 'e' });
// [1, 10]
// minMaxKeyInObject({ 1: 'Elie', 4: 'Matt', 2: 'Tim' });
// [1, 4]


// input is an object and output is an array with two values in it
// set up function
// set up test cases
// in pseudocode line by line in function, know what i need to do
// I was able to work on this with a group of people on Saturday, so reviewing it
// again and again for my own understanding! 

function minMaxKeyInObject(objectWithNum){
  let numberArray = [];
  let minAndMax = [];
  for (let item in objectWithNum){    
    if(isNaN(item) === false){
      console.log(item, "test");
    numberArray.push(item*1);
    }  
  }
  numberArray.sort((a,b) => {return a - b});
  // console.log(numberArray)
  minAndMax.push(numberArray[0], numberArray[numberArray.length-1]);
  return minAndMax;
}

console.log(minMaxKeyInObject({ 2: 'a', 7: 'b', 1: 'c', 10: 'd', 4: 'e'}));
console.log(minMaxKeyInObject({ 1: 'Elie', 4: 'Matt', 2: 'Tim' }));
