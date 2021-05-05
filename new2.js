function count(arr, op) {
  let res = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (op === "+") {
      res += arr[i];
    }
    if (op === "-") {
      res -= arr[i];
    }
    if (op === "*") {
      res *= arr[i];
    }
    if (op === "/") {
      res /= arr[i];
    }
  }
  return res;
}
console.log(count([10, 5, 1], "+"));
console.log(count([10, 5, 1], "-"));
console.log(count([10, 5, 1], "/"));
console.log(count([10, 5, 1], "*"));
