import { dataOperations, stringOperations } from "./index.js";

const args = process.argv.slice(2);
const command = args[0];

if (command === "filter") {
  const arr = JSON.parse(args[1]);
  const condition = args[2];
  console.log(dataOperations.filterArray(arr, condition));
} else if (command === "sort") {
  const arr = JSON.parse(args[1]);
  console.log(dataOperations.sortArray(arr));
} else if (command === "ascii") {
  const str = args[1];
  console.log(stringOperations.convertToASCII(str));
} else if (command === "uppercase") {
  const str = args[1];
  console.log(stringOperations.toUpperCase(str));
} else if (command === "lowercase") {
  const str = args[1];
  console.log(stringOperations.toLowerCase(str));
} else {
  console.log("Unknown command");
}
