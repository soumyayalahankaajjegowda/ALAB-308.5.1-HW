const arrNumberList = [2, 5, 8, 23, 34, 50, 10, 3, 102];

function getSum(arr) {
    let sum = 0;
    arr.forEach(num => {
        // console.log(num)
        sum += num;

    });
    return sum;
}
console.log(getSum(arrNumberList));

function getSumTwo(arr) {
    let sum = 0;
    for (i = 0; i < arr.length; i++) {
        // console.log(arr[i]);
        sum += arr[i];
    }
    return sum;
}
console.log(getSumTwo(arrNumberList));

// 2- Take an array of numbers and return the average.
function getAverage(arr) {
    let sum = getSum(arr);
    let average = sum / arr.length;
    return average;
}
console.log()
console.log(getAverage(arrNumberList))

// 3- Take an array of strings and return the longest string.

const arrStringList = ['say', 'hello', 'in', 'the', 'morning'];

function getLongestString(arr) {
    let longestString = "";
    // we want to look through array, measure the individual words, find
    // the longest word, and print it
    arr.forEach(str => {
        if (str.length > longestString.length) {
            longestString = str;
        }
    })
    return longestString
}
console.log(getLongestString(arrStringList))

// 4- Take an array of strings, and a number and return an array of the 
//   strings that are longer than the given number.

// arguments are: an array, an arbitrary number

function getLongerThanNumber(arr, int) {
    // measure the string length, compare that to our integer
    const newArray = [];
    for (i = 0; i < arr.length; i++) {
        if (arr[i].length > int) {
            newArray.push(arr[i])
        }
    }
    return newArray
}
console.log(getLongerThanNumber(arrStringList, 5));

// Sort the array by age.
// Filter the array to remove entries with an age greater than 50.
// Map the array to change the "occupation" key to "job" and increment every age by 1.
// Use the reduce method to calculate the sum of the ages.
// Then use the result to calculate the average age.

const people = [{ id: "42", name: "Bruce", occupation: "Knight", age: "41" },
     { id: "48", name: "Barry", occupation: "Runner", age: "25" }, 
     { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" }, 
     { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" }, 
     { id: "7", name: "Bilbo", occupation: "None", age: "111" }]

// turn the string age in to a number, as we go

function sortByAge(arr){
    arr.sort((a, b)=> {  // a is the current value, b is a comparison
        return Number.parseInt(a.age) - Number.parseInt(b.age);
    })
    return arr
}
console.log(sortByAge(people))

// function filteredArray()

function filterOutOlder(arr){
    let newArray = arr.filter(person=>{
        return parseInt(person.age)<50;
    })
    return newArray
}
console.log(filterOutOlder(people))

//Map the array to change the "occupation" key to "job" and increment every age by 1.

const occupationAndAge = (arr) =>{
  return arr.map(person => {
    const { occupation,age} = person;
    return{
      job:occupation,
      age: (parseInt(age) + 1).toString()
    };
  });
};
const updatedData = occupationAndAge(people);
console.log(updatedData);

// Use the reduce method to calculate the sum of the ages.
// then use the result to calculate the average age.

function sumOfAge(persons) {
  let initalValue = 0;
  let sum = persons.reduce((acc, curr) => {
    return acc + curr.age;
  }, initalValue);
  return sum;
}
console.log(sumOfAge(people));
