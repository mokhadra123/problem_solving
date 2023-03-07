/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function (nums, n) {
  let leftSide = nums.slice(0, n);
  let rightSide = nums.slice(n);
  let shuffledArr = [];
  for (i = 0; i < n; i++) {
    shuffledArr.push(leftSide[i], rightSide[i]);
  }
  console.log(shuffledArr);
};
