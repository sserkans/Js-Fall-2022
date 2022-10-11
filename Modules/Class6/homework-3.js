// Due date: Oct-13 (Thu) eod

/**
 * Q1: Print the length of the country name (without using string.length or length property from string-library)
 * 
 */
 let countryName = 'Switzerland';
 // countryName.length;  <-- not allowed

 let country = countryName.split('');

 let lengthOfCountry = country.length;

 console.log(lengthOfCountry);

 /**
  * console.log(countryName.split('').length);
  * /

 
 
 /**
  * Q2: find the number of words in the given sentence2
  */
 const sentence2 = "HeAlTh wAs EArlIer said To Be the AbILitY of the bOdY funcTiOnInG WElL.";

 let words = sentence2.split(' ');
 let numberOfWords = words.length;
 console.log(numberOfWords);
 /**
  * console.log(sentence2.split(' ').length);
  */
 

 /**
  * Q3: Create abbreviation for a 4-word sentence
  * 
  * 'you live Only once' -> YLOO
  * 'you Never waLK ALONe' -> YNWA
  */
 const sentence3 = 'you live Only once';
 let abbr = '';
 let sentence3Array = sentence3.split(' ');
 let firstChar = (sentence3Array[0].substring(0,1));
 let secondChar = (sentence3Array[1].substring(0,1));
 let thirdChar = (sentence3Array[2].substring(0,1));
 let fourthChar = (sentence3Array[3].substring(0,1));
 abbr = firstChar.concat(secondChar, thirdChar, fourthChar).toUpperCase();
 
 console.log(`abbr -> ${abbr}`);     // abbr -> YNWA
 
 /**
  * Q4: Convert the string value in to Titlecase
  * 
  * 'you live Only once' -> You Live Only Once
  * 'you Never waLK ALONe' -> You Never Walk Alone
  * 'have a GrEAT daY' -> 'Have A Great Day'
  */
 const sentence4 = 'you live Only once';
 let sentence4_Titlecase = '';

 let sentence4LowerCase = sentence4.toLowerCase();
 let sentence4LowerCaseSplit = sentence4LowerCase.split(' ');
 let word1 = sentence4LowerCaseSplit[0].charAt(0).toUpperCase() + sentence4LowerCaseSplit[0].slice(1);
 let word2 = sentence4LowerCaseSplit[1].charAt(0).toUpperCase() + sentence4LowerCaseSplit[1].slice(1);
 let word3 = sentence4LowerCaseSplit[2].charAt(0).toUpperCase() + sentence4LowerCaseSplit[2].slice(1);
 let word4 = sentence4LowerCaseSplit[3].charAt(0).toUpperCase() + sentence4LowerCaseSplit[3].slice(1);
 sentence4_Titlecase = word1.concat(' ',word2,' ',word3,' ',word4);
 console.log(`sentence4_Titlecase -> ${sentence4_Titlecase}`);   // sentence4_Titlecase -> Have A Great Day
 
 
 