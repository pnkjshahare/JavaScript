const balance=200;
//convert no into string
const newBalancce=balance.toString();
console.log(newBalancce);
console.log(typeof(newBalancce));
//convert string into number
const noInString=Number(newBalancce);
console.log(typeof(noInString));
//fix decimal point
console.log(noInString.toFixed(3));

// value in indian
const hundred=10000000;
console.log(hundred.toLocaleString('en-IN'));

//++++++++++++math+++++++++++++
// console.log(Math.round(4.92343));
// console.log(Math.ceil(4.92343));
// console.log(Math.floor(4.92343));

//random function

// console.log(Math.random());

const max=100;
const min=200;
console.log(Math.floor(Math.random()*(max-min+1)+min));
//this concept use in dice game