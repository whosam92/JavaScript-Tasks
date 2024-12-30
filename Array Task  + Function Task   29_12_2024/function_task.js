// 1
// Write a function named tellFortune that:
// takes 4 arguments: number of children,
// partner's name, geographic location, job title.
// outputs your fortune to the screen like so:
// "You will be a X in Y, and married to Z with N kids."

// Ex: tellFortune('software engineer', 'Jordan', 'Alice', 3);
// => "You will be a software engineer in Jordan, and married to Alice with 3 kids."


job= prompt("Enter your Name");
country= prompt("Enter your Country");
wife= prompt("Enter your Wife ");
numKids= prompt("Enter how many kids you have");

function tellFortune(st1, st2, st3, st4) {
  return `Your name is  ${st1} in ${st2}, and you will marry ${st3} and have ${st4} kids`;}

//--------------------------------------------------
// writing Arrays of  random options:    ----  another  solution kinda complicated one I made  --

// var job = ["Software Engineer", "Mechanical Engineer", "Doctor"];
// var country = ["Jordan", "Palestine", "KSA"];
// var wife = ["Sarah", "Jessica", "Noor"];
// var kids = [3, 2, 4, 5, 7];

// function tellFortune () {

//   const randomJob = job[Math.floor(Math.random()* job.length)];

//   console.log(`You will be a ${randomJob}`);
// }
// // Call the function
// tellFortune();

//----------------------------------------------------------

// 2
// Write a function named calculateDogAge that:
// takes 1 argument: your puppy's age.
// calculates your dog's age based on the conversion
// rate of 1 human year to 7 dog years.
// outputs the result to the screen like so:
// "Your doggie is NN years old in dog years!"

age=10;
function calculateDogAge(age) {
  return age * 7;
}
console.log(`Your doggie is ${age} years old in dog years!`);

Ex: calculateDogAge(1);
=> "Your doggie is 7 years old in dog years!"

// 3
// Write a function named calculateSupply that:
// takes 2 arguments: age, amount per day.
// calculates the amount consumed for rest of the life (based on a constant max age 100).
// outputs the result to the screen like so:
// "You will need NN to last you until the ripe old age of X"

// Ex: calculateSupply(30, 3);
// => 'You will need 76650 cups of tea to last you until the ripe old age of 100;

maxAge= 100;
let age= 30;
let amountPerDay = 3;
let remainYears = 100 - age;
totalAge= remainYears*
function calculateSupply(age, amountPerDay) {

  return 100, 3;
}

console.log(
  `You will need ${totalAge} cups of tea to last you until the ripe old age of ${age}`
);

// 4
// Write a function called greet that:
// takes 1 argument: name.
// and it will return hello + name

// Ex: greet("Adam")
// => "Hello Adam"

greet();

var name = "";
var name = prompt("Whats you name?");

function greet(name){
   return(name)
}
console.log(`Hello,`, name);

//---------------------------------------------
// Q  5

// what is the error:
// function double(cat) {               
//   return 2 * x;                     
// }

// function double(7) {
//   return 2 * 7;                    Answer cant use 7 as integer in the since its a number not a parameter 
// }

// function double('7') {
//   return 2 * 'x';                  Answer: the  value entered in function() is wrong cant enter 
// }


// =====================================

// var x = prompt("Enter any value:");

// function double(value) {
//     if (!isNaN(value) && value.trim() !== "") {
//         value = Number(value) * 2;
//         console.log(`Your doubled value is: ${value}`);
//         return value;
//     } else {
//         console.log(`You entered an invalid value that can't be doubled!`);
//         return;
//     }
// }

// double(x);


//-----------------------------

// 6  / fix these functions:

// func double1(x) {
//   return 2 * x ;
// }

// Answer :  wrong word for func .. should be function

//----------------------

// function double2 (x) {
// return 2 * x;
// }

// Answer function works well but wont do any validtion incase of none number value entered might sh0w error
//this can be fixed if we wnt by using if else with typeof to confirm the entered vlaue of x before * with 2

//------------------------------------

// function double3 (x) {
//   return 2 * x;
//

//   Answr:   }  was not closed   answer close function block with {}

//------------------------------------------------------------------------

// 7;

// Write a function called cube that:
// accept 1 parameter and calculate the cube of this number

// Ex: cube(4)
// => 64

