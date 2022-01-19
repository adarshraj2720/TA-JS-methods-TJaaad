let words = [
  'mystery',
  'brother',
  'aviator',
  'crocodile',
  'pearl',
  'orchard',
  'crackpot',
  'rhythm',
];

// - Write a function findLongestWord that takes an array of words and returns the longest word from the array. (Use above array "words" to test it). If there are 2 with the same length, it should return the first occurrence.
function findLongestWord(arr){
 return [...arr].sort((a,b) => a.length -b.length).pop()

};

findLongestWord(words);


words.sort((a,b) => a.length -b.length).pop()
// - Convert the above array "words" into an array of length of word instead of word.

  words.map((word) => word.length);
// - Create a new array that only contains word with atleast one vowel.
let atleatVowel= words.filter((vowel)  =>
{
  if(vowel.includes("a")  || vowel.includes("e") || vowel.includes("i") || vowel.includes("o") || vowel.includes("u")){
    return vowel;
  }
}
);
// - Find the index of the word "rhythm"
words.indexOf("rhythm");
// - Create a new array that contians words not starting with vowel.
let startVowel= words.filter((vowel)  =>
{
  if(!vowel.startsWith("a")  || !vowel.startsWith("e") || !vowel.startsWith("i") || !vowel.startsWith("o") || !vowel.startsWith("u")){
    return vowel;
  }
}
);
// - Create a new array that contianse words not ending with vowel
let endVowel= words.filter((vowel)  =>
{
  if(!vowel.endsWith("a")  && !vowel.endsWith("e") && !vowel.endsWith("i") && !vowel.endsWith("o") && !vowel.endsWith("u")){
    return vowel;
  }
}
);
let numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

// - Create a sumArray function that takes an array of number as a parameter, and calculate the sum of all its numbers
numbers.reduce((acc ,cv) =>{
  acc = acc + cv;
  return acc;
},0)
// - Make a new array that contains number multiplied by 3 like [6, 18, 27 ...]
numbers.map((num) => num*3);
// - Create a new array that contains only even numbers
let even= numbers.filter((num) => num%2===0)
// - Create  a new array that contains only odd numbers.
let odd= numbers.filter((num) => num%2!==0)
// - Create a new array that should have true for even number and false for odd numbers.
numbers.map((num) =>{
  if(num % 2 === 0){
     return true;
  }else{
    return false;
  }
})
// - Sort the above number in assending order.
function ascending(a,b){
  return a-b;

}
numbers.sort(ascending);
// - Does sort mutate the original array?
    //yes
// - Find the sum of the numbers in the array.
numbers.reduce((acc ,cv) =>{
  acc = acc + cv ;
   return acc ;

},0)
//- Write a function averageNumbers that receives an array of numbers and calculate the average of the numbers
function averageNumbers(arr){
  let avg=numbers.reduce((acc,cv) =>{
    acc = acc + cv
    return acc
  },0)/arr.length
}

let strings = [
  'seat',
  'correspond',
  'linen',
  'motif',
  'hole',
  'smell',
  'smart',
  'chaos',
  'fuel',
  'palace',
];

// - Write a function averageWordLength that receives an array of words2 and calculate the average length of the words.
function averageWordLength(words){
  return( words.map((w) => w.length)
  .reduce((acc,cv) =>{
    return acc+cv;
  },0))/words.length
}