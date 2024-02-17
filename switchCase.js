const month=1;
//also can compaire woth string like number
switch(month){
    case 1:
        console.log("jan");
        break;
    case 2:
        console.log("feb");
        break;
    case 3:
        console.log("march");
        break;
    default:
        console.log("Enter valid month no");
        break;
}

// +++++++++++++++ empty object ++++++++++++

const myobj={
    name:"pankaj"
}

if(Object.keys(myobj).length === 0){
    console.log(`object is empty`);
}
else{
    console.log(`object is not empty`);
}