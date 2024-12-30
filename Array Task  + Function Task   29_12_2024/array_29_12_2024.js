// console.log('Here is : ', 'array')

/*
1
Correct the syntax error
 [ 1,7  9  45, ] 

[1,7,9,4,5]       corrected 

 ["Str" "alex","moh"       corrected :  ["Str" "alex","moh"]

 'the','fox' 'over' lazy, 'dog',  ]        corrected :  ['the','fox','over',lazy','dog']

*/

/*
2
What the index of "Banana","Tomato"
var fruits=["Tomato","Banana","Watermelon"]

Banana   indexOf[1]
Tomato   indexOf[0]


*/

/*
3
Create an array represents your:
1- Favorite Food (5)
2- Favorite Sport (3)
3- Favorite Movie (4)
*/

//  Foods
// let favoriteFood = ["Pizza", "Zinger", "Shawerma", "Burger", "Ice Cream"];

//  Sports
// let favoriteSport = ["Football", "Basketball", "Tennis"];

//  Movies
// let favoriteMovie = ["Inception", "The Pursuit of Happiness", "Interstellar", "The Joker"];

// console.log("Favorite Food:", favoriteFood);
// console.log("Favorite Sport:", favoriteSport);
// console.log("Favorite Movie:", favoriteMovie);

/*
4
Create a function called firstOfArray
that take an array as a parameter
and return the first element in an array

Ex: firstOfArray([1,4,5]) => 1
Ex: firstOfArray(["t","u","g","x"]) => "t"
*/

// var arr = [1,4,5];

// function firstOfArray (...arr)   //      * the " ... "  this is called the  rest  parameter   so I can note that   *   > my notes
// {
//   return arr[0];
// }

// console.log(`your first element : ${firstOfArray(...arr)}`);

/*
5
Create a function called lastOfArray
that take an array as a parameter
and return the first element in an array

Ex: lastOfArray([1,4,5]) => 5
Ex: lastOfArray(["t","u","g","x"]) => "x"
*/

// var arr = [1,4,5];

// function lastOfArray (...arr) {

//     return arr[arr.length -1];      /// we can use method to get to the last index   >>  momken n3ml haik 7atta no9l lal index at the end by using length as the lenght dayman a8al beWa7ad
// }

// console.log(`your last  element : ${lastOfArray(...arr)}`)

/*

6
Using console make this array to be like this one (push, unshift, shift, pop) 

My notes on this question : Shift / unshift for first element    //   pop  and push for the last  element in arry 


var array = [0,5,7,9]
=> [1,3,4,6,8,9,10]
*/

// var array = [0,5,7,9];           // this is the orginal array we used

// console.log(`the original array is: ${array}`);

// array.shift();
// console.log(`The orginal array after we take out first value by using Shift is:  ${array}`);

// array.shift();   // take first vlaue
// array.shift();     // take first vlaue

// console.log(`the array fater we made 2 Shifts : ${array}`);

// array.unshift(1,3,4,6,8);

// console.log(`the array fater we made  Unshifts adding new vlaues to the array at the start : ${array}`);

// array.push(10);

// console.log(`the array fater push 10 to the end using Push  : ${array}`);

// we can use arry.pop to take out the last value but we dindt used here as we get the final array nedded

//------------------------------------------------------------------------------------------------------------

// 7
// Using the console try to figure out what the thing thats (push, unshift, shift, pop) return to you

// var array = [5,9,-7,3.5]

// console.log(`the original array is: ${array}`);

// array.shift();
// console.log(`The orginal array after we take out first value by using Shift is:  ${array}`);

// array.shift();   // take first vlaue
// array.shift();     // take first vlaue

// console.log(`the array fater we made 2 Shifts : ${array}`);

// array.unshift(1,2,3);

// console.log(`the array fater we made  Unshifts adding new vlaues to the array at the start : ${array}`);

// array.push(99);

// console.log(`the array fater push 10 to the end using Push  : ${array}`);

// 8

// Create a function called middleOfArray
// that take an array as a parameter
// and return the middle element in an array if it is have an odd elemnets
// and return the two middle elemnt in an array if it is have an even elemnets

// Ex: middleOfArray([1,4,5]) => 4
// Ex: middleOfArray(["t","u","g","x"]) =>"u and g"

//  Step 1 : //  we will check  the arry if its Odd or even

// var array = [1, 4, 5];

// var SortedArray = array.sort(); ///  then  sort array first bfore entering
// console.log(SortedArray);