// var value = parseInt(prompt("Enter your number:"));
// function cube(value) {
//   x = Math.pow(value, 3);
//   console.log(`the cube of : ${value} is ${x} `);
//   alert(`the cube of : ${value} is ${x} `);
//   return;
// }

// cube(value);

//---------------------------------------------------------

// 8
// Write a function called multiply that:
// accept 2 parameters and calculate the multiply of these 2 numbers

// Ex: multiply(3,4)
// => 12
// Ex: multiply(5,4)
// => 20

// var x = parseInt(prompt("Enter your first number:"));
// var y = parseInt(prompt("Enter your second number:"));

// function multiThat(x,y) {

//  var  MultiResult= x*y;
//   console.log(`the result of ${x} * ${y} is : ${MultiResult} `);
//   alert(`the result of ${x} * ${y} is : ${MultiResult} `);
//   return
// }

// multiThat(x,y);

//--------------------------------------------------------------------

// 9
// Write a function called canIGetADrivingLicense that:
// accept 1 parameter represent the age
// and if the age greater than or equal to 20 return "yes you can"
// otherwise return "please come back after X years to get one"

// Ex: canIGetADrivingLicense(21)
// => "yes you can"

// Ex: canIGetADrivingLicense(17)
// => "please come back after 3 years to get one"

// Ex: canIGetADrivingLicense(20)
// => "yes you can"

// var name = prompt("Enter your name here:");
// var age = parseInt(prompt("Enter your age here:"));
// function canIGetADrivingLicense(name, age) {
//   if (age>=20) {
//     console.log(name,age);
//     alert(`Hello, ${name} you are ${age} "Yes you can get a driving license." `);
//     return(name,age)
// }

//     else {
//      let remainYears= 20 - age;
//       console.log(name,age);
//       alert(`Hello, ${name} you are ${age} "Sorry, you can't get a driving license."
//         come back after ${remainYears} years`)}
//         return(name,age)
//     }

//     canIGetADrivingLicense(name,age);

//---------------------------------------

// 10
// Write a function called sameLength
// that accepts two strings as arguments,
// and returns true if those strings have the same length, and false otherwise.

// **hint: how we can know string length   Ex: : "tree".length   => 4

// Ex: sameLength("tree","clue")
// => true

// Ex: sameLength("tree","car")
// => false

// var value1 = prompt("Enter your first value  here:");
// var value2 = prompt("Enter your second value  here:");

// function sameLength(value1, value2) {
//   value1 = value1.trim(value1);
//   value2 = value2.trim(value2);
//   if (value1.length === value2.length) {
//     alert(`The vlaue ${value1} is ${value1.length} long and ${value2} is ${value2.length} long,
//   they are equale in length so its : TRUE`);
//   } else if (value1.length !== value2.length) {
//     alert(`The vlaue ${value1} is ${value1.length} long and ${value2} is ${value2.length} long,
//         they are NOT equale in length so its : FALSE`);
//   }
//   return value1, value2;
// }

// sameLength(value1, value2);

//-----------------------------------------------

// 11
// Write a function called largerNubmer
// that accept two numbers as arguments,
// and return the first larger numbers

// Ex: largerNubmer(5,6)
// => 6

// Ex: largerNubmer(5,3)
// => 5

// var num1 = parseFloat(prompt("Enter your first number here:"));
// var num2 = parseFloat(prompt("Enter your 2nd number here:"));

// function largerNubmer(num1, num2) {
//   if (num1 < num2) {
//     var largest = num2;
//   } else {
//     var largest = num1;
//   }
//   alert(`Number one is: ${num1} and Number two is: ${num2},
//     the largest number is : ${largest}`);
//   return num1, num2;
// }

// largerNubmer(num1, num2);

//---------------------------------------------------------

// 12
// Write a function called smallerNubmer
// that accept three numbers as arguments,
// and return the first smaller number

// Ex: smallerNubmer(8,6,7)
// => 6

// Ex: smallerNubmer(5,99,34)
// => 5

// Ex: smallerNubmer(5,99,3)
// => 3

// Ex: smallerNubmer(5,3,3)
// => 3

// var num1 = parseInt(prompt("Enter a first value:"));
// var num2 = parseInt(prompt("Enter   2nd value:"));
// var num3 = parseInt(prompt("Enter   3rd  value:"));

