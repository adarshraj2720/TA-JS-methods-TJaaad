let persons = [
  { name: 'John', grade: 8, sex: 'M' },
  { name: 'Sarah', grade: 12, sex: 'F' },
  { name: 'Bob', grade: 16, sex: 'M' },
  { name: 'Johnny', grade: 2, sex: 'M' },
  { name: 'Ethan', grade: 4, sex: 'M' },
  { name: 'Paula', grade: 18, sex: 'F' },
  { name: 'Donald', grade: 5, sex: 'M' },
  { name: 'Jennifer', grade: 13, sex: 'F' },
  { name: 'Courtney', grade: 15, sex: 'F' },
  { name: 'Jane', grade: 9, sex: 'F' },
  { name: 'John', grade: 17, sex: 'M' },
  { name: 'Arya', grade: 14, sex: 'F' },
];

// Create an array peopleName and store value of sex key from persons array
let peopleName=persons.map((per) => per.sex);
// Create an array peopleGrade and store the value of grade key from persons array
let peopleGrade=persons.map((div) => div.grade)
// Create an array peopleSex and store the value of sex key from persons array
let peopleSex=persons.map((MF) => MF.sex)
// Log the filtered named of people in peopleName that starts with 'J' or 'P'
persons.reduce((acc ,cv) => {
  if(cv.name.startsWith("J") || cv.name.startsWith("P")){
     acc.push(cv.name);
  }  
  return acc;   
},[]);
// Log the length of filtered named of people in peopleName that starts with 'A' and 'C'
persons.reduce((acc ,cv) => {
  if(cv.name.startsWith("A") || cv.name.startsWith("C")){
     acc.push(cv.name.length);
  }  
  return acc;   
},[]);
// Log all the filtered male ('M') in persons array
persons.reduce((acc,cv) => {
  if(cv.sex==="M"){
    acc.push(cv.name);
  }
  return acc
},[])
// Log all the filtered female ('F') in persons array
persons.reduce((acc,cv) => {
  if(cv.sex==="F"){
    acc.push(cv.name);
  }
  return acc
},[])
// Log all the filtered female ('F') whose name starts with 'C' or 'J' in persons array
persons.reduce((acc ,  cv) =>{
  if(cv.sex === "F"){
     acc.push(cv.name);
}
return acc;
}
,[]).reduce((acc ,cv) =>{
  if(cv.startsWith("C") || cv.startsWith("J")){
       acc.push(cv);
  }
  return acc;
},[]);
// Log all the even numbers from peopleGrade array
peopleGrade.filter((num) => num%2===0)
// Find the first name that starts with 'J' in persons array and log the object
persons.map((per) =>per.name).filter((n) => n.startsWith("J"))[0];
// Find the first name that starts with 'P' in persons array and log the object
persons.map((per) =>per.name).filter((n) => n.startsWith("P"))[0];
// Find the first name that starts with 'J', grade is greater than 10 and is a female
persons.map((per) =>per.name).filter((n) => n.startsWith("j"));
// Filter all the female from persons array and store in femalePersons array
let femalePersons = persons.reduce((acc ,  cv) =>{
  if(cv.sex === "F"){
     acc.push(cv.name);
}
return acc;
}
,[]);
// Filter all the male from persons array and store in malePersons array
let malePersons = persons.reduce((acc ,  cv) =>{
  if(cv.sex === "M"){
     acc.push(cv.name);
}
return acc;
}
,[]);
// Find the sum of all grades and store in gradeTotal
let totalGrade=  persons.map((obj)=> obj.grade).reduce((acc,cv) =>{
  acc = acc + cv;
  return acc;
},0)
// Find the average grade
let avgGrade=  persons.map((obj)=> obj.grade).reduce((acc,cv) =>{
  acc = acc + cv;
  return acc/persons.length;
},0)
// Find the average grade of male
let avgMale = persons.reduce((acc ,  cv) =>{
  if(cv.sex === "M"){
     acc.push(cv.grade);
}
return acc;
}
,[]);
// Find the average grade of female
let avgFemale = persons.reduce((acc ,  cv) =>{
  if(cv.sex === "F"){
     acc.push(cv.grade);
}
return acc;
}
,[]);
// Find the highest grade
function compare(a,b){
  return a-b;
}
let highestGrade= persons.map((obj) => obj.grade).sort(compare)[persons.length-1]
// Find the highest grade in male
function compare(a,b){
  return b-a;
}
let highestGradeMale =persons.reduce((acc ,  cv) =>{
  if(cv.sex === "M"){
     acc.push(cv.grade);
}
return acc;
}
,[]).sort(compare)[0];
// Find the highest grade in female
function compare(a,b){
  return b-a;
}
let highestGradeFemale =persons.reduce((acc ,  cv) =>{
  if(cv.sex === "F"){
     acc.push(cv.grade);
}
return acc;
}
,[]).sort(compare)[0];
// Find the highest grade for people whose name starts with 'J' or 'P'
persons.reduce((acc ,cv) => {
  if(cv.name.startsWith("J") || cv.name.startsWith("P")){
     acc.push(cv.grade);
  }  
  return acc;   
},[]).sort(compare)[0];
// Sort the peopleGrade in ascending order and log the value of peopleGrade. Notice did the elements of peopleGrade got changed?
function compare(a,b){
return a-b;
}
let peopleGradeAsc= persons.map((obj) => obj.grade).sort(compare);//yes
// Sort the peopleGrade in descending order
function compare(a,b){
  return b-a;
  }
  let peopleGradeDes= persons.map((obj) => obj.grade).sort(compare);
// Sort the peopleGrade in descending order this time you have to make sure you don't mutate the original array
let peopleGradeDes1= persons.map((obj) => obj.grade).sort(compare);//yes
// Sort the array peopelName in ascending `ABCD..Za....z`
function compare1(a,b){
  return b-a;
}
let peopleName1= persons.map((obj) => obj.name).sort(compare);
// Sort the array peopelName in ascending `ABCD..Za....z`. Make sure not to mutate the array
