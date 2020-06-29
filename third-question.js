/**
 *
 * @param {String} str
 */
function inverseString(str) {
  const arr = str.split("");
  const newArr = [];
  for (let index = arr.length; index > -1; index--) {
    newArr.push(arr[index]);
  }
  if (newArr.join("") === str) {
    return true;
  } else {
    return false;
  }
}

console.log(inverseString("ssbbss"));
console.log(inverseString("wwwbbss"));