// function smallerNubmer(num1, num2, num3) {
//   if (num1 < num2 && num1 < num3) {
//     alert(`the smallest number is:  ${num1} `);
//   } else if (num2 < num1 && num2 < num3) {
//     alert(`the smallest number is:  ${num2} `);
//   } else if (num3 < num1 && num3 < num2) {
//     alert(`the smallest number is:  ${num3} `);
//   }
// }

// smallerNubmer(num1, num2, num3);

//----------------------------------------------------

// 13
// Write a function called shorterString
// that accept five string as an arguments,
// and return the first shorter string

// Ex: shorterString("air","school","car","by","github")
// => by

// Ex: shorterString("air","tr","car","by","github")
// => tr

// Ex: shorterString("by","tr","car","air","github")
// => by

// Ex: shorterString("air","by","car","school","github")
// => by

// Ex: shorterString("air","tr","by","car","github")
// => by

// Ex: shorterString("air","tr","car","github","by")
// => by

// var myArray = ["air","by","car","school","github"]

// function shorterString (myArray) {
// var samllest =myArray[0];
// for (let i=0; i<myArray.length; i++) {

//   if(myArray[i].length<samllest.length){
//     samllest=myArray[i];
// }
// }
// console.log(samllest);
// return(samllest)
// }
// shorterString(myArray);

//---------------------------------------------

// 14
// Write a function called longerString
// that accept four string as an arguments,
// and return the first longer string

// Ex: longerString("air","school","car","github")
// => school

// Ex: longerString("air","schoo","car","github")
// => github

// try all the cases (change the order of the longestString)

// var myArray = ["air","by","car","school","git"]

// function longerString (myArray) {
// var longer =myArray[0];
// for (let i=0; i<myArray.length; i++) {

//   if(myArray[i].length>longer.length){
//     longer=myArray[i];
// }
// }
// console.log(longer);
// return(longer)
// }
// longerString(myArray);

//-----------------------------------------------------

// 15
// Write a function called isEven
// that accept 1 argument as a number,
// and return true if this number is even
// and false if this number is odd

// Ex: isEven(1)
// => false
// Ex: isEven(2)
// => true

//

// var number = parseInt(prompt("Enter an integer number: "));
// function isEven(number) {
//   if(number % 2 === 0) {
//     alert(`You entered ${number} and its EVEN number`)
//   } else {
//     alert(`You entered ${number} and its an ODD number`)
//   }
//   console.log(number);
//   return(number)
// }

// isEven(number);

//-----------------------------------------------------------------

// 16
// Write a function called is ODD
// that accept 1 argument as a number,
// and return true if this number is Odd
// and false if this number is Even

// Ex: isOdd(4)
// => false
// Ex: isOdd(5)
// => true

// var number = parseInt(prompt("Enter an integer number: "));
// function isOdd(number) {
//   if(number % 2 !== 0) {
//     alert(`You entered ${number} and its ODD number`)
//   } else {
//     alert(`You entered ${number} and its an Even number`)
//   }
//   console.log(number);
//   return(number)
// }

// isOdd(number);

//---------------------------------------------------------

// 17
// Write a function called positive
// that accept 1 argument as a number,
// and return the positive version of the number passed

// Ex: positive(4)
// => 4
// Ex: positive(-5)
// => 5

// var number = parseFloat(prompt("Enter a number: "));

// function Postive(number) {
//     if (number >= 0) {
//         console.log(number);
//         alert(`You entered ${number}, and it's a POSITIVE number.`);
//     } else {
//         let updatedNumber = number * -1;
//         console.log(updatedNumber);
//         alert(`You entered ${number}, and the positive version of your number is: ${updatedNumber}`);
//     }
//     return number;
// }

// Postive(number);

//------------------------------------------------------------
// 18
// Write a function called fullName
// that accept two parameters, firstName and lastName,
// and returns the firstName and lastName concatenated
// together with a space in between.

// Ex: fullName("Adam","McCallen")
// => "Adam McCallen"
// Ex: fullName("Alex", "Mercer")
// => "Alex Mercer"

// var fName = prompt("Enter your first name: ");
// var lName = prompt("Enter your last name: ");

// function fullName (fName,lName) {
// alert(`Your full name is : ${fName} ${lName}`)
// return
// }
// fullName(fName,lName);

