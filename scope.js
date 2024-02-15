let no=10000

if(true){
   let no=20;
    console.log(no);
}
// console.log(no);

//nested function

function user1(){
    let username1="pankaj"

    function user2(){
        let username2="pranay"
        console.log(`two customer ${username1} & ${username2}`);
    }
    user2();
    // console.log(username2);
}
user1();
// console.log(username1);