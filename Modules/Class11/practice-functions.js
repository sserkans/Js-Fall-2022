/* Create a function to return reverse a given array (without using reverse-function from array-class)
    example:
        input -> [hello, laugh, live, peaceful, hopeful]
        ans -> [hopeful, peaceful, live, laugh, hello]
        input -> [hello, laugh, live, king, queen]
        ans -> [queen, king, live, laugh, hello] 
*/

let input = ['hello', 'laugh', 'live', 'peaceful', 'hopeful'];

function reverseArr (givenArr){
    let newArr = []; 
    for ( i = givenArr.length-1 ; i >= 0; i--){
       newArr.push(givenArr[i]);
    }
    return newArr;
}
console.log(reverseArr(input));

/* Create a function to return the largest string(s) from a given string array.
    example:
        input -> [hello, laugh, live, peaceful, hopeful]
        ans -> peaceful
        input -> [hello, laugh, live, king, queen]
        ans -> hello, laugh, queen
*/

 let inputArray = ['hello', 'hello', 'king'];

 function getLongestWordsInArray(inputArray) {
    let longestWordLength = inputArray[0].length;
    let longestWords = [];

    for (let i=1 ; i <= inputArray.length-1 ; i++) {
        let tempLength = inputArray[i].length;
        if (longestWordLength < tempLength) {
            longestWordLength = tempLength;
        }
    }

    for (let word of inputArray) {
        if (word.length === longestWordLength) {
            longestWords.push(word);
        }
    }

    return longestWords;
}

console.log(getLongestWordsInArray(inputArray));

/*Create a function to return color name(s) appearing maximum number of times in given string array
    example:
        input -> [green, blue, red, green, orange, blue, red, yellow, red, red]
        ans -> red
        input -> [green, blue, red, green, orange, blue, red, yellow, red, red, blue, orange, blue]
        ans -> blue, red
        input -> []
        ans -> 
*/

let input2 = [ 'blue', 'red', 'green', 'orange', 'blue', 'red', 'yellow', 'red', 'red','green','green','green','red'];

let maxcount = 0;
    let maxApprColor = []
    for (let i = 0; i < input2.length; i++) {
        let count = 0;
        for (let j = 0; j < input2.length; j++) {
            if (input2[i] == input2[j]){
                count++;
            }    
        }
        if (count > maxcount) {
            maxcount = count;
            maxApprColor = input2[i];
        }
    }
 
    console.log(maxApprColor);







/*Create a function to return minimum value in the given numbers-array
    example:
        input -> [12, 34, 25, 7, 4, 67, 19]
        ans -> 4
        input -> [34, 54, 12, -8, 0, 45]
        ans -> -8
        input -> [109, 65, 24, 65, 10, 11, 89, 35, 90, 10, 23, 49]
        ans -> 10 
*/

let input3 = [109, 65, 24, 65, 10, 11, 89, 35, 90, 10, 23, 49];

function minNum (givenArr){
    var minVal = givenArr[0];
    for ( i= 0; i< givenArr.length-1; i++){
        if ( minVal < givenArr[i+1]){
             minVal = minVal;
        } else {
            minVal = givenArr[i+1];
        }      
    }
    return minVal;
}

console.log(minNum(input3))




