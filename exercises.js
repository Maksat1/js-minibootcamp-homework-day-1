//Do not change any of the function names

function multiplyByTen(num) {
  var multi = num * 10;
  return multi;//return num after multiplying it by ten
  //code here
}

function subtractFive(num) {
  var differ = num - 5;
  return differ;//return num after subtracting five
  //code here
}

function areSameLength(str1, str2) {
  if (str1.length === str2.length) 
    {return true;
    } else {
    return false;
  }
  //return true if the two strings have the same length
  //otherwise return false
  //code here
}

function areEqual(x, y) {
  if (x === y) {
    return true;
    } else {
    return false;
    }//return true if x and y are the same
  //otherwise return false
  //code here
}

function lessThanNinety(num) {
  if (num < 90) {
    return true;
  } else {
    return false;
  }
  //return true if num is less than ninety
  //otherwise return false
  //code here
}

function greaterThanFifty(num) {
  if (num > 50) {
    return true;
  } else {
    return false;
  }
  //return true if num is greater than fifty
  //otherwise return false
  //code here 6
}

function add(x, y) {
  var added = x + y;
  return added; //add x and y together and return the value
  //code here 7
}

function subtract(x, y) {
  var subTract = x - y;
  return subTract; //subtract y from x and return the value
  //code here 8
}

function divide(x, y) {
  var dividedNum = x / y;
  return dividedNum;   //divide x by y and return the value
  //code here 9
}

function multiply(x, y) {
  var multipl = x * y;
  return multipl; //multiply x by y and return the value
  //code here 10
}

function getRemainder(x, y) {
  var remind = x % y;
  return remind;
  //return the remainder from dividing x by y
  //code here 11
}

function isEven(num) {
  if (num % 2 == 0) {
    return true;
  } else { 
    return false;
  }
  //return true if num is even
  //otherwise return false
  //code here 12
}

function isOdd(num) {
  if (num % 2 != 0) {
    return true;
  } else {
    return false;
  }
  //return true if num is false
  //otherwise return false
  //code here 13
}

function square(num) {
  var sqNum = num * num;
  return sqNum;
  //square num and return the new value
  //code here 14
}

function cube(num) {
  var cubed = Math.pow(num, 3);
  return cubed;
  //cube num and return the new value
  //code here 15
}

function raiseToPower(num, exponent) {
  var raiseOfThe = Math.pow(num, exponent);
  return raiseOfThe;
  //raise num to whatever power is passed in as exponent
  //code here 16
}

function roundNumber(num) {
  var rounded = Math.round(num);
  return rounded;
  //round num and return it
  //code here 17
}

function roundUp(num) {
  var number = Math.ceil(num);
  return number; //round num up and return it
  //code here 18
}

function addExclamationPoint(str) {
  return str + '!'; //add an exclamation point to the end of str and return the new string
  //'hello world' -> 'hello world!'
  //code here 19
}

function combineNames(firstName, lastName) {
  return firstName + ' ' + lastName;
  //return firstName and lastName combined as one string and separated by a space.
  //'Lambda', 'School' -> 'Lambda School'
  //code here 20
}

function getGreeting(name) {
  return 'Hello ' + name + '!';

  //Take the name string and concatenate other strings onto it so it takes the following form:
  //'Sam' -> 'Hello Sam!'
  //code here 21
}

//If you can't remember these area formulas then head over to Google or look at the test code.
 
function getRectangleArea(length, width) {
  var area = length * width;
  return area;
  //return the area of the rectangle by using length and width
  //code here 22
}

function getTriangleArea(base, height) {
  var triArea = (1/2) * base * height;
  return triArea;
  //return the area of the triangle by using base and height
  //code here 23
}

function getCircleArea(radius) {
  var circle = Math.round(Math.PI * radius * radius);
  return circle;
  //return the rounded area of the circle given the radius
  //code here 24
}

function getRectangularPrismVolume(length, width, height) {
  var rectPrismVol = length * width * height;
  return rectPrismVol;

  //return the area of the 3D rectangular prism given the length, width, and height
  //code here 25
}

//Do not modify code below this line.
////--------------------------------

module.exports = {
  multiplyByTen: multiplyByTen,
  subtractFive: subtractFive,
  areSameLength: areSameLength,
  areEqual: areEqual,
  lessThanNinety: lessThanNinety,
  greaterThanFifty: greaterThanFifty,
  add: add,
  subtract: subtract,
  divide: divide,
  multiply: multiply,
  getRemainder: getRemainder,
  isEven: isEven,
  isOdd: isOdd,
  square: square,
  cube: cube,
  raiseToPower: raiseToPower,
  roundNumber: roundNumber,
  roundUp: roundUp,
  addExclamationPoint: addExclamationPoint,
  combineNames: combineNames,
  getGreeting: getGreeting,
  getRectangleArea: getRectangleArea,
  getTriangleArea: getTriangleArea,
  getCircleArea: getCircleArea,
  getRectangularPrismVolume: getRectangularPrismVolume
};
