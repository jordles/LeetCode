/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    return () => n++
};

//This works because reading code goes from left to right, so we would return the current n before incrementing. 
/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */