/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let regex =  /[aeiou]/ig;
    let arr = s.split('');
    let matches = [...s.matchAll(regex)];
    let vowels = matches.map(match => match[0]).reverse();
    let indexes = matches.map(match => match.index);
    for(let i = 0; i < indexes.length; i++){
        arr[indexes[i]] = vowels[i];
    }
    return arr.join('')
};