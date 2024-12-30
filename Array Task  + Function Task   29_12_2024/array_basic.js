// 1-Write a function to find the largest element in an array.

// var myArray = [1,2,3,4,5,6,80];

// function largElement(myArray) {
// console.log(Math.max(...myArray));
// return(myArray);
// }

// largElement(myArray);

//------------------------------------------------

// function largestNum(myArray) {
// var largest = myArray[0];
// for(let i =0; i< myArray.length; i++) {
// if (myArray[i]>largest) {
//     largest = myArray[i];
// }
// }
// return(largest)

// }
// console.log(`your largets number is :`, largestNum(myArray));

//----------------------------------------------------

// 2-Write a function to find the smallest element in an array.

// var myArray = [10, 20, 30, 40, 50, 60, 70, 80];
// function TheSmallest(myArray) {
//   var small = myArray[0];

//   for (let i = 0; i < myArray.length; i++) {
//     if (myArray[i] < small) {
//       small = myArray[i];
//       console.log(small);
//     }
//   }
//   return small;
// }

// console.log(`your smallest numbrt is: `, TheSmallest(myArray));

// 3-Write a function to find the sum of all elements in an array.

// var myArray = [10, 20, 30, 40, 50];

// function summation (myArray) {
// let sum = 0;
// for (let i=0; i<myArray.length; i++){
//     sum = sum + myArray[i];
// }
// return(sum);
// }

// console.log(`Sum of all numbers in the array is : `, summation(myArray));

// 4-Write a function to find the average of all elements in an array.

// var myArray = [10, 20, 30, 40, 50];

// function theAverage(){
// let  Avg = 0;
// let  sum=0;
//     for(let i=0; i<myArray.length; i++){
// sum+=myArray[i];
//     }

// Avg= (sum/myArray.length);
// return(Avg);
// }

// console.log(`The average is : ` , theAverage(myArray));

// 5-Write a function to find the median of all elements in an array.

//--------------------------- my notes down --------------------------------------
// Steps to Calculate Median:
// Sort the Array:

// The first step is to sort the array in ascending order using the sort() method.
// Check the Length of the Array:

// If the array has an odd number of elements, the median is the middle element.
// If the array has an even number of elements, the median is the average of the two middle elements.

//----------------------- my notes up ---------------------------------------------------------

// var myArray = [50, 20, 40, 30, 10, 70];

// // Sort array in ascending order
// myArray.sort((a, b) => a - b);

// console.log(myArray);

// // Check the Length of the Array .. is it odd  or even ? so ...

// let ArryCounter = myArray.length;
// for (let i = 0; i < myArray.length; i++) {
//   var sum = 0;
//   if (ArryCounter % 2 === 0) {
//     var sum = myArray[0] + myArray[myArray.length - 1];
//     evenMedian = (arr.indexof(sum / 2) - arr.indexof(sum / 2 - 1)) / 2;

//     console.log(sum);
//     console.log(`the midian is : `, evenMedian);
//   } else {
//   }
// }

// 6-Write a function to remove all duplicates from an array.

// let myArray = [1, 1, 2, 2, 3, 4, 4, 5, 5, 6, 6];

// function removeDup(myArray) {
//   return [...new Set(myArray)];
// }
// console.log(removeDup(myArray));

// 7-Write a function to sort an array in ascending order.

// var myArray = [50, 20, 40, 30, 10, 70];

// function SortArryAscending (myArray) {
//     myArray.sort((a, b) => a - b);
//     console.log(myArray);
//     return
//   }
//   SortArryAscending(myArray);  

// 8-Write a function to sort an array in descending order.


// var myArray = [50, 20, 40, 30, 10, 70];

// function SortArryDecending (myArray) {

//     myArray.sort((a, b) => b - a);
//     console.log(myArray);}

//     SortArryDecending();


// 9-Write a function to shuffle the elements of an array randomly.

// var myArray = [50, 20, 40, 30, 10, 70];

// shuffle(myArray);

// function shuffle(myArray) {
//   let shuffledArry = [];
//   let usedIndex = [];

//   let i = 0;
//   while (i < myArray.length) {
//     let randomNumber = Math.floor(Math.random() * myArray.length);
//     if (!usedIndex.includes(randomNumber)) {
//       shuffledArry.push(myArray[randomNumber]);
//       usedIndex.push(randomNumber);
//       i++;
//     }
//   }
//   console.log(shuffledArry);
//   return shuffledArry;
// }

// https://www.youtube.com/watch?v=Gfx9UV2tpLg   referance for last question
