/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var compactObject = function(obj) {
    const data = Array.isArray(obj) ? obj.filter(Boolean) : obj;
    console.log(data);
    return Object.keys(data).reduce(
        (acc, key) => {
            console.log(data[key])
            console.log('key ' + key)
            const value = data[key];
            if (Boolean(value)) //if our value is truthy, 
                acc[key] = typeof value === 'object' ? compactObject(value) : value;
                //we can recursively search in our values until we find one that is an array
            return acc;
        },
        Array.isArray(obj) ? [] : {} 
        //since reduce returns a new obj, we check to make sure that obj is an array or not, and initialize as such.
    );
};