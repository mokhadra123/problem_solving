var isPalindrome = function (x) {
  let reverseString = x.toString().split("").reverse().join("");
  if (x == reverseString) {
    return true;
  } else {
    return false;
  }
};

console.log(isPalindrome(121));








