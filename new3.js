function checkNumber(str) {
  let newStr = "";
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (!isNaN(str[i])) {
      newStr += str[i];
    } else {
      count++;
    }
  }
  if (str.length === 11 && str[0] === "+" && count === 1) {
    return str.slice(1);
  }
  if (newStr.length === 10) {
    return "good number";
  }
  if (newStr.length < 10 || str.length > 10) {
    return "bad number";
  }
  if (str[0] !== "+") {
    return "bad number";
  }
}

checkNumber("+2346587519");
