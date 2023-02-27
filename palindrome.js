var isPalindrome = function (x) {
  let reverseString = x.toString().split("").reverse().join("");
  if (x == reverseString) {
    return true;
  } else {
    return false;
  }
};

console.log(isPalindrome(121));









x= 12 1 21

x = 121 2 121
n = x.length
k = 0
h = n-1
mid =(k+h)/2

left = (k+(mid-1))
right = ((mid+1)+h)