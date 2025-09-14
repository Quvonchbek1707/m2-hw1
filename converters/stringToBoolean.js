export function stringToBoolean(str) {
  if (str === "true" || str === "1") return true;
  if (str === "false" || str === "0") return false;
  return Boolean(str);
}
