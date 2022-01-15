Watch this video to understand what to do in this exercise block [link](https://www.youtube.com/watch?v=zGpplZj4zY0&feature=youtu.be)

#### Getting To Know String Methods

Go to this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) and look for the name of method to learn about it.

**Write in your own way of understanding (don't copy paste)**

Only if you are done with step 1 you should go ahead.

1. Practice it by yourself in console (4-5 times to understand)
2. Data types of parameters
3. Return value type
4. Write three examples
5. In your own words and one sentence explain what this method does.

Example:

1. `charAt`

   - Parameter: (index) defaults to 0 - (number data type)
   - Return: character at specific index in the string (string data type)
   - Example:
     ```js
     let name = 'Arya Stark';
     name.charAt(2); //"y"
     let sentance = 'A quick brown fox jumped over a lazy dog';
     sentance(4); // "i"
     let houseName = 'Starks';
     houseName.charAt(0); // "S"
     ```
   - `charAt` accepts a index (number data type) and return the character on that index in the string.

2. `toUpperCase`
      parameter: no parameter
      Return : Return value in a uppercase in string (string data type);
      example:


      ```js
     let name="adarsh";
       name.toUpperCase();//'ADARSH'
    let institute="altcampus";
        institute.toUpperCase();//'ALTCAMPUS'
    let address="motihari";
     address.toUpperCase();//MOTIHARI
    ```
    `toUpperCase`- converts string value  into uppercase 



3. `toLowerCase`
      parameter: no parameter
      Return : Return value in a lowercase in string (string data type);
      example:


      ```js
      example-
     let name="ADARSH";
       name.toUpperCase();//'ADARSH'
    let institute="ALTCAMPUS";
        institute.toUpperCase();//'altcampus'
    let address="MOTIHARI";
     address.toUpperCase();//'motihari'
    ```
    `toLowerCase`- converts string value  into lowercase .


4. `trim`
parameter- no parameter accept
return- it returns  string data type.
```js
example-
let name="    adarsh";
name.trim()//"adarsh"
let institute="      altcampus     ";
institute.trim()//"altcampus"
  let address="     ";
  address.trim()//""
```
`trim`- it removes the whitespace of the string value from the both  side of string value.

5. `trimEnd`
parameter-no parameter accept
return- it returns string data types
```js
example-
let name ="adarsh    ";
name.trimEnd()//"adarsh";
let address ="    motihari";
address.trimEnd()//'    motihari'
let campus="     ";
campus.trimEnd()//''
```
`trimEnd`- it removes the whitespace from the right side  of string value.

6. `trimStart`
parameter-it not accept parameter;
return-it returns string data types.
```js
example-

let name ="      adarsh";
name.trimEnd()//"adarsh";
let address ="motihari      ";
address.trimEnd()//'motihari     '
let campus="     ";
campus.trimEnd()//''
```
`trimEnd`- it removes the whitespace from the left side of string value


7. `concat`
parameter-it require a paramerter 1st parameter is always string.string is anything else empty or value and other parameter is anything else there are  n parameter else how much want. and empty string treat as whitespace.
return- string data type
```js
example-
let firstName="Adarsh";
let lastName="Raj"
firstName.concat(" ",lastName);//'Adarsh Raj'
firstName.concat(" ",07,lastName);//'Adarsh 07Raj'
firstName.concat("is");//'Adarshis'

```
`concat`-  it is used for conact two or multiple  values string value.

8. `endsWith`
parameter- it accept two parameter , 1st string-data-type, and 2nd is number-data-type it defines limit. and 2nd parameter is optional
return- boolean
```js
example-
const str1 = 'Cats are the best!';
str1.endsWith('a',2)//true
str1.endsWith('a')//false
str1.endsWith(' ')//false
str1.endsWith('')//true- default gives  true

```
`endsWith`- it returns true and false on the basis last letter of value  and by default value is true.

9. `includes`
parameter- it accept two parameter , 1st string-data-type, and 2nd is number-data-type it defines where from start. and 2nd parameter is optional
return-boolean
```js
example-
let text = "Hello world, welcome to the universe.";
text.includes(`e`)//true
text.includes(`the`)//true
text.includes('w',14)//false
text.includes('')//true

```
`includes`-it returns true and flase value form the string value it finds the specific letter in the string value.


10. `indexOf`
parameter- it accept parameter 1st is serach value is string-data-type and 2nd value is number-data-type it defines where from start it and it optional
return- number
```js
let text = "Hello world, welcome to the universe.";

text.indexOf("a");//-1
text.indexOf("to");//21
text.indexOf("to",22);//-1

```
`indexOf`- it return the index of specific letter and when he gives the -1 means i looking thos value is not present in that 


11. `lastIndexOf`
parameter- it accept parameter 1st is serach value is string-data-type and 2nd value is number-data-type it defines where from start it and it optional
return- number
```js
let text = "Hello planet earth, you are a great planet.";
text.lastIndexOf("planet");//36
text.lastIndexOf("earth",5);//-1

text.lastIndexOf("earth",14);//13



```
`lastIndexOf`- it finds the index of specific letter from the string value

12. `padEnd`
parameter-it accept parameter 1st is number data-type and 2nd is string data type and it is optional
return- string data-type.
```js
let str = 'abc'
str.padEnd(5)//'abc  '
str.padEnd(5,'-')//'abc--'
str.padEnd(5,'')//'abc'
```
`padStart`-it add any specific value to the last  of value to the limit.


13. `padStart`
parameter-it accept parameter 1st is number data-type and 2nd is string data type and it is optional
return- string data-type.
```js
let str = 'abc'
str.padStart(5)//'  abc'
str.padStart(5,'-')//'--abc'
str.padStart(5,'')//'abc'

```
`padStart`-it add any specific value add start of value to the limit.


14. `repeat`
parameter-it accept one parameter that is number-data-types
return- string
```js
let text = "Hello world!";
text.repeat(5)//'Hello world!Hello world!Hello world!Hello world!Hello world!'
text.repeat(0)//''
text.repeat(1)//'Hello world!'
```
`repeat`-it repat the n times the value .

15. `replace`
parameter-it accept two parameter 1st is serach value and 2nd is  replace value both value in the string 
return- string
```js
let text = "Visit Microsoft!";
text.replace("Microsoft", "intel");//'Visit intel'
let name="My name is adarsh raj"
name.replace("adarsh","sahil")//'My name is sahil raj'

```
`replace`- it replace the specific word with new word .

16. `slice`
parameter-it accept parameter 1st is start value in number 2nd value is end value is limit 
return-string
```js
let text = "Hello world!";
text.slice(0,3)//'Hel'
text.slice(5)//' world!'
```
`slice`-it returns the string from n to n value between

17. `split`
parameter-it accept parameter 1st is seprator value in string and 2nd value in number that split integer to the limit.
return-array
```js
let text = "How are you doing today?";
text.split('e')//(2) ['How ar', ' you doing today?']
text.split('o',3)//(3) ['H', 'w are y', 'u d']
text.split('',3)//(3) ['H', 'o', 'w']
text.split(' ',3)//(3) ['How', 'are', 'you']
```
`split`- it return a array conatining the splitted part.

18. `substring`
parameter- it  accept two parameter 1st start position 2nd length value to limit 
return- string
```js
let text = "Hello world!";
text.substring(1,4)//'ell'
text.substring(1,3)//'el'

```
`substring`-it returns value between starting point and last point.