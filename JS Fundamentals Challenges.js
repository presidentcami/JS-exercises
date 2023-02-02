// Write a function below that accepts a number as the only argument.
// The function should determine whether the number is divisible by 3,
// and return either true or false.
// Choose names that make the code easy to understand.
//
// Note:  None of the review # problems have tests included, but feel free to write your own.

function divByThree(num) {
// make an edge case that ensures it's a number
    if (typeof num !== 'number') {
        return 'Invalid entry. Please input a number'
    }
    // if our number is exactly divisible by 3
    if (num % 3 === 0) {
        return true;
    } else {
        return false;
    }
}
console.log('Problem 1')
console.log(divByThree(3));
console.log(divByThree(15));
console.log(divByThree(21));
console.log(divByThree(14));
console.log(divByThree('14'));

// Write a function that takes a string as the argument.
// The function should return a number that is the number of characters in the string.
// Choose names that make the code easy to understand.

console.log('Problem 2')
function numInStr(str) {
    // create an empty variable that can accept numbers
    let count = 0;
// ensure that our input is a string
    if (typeof str !== 'string') {
        return 'Invalid entry. Please enter a string.'
    }
// count each element in the string
    for (let i =0; i<str.length; i++) {
        count +=1;
    }
    return count;
}

console.log(numInStr('cat'));
console.log(numInStr('animal'));
console.log(numInStr([]));
console.log(numInStr('Camille'));


// 1. Create an array of numbers, (ex: [1, 2, 3])
// 2. Without using any math operators, write 5 statements:
//   - Return the first item in the array (ex: 1)
//   - Return the last item in the array (ex: 3)
//   - Add a new item to the end of the array (ex: [1,2,3,4])
//   - Add an array to the beginning of the array. (ex: [["a","b","c"],1,2,3,4])
//   - Return the first item from the first item in the array. (ex: "a")

console.log('Problem 3')
let arrOfNum = [1, 3, 5, 7, 9];
console.log(arrOfNum[0]);
console.log(arrOfNum[arrOfNum.length - 1]); // had to look this up - intially came back undefined when i just put arrOfNum[-1]
console.log(arrOfNum.push(12));
console.log(arrOfNum.unshift([-9, -7, -3, -5, -1]));
console.log(arrOfNum[0][0]); // the first index in the nested array, then the first index item in that array


// Create a function that calculates how many minutes have elapsed from midnight until right now.
// The function should still return an accurate answer,
// even if you ran it a few minutes or hours later.

// i did go back to our lessons on Date and did some googling to solve this. learned a lot!

console.log('Problem 4')
function minSinceMidnight() {
    let midnight = new Date();
    // using .setHours() method to set Midnight to the most recent midnight that has occurred
    midnight.setHours(0,0,0,0);

    let currentDate = new Date();

    // subtract midnight from current time to find the amount of milliseconds that have passed
    let elapsedTime = currentDate - midnight;

    // use Math.floor to divide elapsed Time by 1000 to get seconds, and then by 60 to get minutes
    let seconds = Math.floor(elapsedTime / 1000);
    let minutes = Math.floor(seconds / 60);

   return `${minutes} minutes have passed since ${midnight}.` 
   // I will test this again tomorrow to make sure it works.
}


console.log(minSinceMidnight());
