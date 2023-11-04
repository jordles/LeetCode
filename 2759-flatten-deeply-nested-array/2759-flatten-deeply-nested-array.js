/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {
    if (n <= 0) {
     return arr;
    }

    var finalArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            var temp = flat(arr[i], n - 1);
            for (var j = 0; j < temp.length; j++) {
                finalArr.push(temp[j]);
            }
        } else {
            finalArr.push(arr[i]);
        }
    }

    return finalArr;
    //when we recurse, we make our inner array the array to test, and reduce the number by 1
    //if this current scope is not an array, we add our val. 
    //We will add every val that is not an array to our finalArr.
};