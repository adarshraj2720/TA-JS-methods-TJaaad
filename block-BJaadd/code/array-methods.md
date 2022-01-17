Watch this video to understand what to do in this exercise block [link](https://www.youtube.com/watch?v=zGpplZj4zY0&feature=youtu.be)

## Getting To Know Array Methods

Go to this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) and look for the name of method to learn about it.

**Write in your own way of understanding (don't copy paste)**

Only if you are done with step 1 you should go ahead.

1. Practice it by yourself in console (2-3 times to understand)
2. Data types of parameters
3. Return value type
4. Write three examples
5. In your words what this method does.
6. Does it mutate the original value or not (check https://doesitmutate.xyz)

Example:

1. `concat`

   - Parameter: n (any) number of values (number, string, boolean, array, null, undefined, object and function etc)
   - Return: a single Array consisting of by all the values passed as parameters in the same order.
   - Example:
     ```js
     let numbers = [1, 2, 3];
     numbers.concat(4); //[1,2,3,4]
     let sentanceArray = 'A quick brown fox jumped over a lazy'.split(' ');
     sentanceArray.concat('dog').join(' '); //"A quick brown fox jumped over a lazy dog"
     let colors = ['red', 'green', 'blue'];
     colors.concat('black', 'red', 21, true); // ['red','green','blue','black', 'red', 21, true]
     ```
   - `concat` accepts n number of values and returns one array with all the values in same order. It does not change the original array.
   - No it does not mutate the original array

2. `join`
    - parameter: seprator -seprator to be used and default is , and use any data type
    - return:-string
    -example:
    ```js
  const fruits = ["Banana", "Orange", "Apple", "Mango"];
  fruits.join()//'Banana,Orange,Apple,Mango'
  fruits.join('8')//'Banana8Orange8Apple8Mango'
  fruits.join(' ')//'Banana Orange Apple Mango'
    ```
    `join`- it join the all array value.
    mutate-no

3. `flat`
    - parameter:it accept parameter number data type
    - return: array
    -example:
    ```js
    const arr1 = [0, 1, 2, [[[3, 4]]]];
    arr1.flat(1)//(4) [0, 1, 2, Array(1)]
    arr1.flat(3)//(5) [0, 1, 2, 3, 4]
   arr1.flat(Infinity)//(5) [0, 1, 2, 3, 4]

    ```
    mutate-no
    `flat`- it claer the layer and return in one array form.
4. `push`
    - parameter: it accept one or more parameter that is any type of data.
    - return: number
    -example:
    ```js
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
        fruits.push("Kiwi");//5
        fruits.push(5)//5
        let a=[5];
       a.push("five")//2
       a.push("")//3
    ```
    mutate-yes
    `push`- it add a value in the last of array
5. `indexOf`
    - parameter: it accept parameter  1st is string and 2nd is number where from start
    - return: number
    -example:
    ```js
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    fruits.indexOf("Mango")//3
    fruits.indexOf("Orange",2)//-1
    ```
    mutate-no
    `indexof`- it gives the index of specific value.
6. `lastIndexOf`
    - parameter:it accept parameter string 
    - return:number
    -example:
    ```js
      const animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];
      animals.lastIndexOf('Dodo')//3
      animals.lastIndexOf('Tiger')//1
    ```
    mutate- no
    `lastIndexOf`- it gives the last index of specific value
7. `includes`
    - parameter:it accept parameter 1st is string value and is index value where from start the searching
    - return: boolean data type
    -example:
    ```js
    const pets = ['cat', 'dog', 'bat'];
    pets.includes('cat')//true
    pets.includes('at')//false
    pets.includes('cat',2)//false

    ```
    mutate-no
    `inclues`- it gives true and false value from searching of specific value
8. `reverse`
    - parameter:no
    - return: array
    -example:
    ```js
      const fruits = ["Banana", "Orange", "Apple", "Mango"];
      fruits.reverse()//(4) ['Mango', 'Apple', 'Orange', 'Banana']
      let number=[5,10,15,20]
      number.reverse()//(4) [20, 15, 10, 5]
    ```
    mutate-yes
       `reverse` -it reverse the full array value.
9. `every`
    - parameter:it accept function  ,current value,index,arr
    - return:boolean
    -example:
    ```js
    const ages = [32, 33, 16, 40];

      ages.every(checkAge)

      function checkAge(age) {
        return age > 18;
        }//false

         function checkAge(age) {
        return age > 10;
        }//true

    ```
    mutate-no
    `every`- it checks every elements then gives the result in true and false.
10. `shift`
    - parameter:no parameter
    - return:value
    -example:
    ```js
      const fruits = ["Banana", "Orange", "Apple", "Mango"];
      fruits.shift()//Banana
       const ages = [32, 33, 16, 40];
       ages.shift()//32
    ```
    mutate-yes
    `shift`- it removes the first value from the array
11. `splice`
    - parameter: it accept 1st index start  2nd to limit where removed , string
    - return: array
    -example:
    ```js
      const fruits = ["Banana", "Orange", "Apple", "Mango"];
      fruits.splice(2);//(2) ['Apple', 'Mango']
      fruits.splice(3);//['Mango']
      fruits.splice(2, 0, "Lemon", "Kiwi");//[]
    ```
    mutate-yes
    `splice`-  it removes the element and also add in the element
12. `find`
    - parameter:it accepts  current value ,index,arr
    - return: value
    -example:
    ```js
      const ages = [3, 10, 18, 20];

        function checkAge(age) {
          return age > 18;
        }//true
    ```
    mutate-no
13. `unshift`
    - parameter:it accept one parameter is required  that is string 
    - return: number
    -example:
    ```js
      let number = [2,4,5,6];
    number.unshift(3);// [3, 2, 4, 5, 6]
    number.unshift(3,9); // [3, 9, 3, 2, 4, 5, 6]
    ```
    mutate-yes
    `unshift`-it adds the value in the starting of the element
14. `findIndex`
    - parameter:callback fn, index and arr is optional
    - return:number
    -example:
    ```js
    let numbers = [12,45,23,46,76];
    function isTwelve(num){
        return num === 12;
    }
    let findreturn = numbers.findIndex(isTwelve);
    console.log(findreturn); // 0

    ```
    mutate-no
15. `filter`
    - parameter::callback fn, index and arr is optional
    - return:array
    -example:
    ```js
          let numbers = [6,9,4,5];
      function isEven(num){
        return num % 2 === 0;
      }
      let evenNumber =numbers.filter(isEven); // [6, 4]
    ```
    mutate-no
16. `flat`
    - parameter:
    - return:
    -example:
    ```js

    ```
    mutate-
17. `forEach`
    - parameter:callback fn, index and array is optional
    - return:undefined
    -example:
    ```js
      let colors = ["red" , "pink" , "orange"];
      function log(color){
        console.log(color);
      };
      colors.forEach(log);// 
    ```
    mutate- no
    `forEach`-it method calls a function for each element in an array.
18. `map`
    - parameter:callback fn, index and array is optional
    - return:array
    -example:
    ```js
      let numbers = [3,7,8,5];
    function double (number){
        return number *2;
    }
    let doubleNumber = numbers.map(double);
    ```
    mutate-no
    `map`-creates a new array from calling a function for every array element.
19. `pop`
    - parameter: no
    - return:array
    -example:
    ```js
      let numbers = [5,7,4,8];
    numbers.pop(); // [5,7,4]
    ```
    mutate-yes
    `pop`-it removes the last element of the array
20. `reduce`
    - parameter::callback function ,(accumulator , currentvalue ,Index ,array )
    - return:depend on initial value
    -example:
    ```js
    let numbers = [1,5,8,6,9,4];
      let sum =numbers.reduce((acc ,num) =>{
          return acc + num ;

      } ,0 );

      console.log(sum) // 33
      acc =0;
      num =1;
      return 0 + 1 // 1
    ```
    mutate-no 
    `reduce`- reduce is used for reducing a collection of value into a differer shape of value
21. `slice`
    - parameter:it accept start index and last index
    - return:array
    -example:
    ```js
      const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
    console.log(animals.slice(2)); // ["camel", "duck", "elephant"]
    console.log(animals.slice(2, 4)); // ["camel", "duck"]
    console.log(animals.slice(1, 5)); // ["bison", "camel", "duck", "elephant"]
    ```
    mutate-no
    `slice`- it removes everything when we nothing pass in parameter
22. `some`
    - parameter:callback fn,index,arr
    - return:boolean
    -example:
    ```js
    let numbers = [5,8,,6,8]
        let ret = numbers.some(function(number)){
            return number > 6;
        }); 
    ```
    mutate-no
    `some`-it return true if at least one of callback function return true.
