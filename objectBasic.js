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

// console.log(JsUser.name);
// console.log(JsUser["name"]);
// console.log(typeof(JsUser[mysym]));

JsUser.name="pranay shahre"
// Object.freeze(JsUser)
JsUser.name="pankaj"
// console.log(JsUser);

JsUser.greeting=function(){
    console.log(`hello dear sir ${this.name}`);
}

// JsUser.greeting();
//++++++++++++++++++++++    OBJECT PART 2+++++++++++++++++++++

const tinderUser={
     userName : {
        firstName :"pankaj",
        lastName:"shahare"
    },
    email:"some@gmail.com"
}

// console.log(tinderUser.userName.lastName);

const instaUser={
    userName1 : {
        firstName :"chetan",
        lastName:"bhure"
    },
    email1:"some1@gmail.com"
}

// const bothuser=Object.assign({},tinderUser,instaUser)
const bothuser={...tinderUser,...instaUser}
// console.log(bothuser);

const userdata=[
    {
        userId:"123abc",
        name:"sam",
    },
    {
        userId1:"1234abx",
        name:"bahadur"
    }
]

// console.log(userdata[0].userId);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));

//++++++++++    PART 3   ++++++++

const course={
    courseInstructor:"pankaj",
    coursePrice:1000
}

// console.log(course.courseInstructor);
const {courseInstructor:instructor}=course
console.log(instructor);