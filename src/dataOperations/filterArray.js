export function filterArray(arr, conditionStr) {
  const conditionFn = new Function("x", "return " + conditionStr);

  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (conditionFn(arr[i])) {
      result[result.length] = arr[i];
    }
  }
  return result;
}
