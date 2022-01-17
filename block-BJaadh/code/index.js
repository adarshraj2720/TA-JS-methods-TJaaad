// Use the below two arrays and practice array methods
var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6, 9];
var strings = ['This', 'is', 'a', 'collection', 'of', 'words'];

/*
NOTE:
While using methods like push, pop, sort etc it mutates the original array.

Clone the array before using sort method: [...arr]

*/

// - Find the index of `101` in numbers
numbers.indexOf(101)


// - Find the last index of `9` in numbers
numbers.lastIndexOf(9);
// - Convert value of strings array into a sentance like "This is a collection of words"
strings.join(' ');
// - Add two new words in the strings array "called" and "sentance"
strings.push("called","sentence");
// - Again convert the updated array (strings) into sentance like "This is a collection of words called sentance"
strings.join(' ');
// - Remove the first word in the array (strings)
strings.shift()
// - Find all the words that contain 'is' use string method 'includes'
strings.includes("is");
// - Find all the words that contain 'is' use string method 'indexOf'
strings.indexOf("is")
// - Check if all the numbers in numbers array are divisible by three use array method (every)
numbers.every(function(number){
 return number%3===0;
});
// -  Sort Array from smallest to largest

numbers.sort((a,b) => a - b)

// - Remove the last word in strings
strings.pop()
// - Find largest number in numbers
let num = 0;

numbers.forEach((number)=>{
     if ( num < number ){
        num=number;
     }  
})
console.log(num)
// - Find longest string in strings
strings.sort((a,b) => b.length - a.length)[0]
// - Find all the even numbers
numbers.filter(function(number){
return number%2===0;


})
// - Find all the odd numbers
numbers.filter(function(number){
  return number%2!==0;
  
  
  })

// - Place a new word at the start of the array use (unshift)
strings.unshift("Adarsh");
// - Make a subset of numbers array [18,9,7,11]
numbers.slice(3,11);
// - Make a subset of strings array ['a','collection']
strings.slice(2,3)
// - Replace 12 & 18 with 1221 and 1881
numbers.splice(1,1,1221);
numbers.splice(3,1,1881);
// - Replace words in strings array with the length of the word
let wordsLength = strings.map(word => word.length );
console.log(wordsLength);
// - Find the sum of the length of words using above question
let sum = 0;
wordsLength.forEach((word) => sum += word );
console.log(sum);


// - Customers Array
var customers = [
  { firstname: 'Joe', lastname: 'Blogs' },
  { firstname: 'John', lastname: 'Smith' },
  { firstname: 'Dave', lastname: 'Jones' },
  { firstname: 'Jack', lastname: 'White' },
];
// - Find all customers whose firstname starts with 'J'
customers.filter((start) => start.firstname[0] === 'J');
// - Create new array with only first name

let firstNames = customers.map((name) => name.firstname );
console.log(firstNames);
// - Create new array with all the full names (ex: "Joe Blogs")
let fullNames = customers.map((name) => name.firstname + " "+ name.lastname);
console.log(fullNames);
// - Sort the array created above alphabetically
 customers.sort((a,b) => b-a);
// - Create a new array that contains only user who has at least one vowel in the firstname.
let vowelName = customers.filter((vowel) => {
  if ( vowel.firstname.includes('a') || vowel.firstname.includes('e') || vowel.firstname.includes('i') || vowel.firstname.includes('i') || vowel.firstname.includes('o') || vowel.firstname.includes('u') ){
    return true ;
  } else{
    return false;
  }
})