// function middleOfArray(SortedArray) {
//   let arrLength = SortedArray.length;
//   if (arrLength % 2 !== 0) {
//     console.log("This is ODD array ");
//     theMedian = SortedArray[Math.floor(arrLength / 2)];
//     console.log(`the median is : ${theMedian}`);
//   } else {
//     console.log("This is Even array ");
//     let midNum1 = SortedArray[arrLength / 2];
//     let midNum2 = SortedArray[midNum1 - 1];

//     theMedian = (midNum1 + midNum2) / 2;
//     console.log(`the median is : ${theMedian}`);
//   }
// }

// middleOfArray(SortedArray);

// 9

// Using assignment operator (=)
// make the animals array have these animals
// var animals = ['cat', 'ele', 'bird']
// animals; => ['zebra', 'elephant']
// ** hint: animals[0]=something

// var animals = ["cat", "ele", "bird"];

// console.log(`orignal array is : ${animals}`);

// animals.pop(animals);

// console.log(` array after taking out the last element using .POP : ${animals}`);

// animals[0] = "zebra";
// animals[1] = "elephant";

// console.log(` the new array after changing elements is : ${animals} `);

// var nums= [1,2,3,8,9]
// nums => [5,-22,3.5,44,98,44]
// */

//-----------------------------------------------------------------------------

// 10
// Create a function called indexOfArray
// that accept an array and index
// and return what this array have in this index

// var nums= [1,2,3,8,9]
// Ex: indexOfArray(nums,3) => 8
// Ex: indexOfArray(nums,1) => 2
// Ex: indexOfArray(nums,4) => 9

// **try more cases by your self

// index 0     vlue 1

// let YourIndex = 3;
// var nums = [1, 2, 3, 8, 9];

// function indexOfArray(nums) {
//   for (let i = 0; i < nums.length; i++) {
//     var value = nums[i];
//     if (YourIndex === i) {
//       console.log(
//         `the index is [${i}] and the value for this index is : ${value} `
//       );
//     }
//   }
// }

// indexOfArray(nums);

//--------------------------------------------------------------

// 11
// Create a function called arrayExceptLast
// that accept an array
// and return the entire array except the last elemnt
// ** hint: search about the function that will cut the array on MDN

// var nums= [1,2,3,8,9]
// Ex: arrayExceptLast(nums) =>  [1,2,3,8]

// **try more cases by your self
// */

// let userInput = prompt("Enter elements separated by commas:");   // #1 To give the uswe user the chance to enter elements separated by commas
//  let userArray = userInput.split(",");                          // #2  Convert the input string into an array
// userArray = userArray.map(element => element.trim());          // #3   Optionally trim any whitespace from each element
// console.log("Your array:", userArray);                        // 4#  Display the array

// var nums = [1, 2, 3, 8, 9];
// function arrayExceptLast(nums) {

// console.log(`your orginal array is : ${nums}`);
// nums.pop();
// console.log(`your new  array is: ${nums}`);

// }
// arrayExceptLast(nums);

//-------------------------------------

// 12
// Create a function called addToEnd
// that accept an array and value
// and return the entire array with add this value to the end of this array

// var nums= [1,2,3,8,9]
// Ex: addToEnd(nums,55) =>  [1,2,3,8,55]

// var nums = [1, 2, 3, 8, 9];
// let value = 10;

// function addToEnd(nums, value) {
//   console.log(`your orginal array is : ${nums}`);
//   nums.push(10);

//   console.log(`your new  array after addtion is: ${nums}`);
// }
// addToEnd(nums);

// //------ // advance solution entering vlaues and arry by user

// let userInput = prompt("Enter elements separated by commas:");   // #1 Prompt user for input
// let userArray = userInput.split(",");                           // #2 Convert the input string into an array
// userArray = userArray.map(element => element.trim());          // #3 Trim whitespace from each element

// console.log("Your original array:", userArray);               // Display the original array in the console
// alert(`Your array: ${userArray}`);                           // Display the original array in an alert

// let addNum = parseFloat(prompt("Enter the value you want to add:"));    // Prompt the user to enter a number to add to the end of the array

// function addToEnd(array, value) {                                   // Function to add the number to the end of the array

//   console.log(`Your original array is: ${array}`);
//   array.push(value);                                             // Add the value to the end of the array
//   console.log(`Your new array after addition is: ${array}`);
// }

// addToEnd(userArray, addNum);                          // Call the function with the correct arguments

// alert(`Your updated array: ${userArray}`);           // Display the updated array in an alert

//=====================================================================================///

// all the exercises below should solved 2 times: 1- for loop 2- while lopp

// 13                                           ///// from here q 13 we will start using While and for both must used in each question /////
// Create a function called sumArray
// that accept an array
// and return the summation of all elemnt in this array

// var nums= [1,2,3,8,9]
// Ex: sumArray(nums) => 23

