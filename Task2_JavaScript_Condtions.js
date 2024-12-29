// 1- Write a program to declare two numbers. If both numbers are greater than 10,
//print "Both numbers are greater than 10". Otherwise, print "At least one number is not greater than 10".

let number1 = 10;
let number2 = 6;

if (number1 > 10 && number2 > 10) {
  console.log("Both numbers are greater than 10");
} else {
  console.log("At least one number is not greater than 10");
}

// 2- Write a program to declare a username and a password.
//If both the username and password are correct, print "Access granted". Otherwise, print "Access denied".

let username = "Husam";
let pwd = "Aa@12345";

// var Name = prompt("Enter your user name : ");
// var password = prompt("Enter your pasword :");

if (username == "Husam" && pwd == "Aa@12345") {
  console.log("Access granted");
} else {
  console.log("Access denied");
}

// 3- Write a program to declare a number. If the number is between 10 and 20 (inclusive), print "The number is between 10 and 20".
// Otherwise, print "The number is not between 10 and 20".

let MyNmber = 11;

if (MyNmber > 10 && MyNmber < 20) {
  console.log("The number is between 10 and 20");
} else {
  console.log("The number is not between 10 and 20");
}

// 4- Write a program that to declare age and whether they have a driver's license (yes or no).
//If the user is 18 or older and has a driver's license, print "You can drive". Otherwise, print "You cannot drive".

var age = 50;
let isLicense = false;

if (age >= 18 && isLicense) {
  console.log("You can drive");
} else {
  console.log("You cannot drive");
}

// 5- Write a program to declare a number.
//If the number is greater than 10 or less than 0, print "Invalid number". Otherwise, print "Valid number".

let theNumber = 11;

if (theNumber > 10 || theNumber < 0) {
  console.log("invalid number");
} else {
  console.log("Valid number");
}

// 6- Write a program to declare a number.
//If the number is between 5 and 10 (inclusive) or between 20 and 25 (inclusive), print "The number is valid".
//Otherwise, print "The number is not valid".

a_Number = 0;

if ((a_Number >= 5 && a_Number <= 10) || (a_Number >= 20 && a_Number <= 25)) {
  console.log("The number is valid ");
} else {
  console.log("The number is not valid");
}

// 7- to declare a password. If the password is "secret" or "password", print "Access granted".
//Otherwise, print "Access denied".

let thePassword = "funny";

if (thePassword === "password" || thePassword === "secret") {
  console.log("Access granted");
} else {
  console.log("Access denied");
}

// let passwords = ["secret", "password"];
// let pass = "heyyy" // prompt("Enter your password: ")

// if (passwords.includes(pass)) {
//     console.log("Access granted")
// } else {
//     console.log("Access denied")
// }

// 8- Write a program to declare a number. If the number is between 0 and 100 (inclusive) and is even,
//print "The number is even and between 0 and 100". Otherwise, print "The number is not even and/or not between 0 and 100".

let Num = 5;

if (Num >= 0 && Num <= 100 && Num % 2 == 0) {
  console.log("The number is even and between 0 and 100");
} else {
  console.log("The number is NOT even and/or NOT between 0 and 100");
}

// 9- Write a program to declare two numbers. If either number is negative, print "At least one number is negative".
//Otherwise, print "Both numbers are positive".

let theFirstNum = 5;
let theSecondNum = 3;

if (theFirstNum < 0 || theSecondNum < 0) {
  console.log("At least one number is negative");
} else {
  console.log("Both numbers are positive");
}

// 10- Write a program to declare age and whether they are a student (yes or no).
// If the user is under 18 or is a student, print "You qualify for a discount". Otherwise, print "You do not qualify for a discount".

let theAge = 20;
let isStudent = Boolean(true);

if (theAge < 18 || isStudent) {
  console.log("You qualify for a discount");
} else {
  console.log("You do not qualify for a discount");
}
