//Need the function to return multiple iterations of removed values
//loop: convert removedItems arguments to an array
//loop until end of array length
//add splice() values to each original array value
// use conditional to splice

const removeFromArray = function(originalArray, ...removedValues) {
    console.log(originalArray.length)
    for (i = 0; i < originalArray.length; i++) {
      if (originalArray.includes(removedValues[i])) {
        originalArray.splice(originalArray.indexOf(removedValues[i]), 1);
      
      } 
    } 
    return originalArray
    
};




// Do not edit below this line
module.exports = removeFromArray;
