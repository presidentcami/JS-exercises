// Hello object

const user = {
};
user.name = 'John';
user.surname = 'Smith';
console.log(user)
user.name = 'Pete';
console.log(user)
delete user.name;
console.log(user);

// Check for emptiness

// this one was too simple for me to grasp at first
function isEmpty(obj) {
    for (let key in obj) {
        return false;
    }
    return true;
}
let schedule = {};
// alert( isEmpty(schedule) );

// Sum object properties
// I had just done something very similar with my mentor today! so seeing 
// their solution where it didn't necessarily need to be a function, but still
// did all the same things was pretty validating.

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

function sum(obj) {
    let salaries = 0;
    for (let key in obj) {
        salaries += obj[key];
    }
    return salaries;
}
console.log(sum(salaries));

// Multiply numeric property values by 2

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

function multiplyNumeric(obj) {
    for (let key in obj) {
        if (typeof obj[key] == 'number') {
            obj[key] *= 2;
        }
    }
}

console.log(multiplyNumeric(menu)); 
// at first this wasn't working and then I realized that since the function isn't 
// returning anything - of course it won't work! so I logged out menu, and saw that 
// the function was working. felt pretty good when I compared it to the solution code
// and it was the same.
console.log(menu)