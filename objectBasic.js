//singleton-->constrctor object

//literal object
const mysym=Symbol("key1");
const JsUser={
    name :"pankaj",
    year: "TY",
    age :20,
    add:"sahydri hostel",
    [mysym]:"key2"
}

console.log(JsUser.name);
console.log(JsUser["name"]);
console.log(typeof(JsUser[mysym]));

JsUser.name="pranay shahre"
// Object.freeze(JsUser)
JsUser.name="pankaj"
console.log(JsUser);

JsUser.greeting=function(){
    console.log(`hello dear sir ${this.name}`);
}

JsUser.greeting();