/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    let arr2 = []; //we know the Array.filter method creates a new array
    for (let i = 0; i < arr.length; i++){
        if(fn(arr[i], i)){ //Array.filter method checks if the callback is true before it is added to the new array. 
            arr2.push(arr[i]);
        }
    }
    return arr2; 
};