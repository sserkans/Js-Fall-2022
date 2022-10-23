// Due date -> Oct 23 eod

/**
 * Q1. Create a function to generate abbreviation for a sentence
 * 
 * Return the final result
 * 
 * 'you live Only once' -> YLOO
 * 'you Never waLK ALONe every day' -> YNWAED
 * 'good Morning' -> 'GM'
 * 'hello dear, how are you doing?' -> HDHAYD
 * 
 * 
 */

 function abbrSentence (stringGiven) {
    let abbr = '';
    let strtoArr = stringGiven.split(' ');
 for ( i=0; i < strtoArr.length ; i++){
    let char = strtoArr[i].substring(0,1);
    abbr += char.toUpperCase();
 }
 return abbr;
}

console.log(abbrSentence('hello dear, how are you doing?'));

/**
 * Q2. Create a function to reverse a given string (word by word)
 * 
 * 'have a great day' -> day great a have
 * 'good morning' -> morning good
 * 'Learn' -> Learn
 */
/**
 * 1. what is the purpose of the function?
 *      reverse string word by word (reverseWordString , reverseStringByWord)
 * 
 * 2. Do I need any input from user? -> Yes
 *      If Yes,
 *          a) How many inputs I need from user? 1 (string)
 * 
 * 3. Should I return any value back to user at the end of operation/function? -> Yes
 *      If Yes,
 *          what is the datatype of returned value -> string (reversedString)
 */
function reverseStringByWord (userInput) {
    let resultString = '';

    const arr2 = userInput.split(' ');
    for (let i=arr2.length-1 ; i >= 0 ; i--) { 
        resultString = resultString + arr2[i] + ' ';
    }
    return resultString.trim();
}

console.log(reverseStringByWord('have a great day'));


/**
 * Q3. Create a function to convert the string value in to Titlecase
 * 
 * Return the final result
 * 
 * 
 * 'you live Only once' -> You Live Only Once
 * 'you Never waLK ALONe' -> You Never Walk Alone
 * 'have a GrEAT daY' -> 'Have A Great Day'
 */


 

 function titleCase (givenString){
    givenArr = givenString.toLowerCase().split(' ');
    sentenceTitleCase = '';
    for (var i = 0; i < givenArr.length; i++){
        sentenceTitleCase += givenArr[i].charAt(0).toUpperCase() + givenArr[i].slice(1) + ' '
    }
    return sentenceTitleCase;
 }

 console.log(titleCase('you Never waLK ALONe'));