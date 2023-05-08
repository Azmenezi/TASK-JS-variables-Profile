/**
 * Part 1: Creating Variables and Constants
 * In this file you should define the following variables with the exact names
 *
 * 1. fullName      -> assign it a value of your full name
 * 2. yearOfBirth   -> assign it a value of your year of birth
 * 3. hobby         -> assign it a value of your favorite hobby
 * 4. funFact       -> assign it a value of some fun fact about yourself
 * 5. image         -> assign it a value of a url of your image or ant image that represents you online
 */

// Part 1 answer 👇🏻 ...

const fullName = "Magnus Carlsen"
const yearOfBirth = "1990"
let hobby = ["Playing Chess"]
let funFact = "I Don't understand Coding"
const image = "https://www.slovenskenovice.si/media/images/20230215/1384469.036c57c0.fill-256x256.jpg"


/**
 * Part 2: String Interpolation
 * Create the following new variables that interpolate
 * the variables defined above into strings.
 *
 * 1. fullNameString      -> assign it to: My name is {fullName}
 * 2. yearOfBirthString   -> assign it to: I am {YOUR_AGE}, and make sure you calculate your age from your year of birth
 * 3. hobbyString         -> assign it to: My hobby is {YOUR_HOBBY}
 * 
 * Uncomment the following lines and start interpolating.
 * You can uncomment a line by removing the // at the start
 */

const fullNameString = `My name is ${fullName}`;
const yearOfBirthString = `I am ${2023 - yearOfBirth} years old`
const hobbyString = `my hobby is ${hobby}`




/**
 * Part 3: Re-assignment
 * Increment your hacker score
 * */

let stars = 0;

function incrementBy1() {
  // Increment stars by 1 👇🏻
  if (stars == 1) {
    stars = 0
  } 
  
  else {
  stars = 0
  stars++
}
}
function decrementBy1() {
  // decrement stars by 1 👇🏻
  if (stars == 3) {
    stars = 0
  } 
  
  else {
  stars = 0
  stars+=3
  }
}

function incrementBy2() {
  // Increment stars by 2 👇🏻
  if (stars == 2) {
    stars = 0
  } 
  
  else {
    stars = 0
    stars+=2
  }
}
function decrementBy2() {
  // decrement stars by 2 👇🏻
  if (stars == 4) {
    stars = 0
  } 
  
  else {
  stars = 0
  stars+=4
  }
}
function decrementBy3() {
  // decrement stars by 2 👇🏻
  if (stars == 5) {
    stars = 0
  } 
  
  else {
  stars = 0
  stars+=5
  }
}