//-------------------------------------------------

// 19
// Write a function called average
// that takes five numbers as inputs
// and returns the average of those numbers.

// Ex: average(1,2,3,4,5)
// => 3

// Ex: average(5,7,9,3,5)
// => 5.8

// let n1= 10;
// let n2= 20;
// let n3= 30;
// let n4= 40;
// let n5= 50;

// function average (n1,n2,n3,n4,n5) {
//  let sum=n1+n2+n3+n4+n5;
//  let  avg= sum/5;
//  alert(`The average for oyur numbers is: ${avg}`);
//  return(avg)
// }

// average(n1,n2,n3,n4,n5);

//-----------------------------------------------------

// 20
// Write a function called randomNumber
// that didnt takes any parameter
// and returns a random number between 0-1
// ** hint: you can seacrh using MDN

// Ex: randomNumber()
// => 0.2278

// Ex: randomNumber()
// => 0.475

// var number=""
// function randomNumber() {
//     var number= Math.random(number);
//     alert(`Your randome number is : ${number} `);
//     return(number)
//   }

//   randomNumber(number);

// 21
// Write a function called randomBetweenNumbers
// that takes 2 parameters
// and returns a random number between them
// ** hint: you can seacrh using MDN

// Ex: randomBetweenNumbers(1,8)
// => 7.5412

// Ex: randomBetweenNumbers(3,100)
// => 23

// Answer as below we can generate random intger number using Math.floor wiht Math. random and multiply by the range we want*10  +1 :

// function randomBetweenNumbers () {
//   let randomNumber = Math.floor(Math.random() * 10) + 1;
//   console.log(randomNumber);
//   alert(`Your random number between One and Ten is: ${randomNumber}`);
//   }
//   randomBetweenNumbers();

//----------------------------------------------------

// 22
// Write a function called scoreInUniversty
// that takes 1 parameters
// and returns the alpabet in the unevirsty
// A => 95-100
// B => 85-94
// C => 70-84
// D=> 50-69
// F=> 0-49

// Ex: scoreInUniversty(96)
// => "A"

// Ex: scoreInUniversty(3)
// => "F"

// Ex: scoreInUniversty(71)
// => "C"
// */

// var yourScore = parseFloat(prompt("Please enter your score between 0 - 100 "));

// function GPA(yourScore) {
//   if (0 <=yourScore && yourScore <= 49) {
//     alert(`Your your GPA is : F`);
//   } else if (50 <= yourScore && yourScore <= 69) {
//     alert(`Your your GPA is : D`);
//   } else if (70 <= yourScore && yourScore <= 84) {
//     alert(`Your your GPA is : C`);
//   } else if (85 <= yourScore && yourScore <= 94) {
//     alert(`Your your GPA is : B`);
//   } else if (95 <= yourScore && yourScore <= 100) {
//     alert(`Your your GPA is : A`);
//   }
//   return yourScore;
// }

// GPA(yourScore);


//-------------------------------------------

 
// 23
// Write a function called counter
// that will returns a number bigger
// than the one that returnd before
// and start from 0


// let count = 0; 

// function counter() {
//   for (let i = 0; i < 10; i++) {
//     count++; 
//     console.log(count);   
//     alert(`Your counter value is: ${count}`);
//     return
//   }
//   counter();

// }





// Ex: counter()
// => 1

// Ex: counter()
// => 2

// Ex: counter()
// => 3

 
//--------------------------------------------------------------

/*
24

Write a function called resetCounter
that will reset the previuos function
and return the number before reset and
a string say that the counter reset


// Answer


function createCounter() {
    let count = 0;

    function counter() {
        count++;
        return count;
    }

    function resetCounter() {
        const previousCount = count;
        count = 0; // Reset the counter
        return `${previousCount} and the counter reset now`;
    }

    return { counter, resetCounter };
}

// for example : 

const { counter, resetCounter } = createCounter();

console.log(counter());  // 1
console.log(counter());  // 2
console.log(counter());  //  3
console.log(resetCounter()); 


console.log(counter());  
console.log(counter());  

console.log(resetCounter()); 
console.log(counter());    // 1
























Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: counter()
=> 3

Ex: resetCounter()
=> 3 and the counter reset now

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: resetCounter()
=> 2 and the counter reset now

Ex: counter()
=> 1
*/


