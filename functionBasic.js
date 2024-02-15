function sumTwoNumber(number1,number2){
    return number1+number2;
}

// console.log(`sum of two no ${sumTwoNumber(10,20)}`);
function userLoginMessage(username="sam"){
    if(!username){
        console.log(`please enter username`);
        return;
    }
    return `${username} just logged in`
}

// console.log(userLoginMessage());

function addToCart(...num1){
    return num1;
}

// console.log(addToCart(10,20,40,100));


const myObje={
    email:"some@gmail.com",
    name:"pnkj"
}
//passing object in function 
function objectPassing(anyobject){
    console.log(anyobject.email);
    console.log(anyobject.name);
}

objectPassing(myObje);

//++++++++++function define+++++++++++++++
// const myfunction=function(nums){
//     return num+1;
// }