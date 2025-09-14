import { objectToArray, arrayToObject, stringToBoolean } from "./index.js";
const [type, rawValue] = process.argv.slice(2);

if (!type || !rawValue) {
  console.error("Usage:");
  console.error('node main.js Object "{\\"name\\": \\"val\\"}"');
  console.error("node main.js Array \"[['name','val']]\"");
  console.error('node main.js String "true"');
  console.error('node main.js Boolean "1"');
  process.exit(1);
}

let value;
try {
  value = JSON.parse(rawValue);
} catch {
  value = rawValue;
}

switch (type) {
  case "Object":
    console.log(objectToArray(value));
    break;
  case "Array":
    console.log(arrayToObject(value));
    break;
  case "String":
    console.log(stringToBoolean(value));
    break;
  case "Boolean":
    console.log(Boolean(Number(value)));
    break;
  default:
    console.error("Unknown type. Use: Object, Array, String, Boolean");
    process.exit(1);
}
