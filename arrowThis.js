const user = {
  username: "some",
  userid: "1234",

  welcomeMessage: function () {
    console.log(`${this.username}`);
    console.log(this);
  },
};
// user.welcomeMessage();
// user.username = "someone";
// user.welcomeMessage();
//not pointing to anyone
// console.log(this);

// ++++++++++++++Arrow function+++++++++++
//explicit return
//basic arrow function
// const addTwo=(no1,no2)=>{
//     return no1+no2;
// }

//implicit return
const addTwo=(no1,no2)=>(no1+no2);

console.log(addTwo(10,20));