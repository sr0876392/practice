//Single line comm
/*multiline
comment*/
console.log("Hello JS");
// value or data types
console.log("Hello from JS");
console.log("Let's do some math");
console.log(4+7);
console.log(12/8);
console.log("Bye!");

let a = 3.14;
console.log(a); // prints a

const temp1 = 36.9;
const temp2 = 37.6;
const temp3 = 37.1;
console.log(temp1, temp2, temp3);
//temp3 = 9; //can't change const after declaration

//increment  a number variable
let c = 0; 
c += 1; // c = c + 1
c++;
console.log(c);

//VARIABLE SCOPE
let num1 = 0; //declared num1 // let/const are local to the block they are declared in
{
    num1 = 1;
    const num2 = 0;
    console.log(num1);
}
//console.log(num2); // this line doesnt see num2 in the block above cuz num2 is local to the block where it was declared

//TEMPLATE LITERAL (print string/backticks are important) 
const country = "France";
console.log(`I live in ${country}`); //Show "I live in France"
const x = 3;
const y = 7;
console.log(`${x} + ${y} = ${x + y}`);//Show 3 + 7 = 10

//Observe outputs (JS conversions)
console.log(4 + 5);
console.log("4 + 5");
console.log("4" + "5");
console.log(4 + "5");
const g = "five" * 2; // Outputs NaN (not a number)
console.log(g);

//explicit conversion Number() or String()
const h = "5";
console.log(h+1); //concat: show string "51"
const i = Number (h);
console.log(i+1); //Addition: show 6
const j = 6;
console.log("5"+ String(j));
// console.log(Number("dog")); //NaN

//Strict equality using ===

let num = 0;
let str = "0";
console.log(num === num); //true 
console.log(str === str); //true
console.log(num === str); // false
console.log(num == str); //true

//Switch
const z = "abc";
switch (z) {
    case "abc":
        console.log("z = abc");
        break; // need breaks to break cases so it evaluates only the last one
    case "def":
        console.log("z = def");
        break;
    default:
        console.log("otherwise")
}




