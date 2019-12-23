var DoubleQoutes = "  I am A, String   ";
var variable = 10;
var SingleQoutes = " I am A String "+variable;
var templateLiteral = `I am a 
string ${variable}`;

// console.log(templateLiteral);
// console.log(DoubleQoutes);
// console.log(SingleQoutes);
var trimmedString=DoubleQoutes.trim();
var strArr=trimmedString.split(" ");
var joinedArr=strArr.join("+");
// console.log(trimmedString);
// console.log(strArr);
// console.log(joinedArr);

var newString=trimmedString.replace("I","we");
newString =newString.replace("am","are");
console.log(newString);