// ** solve it one time uing for loop and another using while loop
// **try more cases by your self

//...  solved with While  .... //// 

// var nums = [1, 2, 3, 8, 9];

// function sumArray(nums) {
//   let i = 0;
//   let sum = 0;

//   while (i < nums.length) {
//     sum += nums[i];
//     i++;
//   }

//   return sum;
// }

// let totalSum = sumArray(nums);

// console.log(`Your array sum = ${totalSum}`);


// //---- solved with   For    ------///

// var nums = [1, 2, 3, 8, 9];

// function sumArray(nums) {
//   let sum = 0;

//   for (let i = 0; i < nums.length; i++) {
//     sum += nums[i];
//   }

//   return sum;
// }

// let totalSum = sumArray(nums);

// console.log(`Your array sum = ${totalSum}`);

// 14
// Create a function called minInArray
// that accept an array
// and return the minimum value inside this array

// var nums= [1,2,3,8,9]
// Ex: minInArray(nums) => 1

// ** solve it one time using for loop and another using while loop
// **try more cases by your self
// */


//  ------ solved by  while ----- 

// var nums = [1, 2, 3, 8, 9];

// function minInArray(nums) {
//   let i = 0;  
//   let small = nums[0];  

//   while (i < nums.length) {
//       if (nums[i] < small) {
//           small = nums[i];  
//       }
//       i++;  
//   }

//   return small;  
// }

// console.log("Minimum value using while loop:", minInArray(nums)); 

///------------------------------------ next solved with Foor loop ---------- 


// var nums = [1, 2, 3, 8, 9];

// function minInArray(nums) {
    
//   let small = nums[0];  

//   for (let i = 0;i < nums.length ; i++) {
//       if (nums[i] < small) {
//           small = nums[i];  
//       }
      
//   }

//   return small;  
// }

// console.log("Minimum value using For loop:", minInArray(nums)); 


//----------------------    




/*
15
Create a function called removeFromArray
that accept an array and elemnt to remove
and return the array after remove this elemnt from it

var nums= [1,2,3,8,9]
Ex: minInArray(nums,8) => [1,2,3,9]

** solve it one time using for loop 

function removeFromArrayUsingFor(array, elementToRemove) {
    let resultArray = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] !== elementToRemove) {
            resultArray.push(array[i]);
        }
    }
    return resultArray;
}

// Example usage:
var nums = [1, 2, 3, 8, 9];
console.log(removeFromArrayUsingFor(nums, 8)); // Output: [1, 2, 3, 9]




//--------------------  using while loop

function removeFromArrayUsingWhile(array, elementToRemove) {
    let i = 0;
    while (i < array.length) {
        if (array[i] === elementToRemove) {
            array.splice(i, 1); // Remove the element
        } else {
            i++; // Only increment if no removal
        }
    }
    return array;
}

// Example usage:
var nums = [1, 2, 3, 8, 9];
console.log(removeFromArrayUsingWhile(nums, 8)); // Output: [1, 2, 3, 9]




**try more cases by your self
*/

/*
16
Create a function called oddArray
that accept an array
and return an array have only the odd elemnts

var nums= [1,2,3,8,9]
Ex: oddArray(nums) => [1,3,9]

** solve it one time using for loop 

function oddArrayUsingFor(array) {
    let oddNumbers = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 !== 0) {
            oddNumbers.push(array[i]); // Add odd numbers to the result array
        }
    }
    return oddNumbers;
}

// Example usage:
var nums = [1, 2, 3, 8, 9];
console.log(oddArrayUsingFor(nums)); // Output: [1, 3, 9]





///--------------------------another using while loop

function oddArrayUsingWhile(array) {
    let oddNumbers = [];
    let i = 0;
    while (i < array.length) {
        if (array[i] % 2 !== 0) {
            oddNumbers.push(array[i]); // Add odd numbers to the result array
        }
        i++;
    }
    return oddNumbers;
}

// Example usage:
var nums = [1, 2, 3, 8, 9];
console.log(oddArrayUsingWhile(nums)); // Output: [1, 3, 9]


**try more cases by your self
*/

