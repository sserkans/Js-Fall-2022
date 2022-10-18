/**
 * Due date: Oct 16 eod
 */


/**
 * Q1:
 * 
 */ const sports = ['Football', 'Soccer','Baseball', 'Rugby'];
 /** 
 * if BASKETBALL is present but not in index-2, print "BASKETBALL is mentioned in the sports array"
 * if BASKETBALL is present in index-2, print "BASKETBALL is present at index-2"
 * if BASKETBALL is NOT present in the array, replace index-2 value with BASKETBALL and print the value which you replaced value.
 * 
 */

    keyWord = "BASKETBALL"

    if (sports.includes(keyWord) && sports[2] != keyWord){
        console.log(`${keyWord} is  mentioned in the sports array`);
    }
    else if (sports[2] == keyWord){
        console.log(`${keyWord} is present at Index-2`);
    }
    else {sports.includes(keyWord) == false
        replaceValue = sports[2];
        sports[2] = keyWord
        console.log(replaceValue);
        console.log(sports);
    }


/**
 * Q2:
 * 
 */ let planets = ['Earth', 'Mercury', 'Jupiter', 'Saturn', 'Mars', "Venus", 'Pluto'];
 /* 
 * if Earth is mentioned as first name in the array, print "Earth is mentioned in expected index"
 * otherwise add Earth as first name in the array, then print the entire array.
 * 
 */

 if (planets[0] == 'Earth'){
    console.log('Earth is mentioned in expected index')
    }
    else {planets[0] != 'Earth'
        planets.unshift('Earth')
        console.log(planets)
    }
    

    

/**
 * 
 * Q3:
 * 
 * create two variables, one is to store studentScore, and another one to store maxScore
 * based on the student percentage, print the grade.
 * 
 * Grade-A : 91-100% 
 * Grade-B : 81-90.99% 
 * Grade-C : 71-80.99%
 * Grade-D : 61-70.99%
 * Grade-E : 51-60.99%
 * Grade-F : less than 51%
 * 
 * if the studentScore is invalid or more than maxScore, print "Invalid student score"
 * if student score and maxScore are valid, then print "Your percentage is XX.yy and your Grade is Z"
 * 
 * studentScore = 100
 * maxScore = 150
 * 
 * (studentScore/maxStore)*100
 * 
 */

    let studentScore = 63.99;
    let maxScore = 100;

    let gradePercentage = (studentScore/maxScore) * 100;
        
       if (maxScore < studentScore || studentScore < 0){
            console.log("Invalid student score");
        }
        else if (gradePercentage >= 91){
            console.log(`Your percentage is ${gradePercentage} and your Grade is A`);
        }
        else if (gradePercentage >= 81){
            console.log(`Your percentage is ${gradePercentage} and your Grade is B`);
        }
        else if (gradePercentage >= 71){
            console.log(`Your percentage is ${gradePercentage} and your Grade is C`);
        }
        else if (gradePercentage >= 61){
            console.log(`Your percentage is ${gradePercentage} and your Grade is D`);
        }
        else if (gradePercentage >= 51){
            console.log(`Your percentage is ${gradePercentage} and your Grade is E`);
        }
        else {
            console.log(`Your percentage is ${gradePercentage} and your Grade is F`);
        }
      
      
    








/**
 * 
 * Q4:
 * 
 * Create a variable and store any value in it.
 * if the myNumber is divisible by 5, print "divisible by 5"
 * if the myNumber is divisible by 3, print "divisible by 3"
 * if the myNumber is divisible by 5 and by 3, print "divisible by 5 and 3"
 * if the myNumber is NOT divisible by 5 and by 3, print the value in myNumber
 *
 * 
 * myNumber = 
 * 
 * 10, 12, 15, 19
 * 
 * 
 */

let myNumber = 11;

if (myNumber%3 == 0 && myNumber%5 == 0){
    console.log('divisible by 5 and 3');
}
else if ( myNumber%3 == 0){
    console.log('divisible by 3');
}
else if (myNumber%5 == 0){
    console.log('divisible by 5');
}
else {console.log(myNumber)
}



 

/*let i = 0;

 while ( i < sports1.length){
    if (sports1[i].toLowerCase().includes('o') || sports1[i].length > 5 && sports1[i].length < 10){
        console.log(sports1[i]);
    }
    i++
 }*/


   
   