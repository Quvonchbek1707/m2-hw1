export function convertToASCII(str) {
  const result = [];
  for (let i = 0; i < str.length; i++) {
    result[result.length] = str.charCodeAt(i); // manual push
  }
  return result;
}
