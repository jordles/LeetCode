/**
 * @param {number[]} dist
 * @param {number[]} speed
 * @return {number}
 */
var eliminateMaximum = function(dist, speed) {
   // Create a new array time_to_city by mapping over the dist array
   const n = dist.length;
   // For each element in dist, divide it by the corresponding element in the speed array
   // This gives the time it takes per minute for each monster to reach the city
   const time_to_city = dist.map((d, i) => d / speed[i]);
   // Sort the time_to_city array in ascending order
   time_to_city.sort((a, b) => a - b);
   // Initialize a for loop that iterates over the time_to_city array
   for (let i = 0; i < n; i++) {
     // If the time it takes for the monster to arrive is less than or equal to the current index, the i represents the number of monsters eliminated
     //This comparison works, because our weapon always takes one minute to recharge. 
     if (time_to_city[i] <= i) {
       // Return the current index
       return i;
     }
   }
   
   // If the function has not returned after the for loop, return the total number of monsters
   return n;
};