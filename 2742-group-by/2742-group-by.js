/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function(fn) {
    // Reduce the array into a single object
  return this.reduce((obj, item) => {
    // Apply the provided callback function to get the key
    const key = fn(item); //This key will return a result of the item, which we can then group later. 
    
    // If the key doesn't exist in the object, create a new array for it
    if (!obj[key]) { //!hasOwnProperty
      obj[key] = [];
    }
    
    // Push the current item to the array associated with the key
    obj[key].push(item);
    
    // Return the updated object for the next iteration
    return obj;
  }, {}); //initialize an empty object
};

console.log([1,7,3,5,97,8].groupBy(function (n) { return String(n > 5); }))
/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */