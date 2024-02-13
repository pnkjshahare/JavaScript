let arr=[10,20,30,40,50,60,"pankaj"];
arr.push("shahare")
// console.log(arr);
arr.pop();
// console.log(arr);
//add value in front
arr.unshift("pranay")
// console.log(arr);
//remove value front 
arr.shift();
// console.log(arr);
//checking value present or not
// console.log(arr.includes("pankaj"));
// console.log(arr.indexOf("pankaj"));
let newArrayAfterslice=arr.slice(0,3);
console.log("slice array",newArrayAfterslice);
console.log("orginal array",arr);
let arrayAfterSplice=arr.splice(0,3);
console.log("splice array",arrayAfterSplice);
console.log("original array",arr);
