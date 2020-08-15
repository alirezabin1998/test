function score(height, age) { 
    return height = age*5;
}

const tom = {
    height: 170,
    age: 20
};

const james = {
    height: 173,
    age:19
};

if(score(tom.height, tom.age) > score(james.height, james.age)){
    console.log("tom wins!");
} else if(score(tom.height, tom.age) < score(james.height, james.age)){
    console.log("james wins");
} else {
    console.log("it's a tie");
}