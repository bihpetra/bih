G//interestRate
let interestRate=0.3;//always use let to reassign a variable
interestRate=1;
console.log(interestRate);

//PRIMITIVE
let name=`Will`;//sting
let age=`35`;//number
let isApproved= false;//boolean
let firstName= undefined;//undefined
let selectedcolor= null;//null

//OBJECTS:below is an easier way to group and assign objects
let person={
    name: `Will`,
    age: 30,
    // email: njukheelani@gmail.com
};
console.log(person);

//ARRAYS
let selectedColors=[`red`,`aqua`];
selectedColors[2]=`green`;
// console.log(selectedColors[0]);[2]chooses a particular color but here it'll be the third element bcos its in the third postion
console.log(selectedColors.length);//displays the amount of objects
console.log(selectedColors);

//FUNCTIONS
function mine(name) {
    console.log('BURGER' + name);
}
mine(' Will');
mine(` Smith`);


//calculating a value
function square(number){
   return number*number;
}
let number= square(5);
console.log(number);

//getting
fullname= `Will Smith` ;
age= 25;
isStudent= true;

// document.getElementById("my_burger").textContent= `BURGER`;
// document.getElementById("my_burgerplus").textContent=`i love burger`;
document.getElementById("p1").textContent= `your name is ${fullname}`;
document.getElementById("p2").textContent= `you are ${age} years old`;
document.getElementById("p3").textContent= isStudent; `enrolled: ${isStudent}`;

//OPERATORS
let student=30;
// student= student +1;
// student= student-5;
// student= student*5;
//student= student/5;
console.log(student);


