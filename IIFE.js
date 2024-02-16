//this function use to prevent poluution from global function.
(function chai(name){
    console.log(`chai pite ho kya ${name}`);
})("pankaj");

//using arrow function
((name)=>{
console.log(`chai lele ${name}`);
})("pranay")