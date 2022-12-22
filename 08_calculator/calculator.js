const add = function(num1,num2) {
	return num1+num2;
};

const subtract = function(num1,num2) {
	return num1-num2;
};

const sum = function(num1,num2) {
	return num1+num2;
};

const multiply = function(num1,num2) {
  return num1*num2;
};

const power = function(num) {
	return num*num;
};

const factorial = function(num) {
  let result=1
	for(let i=num;i>=1;i--){
    result*=i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
