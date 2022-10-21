// Due date : Oct-19 EOD

/**
 * Q1. Find the average of the given numbers-array
 * 
 * [1,2,3,4,5] -> 15/5 -> 3
 * [1, -1, 2, -3, 1] -> 0/5 -> 0
 * [1, 2, 1, 1, 3, 1, 2] -> 11/7 -> 1.xxx
 * 
 */
 let numbers = [1, 2, 1, 1, 3, 1, 2];

 let total = 0;

 for (i=0; i< numbers.length; i++){
    total += numbers[i];
 }
 let avg = total / numbers.length;
 console.log(avg);

 /**
  * Q2. Reverse a given string (word by word)
  * 
  * 'have a great day' -> day great a have
  * 'good morning' -> morning good
  * 'Learn' -> Learn
  * 
  * 
  */
 let str2 = 'have a great day'   // day great a have
 let reverseStr2 = '';
 let reverseStr3 = [];
 let newArr = str2.split(' ');

 for (let i = newArr.length-1; i >= 0; i--){
    reverseStr3[newArr.length-1-i] = newArr[i];
    console.log(reverseStr3);
 }
 console.log(`reverseStr2 -> ${reverseStr3.join(' ')}`);   // day great a have
 
 
 
 /**
  * Q3. Create abbreviation for a sentence
  * 
  * 'you live Only once' -> YLOO
  * 'you Never waLK ALONe every day' -> YNWAED
  * 'good Morning' -> 'GM'
  * 'hello dear, how are you doing?' -> HDHAYD
  */
 let str3 = 'hello dear, how are you doing?';
 let abbr = '';
 
 let str3toArr = str3.split(' ');
 for ( i=0; i < str3toArr.length ; i++){
    let char = str3toArr[i].substring(0,1);
    abbr += char.toUpperCase();
 }
 console.log(`abbr -> ${abbr}`);