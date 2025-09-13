const values = process.argv;

const a = Number(values[2]);
const b = Number(values[4]);
const action = values[3].toString();
let module;
if(isNaN(a) || isNaN(b)){
    console.log("Error in numbers");
    process.exit(1);
}
if (action == "+") {
    console.log(a+b)
} else if (action == '/') {
    console.log(parseInt(a/b))
} else if (action == "-") {
    console.log(a-b)
} else if (action == '*') {
    console.log(a*b)
} else {
  console.log("Error in action");
  process.exit(1);
}
