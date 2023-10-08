/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */

/*  Not allowed to use Array.map function */

var map = function(arr, fn) {
    let arr2 =  [];
    for ( let i = 0; i< arr.length; i++){
        arr2[i] = fn(arr[i], i);
    }
    return arr2; 
};