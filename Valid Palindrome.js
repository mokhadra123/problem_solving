/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let alphanumericRegex = /[^a-zA-Z0-9]/g;
  let modifiedString = s.toLowerCase().replace(alphanumericRegex, "");
  let reversedModifiedString = modifiedString.split("").reverse().join("");
  if (modifiedString == reversedModifiedString) {
    console.log(true);
  } else {
    console.log(flase);
  }
};
isPalindrome("A man, a plan, a canal: Panama");
