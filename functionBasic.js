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

console.log(userLoginMessage());