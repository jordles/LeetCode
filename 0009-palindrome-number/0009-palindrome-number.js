/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let reversedNum = 0;
    let originalNum = Math.abs(x);
    while(originalNum > 0){
        let digit = originalNum % 10; //obtain our last digit by using modulo
        reversedNum = reversedNum * 10 + digit; //multiply by 10 to shift digits to the left, and then add the digit. 
        originalNum = Math.floor(originalNum / 10); //make our originalNum lose the last digit by dividing 10 and using the floor method. 
    }

    return x === reversedNum;
};