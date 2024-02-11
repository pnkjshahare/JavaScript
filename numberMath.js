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