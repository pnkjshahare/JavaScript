const superHero=["shaktiman","superman","father","mother","ironman"]
for(const hero of superHero){
    // console.log(hero);
}


//++++++++++++++++  map +++++++++

const map=new Map()

map.set('IN','INDIA')
map.set('USA','UNITED STATE OF AMERICA')
map.set('FR','FRANCE')

for(const [key,value] of map){
    // console.log(key, ':-', value);
}

// ++++++++++++++for Each loop +++++++
const coding=["js","python","cpp","ruby","java"]
coding.forEach(function(item,index,arr){
    // console.log(item,index);
    // console.log(arr);
})

//using arrow function

coding.forEach((val)=>{
    // console.log(val);
})

function printMe(item){
    console.log(item);
}

// coding.forEach(printMe)

const mycoding=[
    {
        fileName:"js",
        filelanguage:"javascript"
    },
    {
        fileName:"java",
        filelanguage:"java",
    },
    {
        fileName:"cpp",
        filelanguage:"c++"
    }
]

mycoding.forEach((item)=>{
// console.log(item.fileName);
// console.log(item.filelanguage);
})

// ++++++++++++++ filter using condition +++++++++++++
let myNum=[1,2,3,4,5,6,7,8,9,10]

const returnValue=myNum.filter((num)=>{
return num>5
})

// console.log(returnValue);

const mynum=[]
myNum.forEach( (num)=>{
if(num>5){
    mynum.push(num)
}
})

// console.log(mynum);



// +++++++++++++++++++++++++++++++ chaining ++++++++++++++++++++++++++

myNum=[1,2,3,4,5,6,7,8,9,10]
const myarr=myNum.map( (num)=>{
    return num*10
}).filter((num)=>{
return num>30
})

// console.log(myarr);


// Array reduce

const shoppingCart=[
    {
        itemName:"c++",
        itemPrice:2999
    },
    {
        itemName:"python",
        itemPrice:1000
    },
    {
        itemName:"js",
        itemPrice:2000
    }
]
const finalPrice=shoppingCart.reduce( (acc,item)=>(acc+item.itemPrice),0)
console.log(finalPrice);