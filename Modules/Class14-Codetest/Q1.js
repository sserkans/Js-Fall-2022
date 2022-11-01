function removeNumFromArray(num, numArray) {
    let i = 0;
    while (i < numArray.length) {
      if (numArray[i] === num) {
        numArray.splice(i, 1);
      } else {
        ++i;
      }
    }
    return numArray;
}

const arr1_1 = [1, 2, 3, 4, 5];
const numArrayAfterRemoval1_1 = removeNumFromArray(2, arr1_1);
console.log(numArrayAfterRemoval1_1);
    // [1, 3, 4, 5]
    
const arr1_2 = [21, 32, 12, 43, 45, 65, 12];
const numArrayAfterRemoval1_2 = removeNumFromArray(12, arr1_2);
console.log(numArrayAfterRemoval1_2);  
    // [21, 32, 43, 45, 65]

const arr1_3 = [-1, 2, 43, 65];
const numArrayAfterRemoval1_3 = removeNumFromArray(11, arr1_3);
console.log(numArrayAfterRemoval1_3);  
    // [-1, 2, 43, 65]