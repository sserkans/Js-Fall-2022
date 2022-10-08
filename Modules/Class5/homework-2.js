/**
 * Due date : Oct-9 (Sun) eod
 */

 
 /**
  * if the length of sentence1 is greater than or equals to 10
  *      assign 15 in the result1
  * otherwise
  *      assign 10 in the result1
  */

   const sentence1 = 'Helloooo';
   let result1 = 0;
   result1 = sentence1.length >= 10 ? 15:10;

   console.log(`\n\nresult1 -> ${result1}`);
 
 
 /**
  * replace all instances of a or A with 'Alpha', print the result in console.
  */

 const sentence2 = 'Pages That you vIeW in tHIs WinDOw wont apPeAr in the broWSer history AND thEY wont LEaVE other TRACes';
 console.log(sentence2.replace(/A/ig, 'Alpha'));

 
 /**
  * print the result in console:
  * 1. the length of sentence-3
  * 2. does sentence-3 starts with 'HeaLTh' (ignore cases)
  * 3. does sentence-3 contains with 'Body' (ignore cases)
  * 4. index of 'BoDy' in sentence3  (ignore cases)
  * 5. the last-character in sentence-3
  * 6. word 'BoDy' is present only once. (true or false)
  */

  const sentence3 = "HeAlTh wAs BoDy BoDy BoDy EArlIer said To Be the AbILitY of the bOdY funcTiOnInG WElL.";

  console.log(sentence3.length);

  console.log(sentence3.toLowerCase().startsWith('HeaLTh'.toLowerCase()));

  console.log(sentence3.toLowerCase().includes('Body'.toLowerCase()));

  console.log(sentence3.toLowerCase().indexOf('BoDy'.toLowerCase()));

  console.log(sentence3.charAt(sentence3.length-1));

  console.log(sentence3.match(/BoDy/ig).length < 2);




