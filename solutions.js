// 1
const logger = () => {
  console.log("Hello, World!");
};
logger();
// 2
const sumTwo = (a, b) => {
  if (!a || !b) return "invalid input";
  if (typeof a !== "number" || typeof a !== "number") {
    return "function accepts only numbers";
  }
  const sum = a + b;
  return sum;
};
console.log(sumTwo(undefined, 7));

// 3
const evenOdd = (a) => (a % 2 === 0 ? "Even" : "Odd");
console.log(evenOdd(23));
console.log(evenOdd(24));

// 4
const checkPalli = (str) => {
  const rev = str.split("").reverse().join("");
  return str === rev;
};

console.log(checkPalli("hi"));
console.log(checkPalli("lol"));
console.log(checkPalli("racecar"));

// 5
const leng = (arr) => arr.length;
console.log(leng([1, 2]));

// 6
const randNum = (a, b) => {
  let diff = b - a;
  const posDiff = Math.abs(diff);
  const res = Math.floor(posDiff * Math.random()) + a;
  return res;
};

console.log(randNum(4, 9));

// 7

const rounder = (num, dig) => num.toFixed(dig);
console.log(rounder(3.14564, 2));

// 8

const sqrtCal = (num) => Math.sqrt(num);
console.log(sqrtCal(16));

// 9 123 => 1+2+3

const digitSum = (num) =>
  num
    .toString()
    .split("")
    .reduce((sum, current) => Number(sum) + Number(current));
console.log(digitSum(12345));

// 10
const voulCounter = (str) => {
  let count = 0;
  let arr = str.split("");

  arr.forEach((c) => {
    let CC = c.toLowerCase();
    if (CC == "a" || CC == "e" || CC == "i" || CC == "o" || CC == "u") {
      count++;
    }
  });
  return count;
};

// 11
const lenCheck = (str) => str.length;
console.log(lenCheck("belete"));

// 12

const upperCase = (str) => str.toUpperCase();
console.log(upperCase("geze"));

// 13

const substringCheckeer = (str, substr) => str.includes(substr);
console.log(substringCheckeer("hi guys hi there", "hii"));

// 14

const stringReplacer = (str, target, replacement) => {
  return str.replaceAll(target, replacement);
};

console.log(stringReplacer("hi guys hi there", "hi", "hello"));

// 15
const removeWhitespc = (str) => str.replaceAll(" ", "");
console.log(removeWhitespc("hi guys hi there"));

// 16
const arrF = (arr) => arr.filter((a) => a >= 0);
console.log(arrF([1, 2, -3]));

// 17
const objKeys = (obj) => Object.keys(obj);
console.log(objKeys({ name: "fire", age: 28 }));

// 18

const addDefultName = (obj) => (!obj.name ? (obj.name = "unknown") : null);
const testObj = { name: null, age: 28 };
addDefultName(testObj);
console.log(testObj);

// 19
const addOne = (num) => num + 1;
console.log(addOne(12));
// 20
const multBy3 = (num) => num * 3;
console.log(multBy3(10));

// 21
const arrayFE = (arr) => arr[0];
console.log(arrayFE([9, 4, 45]));

//22
const basketCounter = (twoP, threeP) => twoP * 2 + threeP * 3;

console.log(basketCounter(10, 5));

// 23
const lessThan30 = (a, b) => a + b < 30;
console.log(lessThan30(10, 40));
// 24
const numCompare = (num1, num2) => num1 === num2;
console.log(numCompare(23, 23));

//25
const evaluator = (exp) => eval(exp);
console.log(evaluator("2+5-6"));

// 26
const strLengthCompare = (str1, str2) => str1.length === str2.length;
console.log(strLengthCompare("hi", "lo"));

// 27

const divBy5 = (int) => int % 5 === 0;

console.log(divBy5(49));

// 28
// age>18, bartender not on a break

const serverDrink = (age, isBartenderOnaBreak) =>
  age > 18 && !isBartenderOnaBreak;

console.log(serverDrink(12, false));
console.log(serverDrink(18, true));
console.log(serverDrink(20, false));

// 29
const isLengthEven = (str) => str.length % 2 === 0;
console.log(isLengthEven("lo"));

// 30
const lastItem = (arr) => arr[arr.length - 1];
console.log(lastItem([2, 5, 8, 45]));

