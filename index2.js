/*
let arr = new Array();

function age (birthYear){
    return (2020 - birthYear);
}

for(i = 0; i<= yearOfBirth.length; i++){
    arr[i] = yearOfBirth[i];
    if(age(arr[i]) > 18 ){
        console.log(`${age(arr[i])} years old so he is over 18`);
    }
}
*/

function printFullAge(ages) {
    let arr = new Array();
    let isOverAge = new Array();
    function age (birthYear){
      return (2020 - birthYear);
    }

    for(i = 0; i < ages.length; i++){
        flag = true;
        arr[i] = ages[i];
        if(age(arr[i]) < 18 ){
            flag = false;
        }
        isOverAge[i] = flag;
    }
    return isOverAge;
}

let yearOfBirth1 = [1998, 1983, 1996, 2001, 1989, 2010, 2008];
let yearOfBirth2 = [2000, 1993, 2001, 1989, 2012, 2008];

const full1 = printFullAge(yearOfBirth1);
const full2 = printFullAge(yearOfBirth2);

console.log(full1);
console.log(full1);