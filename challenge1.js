let myboolean = true;
let myString = "helloworld";
let firstnumber = 20;
let secondnumber = 40;
let sum = firstnumber + secondnumber;
const myarray = [myboolean, myString];
const myObject = {
  firstProperty: myarray,
  sumproperty: sum,
};
console.log(myboolean);
console.log(myString);
console.log(firstnumber);
console.log(secondnumber);
secondnumber = 80;
console.log(secondnumber);
console.log(myarray);
console.log(myObject);
console.log(myObject.sumproperty);
console.log(myObject.firstProperty[1]);
