/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
   let numIndices = {}; //our hashmap
   for (let i = 0; i < nums.length; i++) {
       let complement = target - nums[i];
       if (numIndices[complement] !== undefined) { //we will search in the hashmap to see if such a complement exists, if its doesnt we will make a key value pair for it, if it does, that means we have the complement and the current value at index that equals the target, so we return those two values.
           return [numIndices[complement], i];
       }
       numIndices[nums[i]] = i;
   }
};