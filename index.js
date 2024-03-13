
// 1 javasript varibales

var a = 10;
var b = 20;
console.log(a + b);
console.log(a - b);
console.log(a / b);
console.log(a * b);

// 2 Data Types in javasript
// Primitive Datatype

var num1 = 20.50;
var num2 = 786;
var str = "java";
var str2 = "script"
var bool = true;

console.log(str + str2);
//object
var Marks = {
    Dhiraj: 56,
    Samadhan: 67,
    Sachin: 65
}
console.log(Marks);

var lol;
console.log(lol);

// Reference DataType

var arr = [1, 2, 3, 4, 5];
console.log(arr);

var n = 98;
n += 6;
console.log(n);

var D = 90;
D -= 56;
console.log(D);

// Comparison Operator

var x = 32;
var y = 87;
console.log(x == y);
console.log(x <= y);
console.log(x >= y);
console.log(x != y);

//Logical Operator

console.log(10 == 10 && 20 == 10);
console.log(10 == 10 && 20 >= 10);

// Function in javasript

function avg(a, b) {
    return (a + b) / 2;
}
c1 = avg(23, 43);
console.log(c1);

// Conditionals Statments in JavaSript

var age = 18;
if (age < 18) {
    console.log("You Are Eligible For A Vote");
}
else if (age < 67) {
    console.log("D");
}
else {
    console.log("Defult");
}

//For Loop in JavaSript

var arr1 = [1, 2, 3, 4, 5, 6];
for (var i = 0; i < arr1.length; i++) {
    if (i == 5) {
        break;
    }

    console.log(arr1[i]);
}

// While loop in javasript

let j = 0;
while (j < arr.length) {
    console.log(arr[j]);
    j++;
}
// DO while Loop in javasript

// let k = 0;
// do {
//     console.log(arr[k]);
//     k++;
// } while (j < arr.length);

let MyArr = ["Fan", "Camera", 34, null, true];
console.log(MyArr.length);
MyArr.pop();
MyArr.push("Dhiraj");
console.log(MyArr);

let add = [12, 43, 56, 43, 78, 2, 23];
console.log(add);
add.sort();
//console.log(add);

// String Method in javasript 

let MyStr = "Dhiraj Ganesh Badgujar";
console.log(MyStr.length);
console.log(MyStr.indexOf("Badgujar"));
console.log(MyStr.slice(0, 22));
s = MyStr.replace("Dhiraj", "Atul");
console.log(s);

let myDate = new Date();
console.log(myDate.getTime());
console.log(myDate.getFullYear());
console.log(myDate.getDay());

// DOM MINUOULATION
let elem = documentByID('click');
console.log(elem);