/*
17
create a function called aveArray
that accept an array
and return the average of the numbers inside this array

var nums= [1,2,3,8,9]
Ex: aveArray(nums) => 4.6
Create
var nums2= [1,2,3,8,9,77]
Ex: aveArray(nums) => 16.6

*****  using for loop ****

function aveArrayUsingFor(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i]; // Add each element to the sum
    }
    return sum / array.length; // Calculate the average
}

// Example usage:
var nums = [1, 2, 3, 8, 9];
console.log(aveArrayUsingFor(nums)); // Output: 4.6

var nums2 = [1, 2, 3, 8, 9, 77];
console.log(aveArrayUsingFor(nums2)); // Output: 16.6



**  using while loop ***

function aveArrayUsingWhile(array) {
    let sum = 0;
    let i = 0;
    while (i < array.length) {
        sum += array[i]; // Add each element to the sum
        i++; // Move to the next element
    }
    return sum / array.length; // Calculate the average
}

// Example usage:
var nums = [1, 2, 3, 8, 9];
console.log(aveArrayUsingWhile(nums)); // Output: 4.6

var nums2 = [1, 2, 3, 8, 9, 77];
console.log(aveArrayUsingWhile(nums2)); // Output: 16.6



**try more cases by your self
*/

/*
18
Create a function called shorterInArray
that accept an array of strings
and return the shortest string inside this array (first)

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: shorterInArray(strings) => "alex"

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

/*
19
Create a function called repeatChar
that accept a string and char
and return the times that this char repeat inside this string

var string= "alex mercer madrasa rashed2 emad hala"
Ex: repeatChar(string,"a") => 6
Ex: repeatChar(string,"z") => 0

** solve it one time using for loop and 

function repeatCharUsingFor(string, char) {
    let count = 0; // Initialize counter
    for (let i = 0; i < string.length; i++) {
        if (string[i] === char) {
            count++; // Increment counter if char matches
        }
    }
    return count;
}

// Example usage:
var string = "alex mercer madrasa rashed2 emad hala";
console.log(repeatCharUsingFor(string, "a")); // Output: 6
console.log(repeatCharUsingFor(string, "z")); // Output: 0




using while loop
**try more cases by your self


function repeatCharUsingWhile(string, char) {
    let count = 0; // Initialize counter
    let i = 0; // Initialize index
    while (i < string.length) {
        if (string[i] === char) {
            count++; // Increment counter if char matches
        }
        i++; // Move to the next character
    }
    return count;
}

// Example usage:
var string = "alex mercer madrasa rashed2 emad hala";
console.log(repeatCharUsingWhile(string, "a")); // Output: 6
console.log(repeatCharUsingWhile(string, "z")); // Output: 0






20
Create a function called evenIndexOddLength
that accept an array of strings
and return a new array that have the string with odd length in even index

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: evenIndexOddLength(strings) => ["madrasa"]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

/*
21
Create a function called powerElementIndex
that accept an array of number
and return a new array that have the elemnt power by the index of it self

var nums= [44, 5, 4, 3, 2, 10]
Ex: powerElementIndex(nums) => [0, 5, 16, 27, 16, 100000]


        var nums= [44, 5, 4, 3, 2, 10]
        Ex: powerElementIndex(nums) => [0, 5, 16, 27, 16, 100000]

        Solve it one time using for loop and another using while loop
        try more cases by your self
        /

      // *****  For loop *****

      function powerElementIndex(arr){
        let newArr = [];
        for (let i = 0 ; i < arr.length ; i++){
          newArr.push(Math.pow(arr[i], i))
        }
        return newArr;
      }

      var nums= [44, 5, 4, 3, 2, 10]
      console.log(powerElementIndex(nums))

      //  ******  While loop ********** /// 
      //
      //  function powerElementIndex(arr){
      //   let newArr = [];
      //   let i = 0 ;
      //   while (i < arr.length){
      //     newArr.push(Math.pow(arr[i], i));
      //     i++;
      //   }
      //   return newArr;
      // }

      // var nums= [44, 5, 4, 3, 2, 10]
      // console.log(powerElementIndex(nums))



**try more cases by your self
*/




/*
    //----  Q 22
Create a function called evenNumberEvenIndex
that accept an array of nums
and return a new array that have the even number in even index

var nums= [5,2,2,1,8,66,55,77,34,9,55,1]
Ex: evenNumberEvenIndex(nums) => [2,8,34]


**----------------  solve it one time using While loop  -------------------


function repeatChar(string, char) {
    let count = 0;  
    let i = 0;  
    while (i < string.length) {
        if (string[i] === char) {
            count++;  
        }
        i++;  
    }
    return count;
}

Example :
var string = "alex mercer madrasa rashed2 emad hala";
console.log(repeatChar(string, "a"));     
console.log(repeatChar(string, "z"));     


///------------------- using For loop -----------------------

var nums = [5, 2, 2, 1, 8, 66, 55, 77, 34, 9, 55, 1];

function evenNumberEvenIndex(array) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        if (i % 2 === 0 && array[i] % 2 === 0) {
            result.push(array[i]);  
        }
    }
    return result;
}
console.log(evenNumberEvenIndex(nums));  


