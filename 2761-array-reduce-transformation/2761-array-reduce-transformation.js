/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
 
var reduce = function(nums, fn, init) {
    let total = init; //we know the Array.reduce method returns the total value, and we are asssigning it with the init given.
    if(nums.length == 0){
        return init; 
    }
    for(let i of nums){
        total = fn(total, i); //we know that fn is the callback function trying to join the two parameters together, with the first being the total amount. Whatever the fn outputs we will assign that value to our total. 
        console.log(total);
    }
    return total;
};