// 31
const removeFirstChar = (str) => str.substring(1);
console.log(removeFirstChar("hi there"));

// 32
const toArr = (a, b) => [a, b];

console.log(toArr(7, "hi"));
// 33
const arrToString = (arr) => arr.toString().replaceAll(",", "");
console.log(arrToString([1, 2, 3]));
console.log(arrToString([1, 2, 3, "a", "s", "dAAAA"]));

//34
const greeter = (name) => `Hello ${name}!`;

console.log(greeter("Firealem"));

// 35
const carDispatch = (passangerCount) =>
  passangerCount % 5 === 0 ? passangerCount / 5 : Math.ceil(passangerCount / 5);
console.log(carDispatch(20));

// 36
const oddLess100 = () => {
  let arr = [];
  for (var i = 0; i < 100; i++) {
    if (i % 2 !== 0) {
      arr.push(i);
    }
  }
  return arr;
};
console.log(oddLess100());

// 37
// 2, 7=>2,3,4,5,6,7

const summArr = (num1, num2) => {
  let smallNumber = num2 > num1 ? num1 : num2;
  let largeNumber = num2 > num1 ? num2 : num1;
  let arr = [];
  for (var i = smallNumber; i <= largeNumber; i++) {
    arr.push(i);
  }
  return arr.reduce((s, c) => s + c);
};

console.log(summArr(7, 5));

// 38
const objArr = [
  { name: "Firealem", age: 22 },
  { name: "Belete", age: 23, email: "fire@gmail.com" },
  { name: "Geze", age: 24, email: "" },
  { name: "Ashu", age: 12, email: undefined },
  { name: "Haimi", age: 45, email: "fire@gmail2.com" },
];

const sanitizeEmail = (arr) => arr.filter((obj) => obj.email);

console.log(sanitizeEmail(objArr));

// 39

const messageFromObj = (arr) =>
  arr
    .filter((obj) => obj.email)
    .map(
      (obj) =>
        `hi ${obj.name}, we have sent sent a conformation email to your email adddress`
    );

console.log(messageFromObj(objArr));

// 40

const filterUnderAge = (arr) => arr.filter((person) => person.age > 18);

console.log(filterUnderAge(objArr));
// 41
const ageSum = (arr) =>
  arr.reduce((sum, person) => sum + Number(person.age), 0);

console.log(ageSum(objArr));

// 42

const aveAge = (arr) =>
  arr.reduce((sum, person) => sum + Number(person.age), 0) / arr.length;
console.log(aveAge(objArr));

// 43
const pickTheOldest = (arr) =>
  arr.sort((a, b) => a.age - b.age)[arr.length - 1];
console.log(pickTheOldest(objArr));

// 44

const pickTheYoungest = (arr) => arr.sort((a, b) => a.age - b.age)[0];
console.log(pickTheYoungest(objArr));

// 45
const nameOnly = (arr) => arr.map((person) => person.name);

console.log(nameOnly(objArr));

// 46

const isAdult = (arr) =>
  arr.map((person) => {
    if (!person.email) {
      delete person.email;
      return { ...person, isAdult: person.age > 18 };
    }
    return { ...person, isAdult: person.age > 18 };
  });

console.log(isAdult(objArr));

// 47
const sortByAge = (arr) => arr.sort((a, b) => a.age - b.age);

// 48
const sortByName = (arr) =>
  arr.sort((a, b) => {
    if (a.name > b.name) {
      return 1;
    }
    if (b.name > a.name) {
      return -1;
    }
    return 0;
  });
console.log(sortByName(objArr));
// 49
const sortByLongestName = (arr) =>
  arr.sort((a, b) => {
    if (a.name.legth > b.name.length) {
      return 1;
    }
    if (b.name.length > a.name.length) {
      return -1;
    }
    return 0;
  })[arr.length - 1];
console.log(sortByLongestName(objArr));

// 50
const messageWriter = (arr) =>
  arr
    .filter((obj) => obj.email)
    .map(
      (person) =>
        `${person.name} is ${person.age} years old and ${
          person.email ? "has email" : null
        }`
    );
console.log(messageWriter(objArr));

// 51
const messageWriter51 = (arr) =>
  arr.map(
    (person) =>
      `${person.name} is ${person.age} years old and ${
        person.email ? "has email" : "has no email"
      }`
  );
console.log(messageWriter51(objArr));
