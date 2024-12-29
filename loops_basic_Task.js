// 1- Write a program that prints numbers from 1 to 10 using a for loop.

// for(x=1;x<=10;x++) {
//     console.log(x)
// }

// 2-Write a program that prints the even numbers from 1 to 10 using a for loop.

// for (let y=1;y<=10;y++) {
//     if(y % 2 == 0) {
//     console.log(y)}
// }

// 3- Write a program that prints the odd numbers from 1 to 10 using a while loop.

// let number= 1;
// while(number<=10) {
//     if (number % 2 !== 0) {
//     console.log(number)
// }

// number+=1;
// }

// 4- Write a program that prints the multiplication table of a number entered by the user using a for loop.

// let myNum= prompt("Enter your number here: ");
// let myNum=3;
// for(let z=1;z<=10;z++) {
//     console.log(z + "*" + myNum + "= " +myNum*z)
// }

// 5- Write a program that calculates the sum of numbers from 1 to 100 using a while loop.

// let theNumber = 1;
// let count = 1;
// let sum = 0;

// while (count <= 100) {
//     sum += count;
//     count++;
// }

// console.log(` Sum of numbers from 1 to 100 is: ${sum}`);

// 6- Write a program that calculates the factorial of a number entered by the user using a for loop.

// let num =prompt("Enter your number here");
// let num= 4;
// let i=num-1;
// for (i;i>0;i--) {
//     num*=i;
// }
// console.log(num);

// 7- Write a program that prints the Fibonacci series up to a certain number entered by the user using a while loop.

// let userNumber =  8;
// let num1 = 0;
// let num2 = 1;
// let Fseries = "0, 1"
// for(i = 1; i < userNumber; i += i) {
//     num1 += num2;
//     if (num1 <= userNumber) {Fseries += `, ${num1}`}
//     num2 += num1;
//     if (num2 < userNumber) {Fseries += `, ${num2}`}
// }
// console.log(Fseries)

// 8- Write a program that prints the reverse of the following numbers:
//5 , 10 , 15 , 20
// using a while loop.

// let numbers = [5, 10, 15, 20];

// let index = numbers.length - 1;

// console.log("Reversed Numbers are:");

// while (index >= 0) {
//     console.log(numbers[index]);
//     index--;
// }
