//  Due: Fri (Oct 21)


/**
 * Q1. Print the object data as mentioned above.
 */
let student1_1 = {
    name : 'John Doe',
    state : 'NJ',
    age : 20,
    gender : 'M',
    paymentMethod : 'finance',
    anyExperience : true,
    pastJobs :[
        {
            companyName : 'ABC',
            numOfYears : 2,
            title : 'DEF'
        },
        {
            companyName : 'EFG',
            numOfYears : 3,
            title : 'HIJ'
        },
        {
            companyName : 'KLM',
            numOfYears : 4,
            title : 'NOP'
        }
    ],
    knownSkills: ['Java', 'Manual testing', 'Js basics', 'Programming', 'CS basics']
}

let totalPastJob = 0;
    
if (student1_1.anyExperience){
    for (let i= 0; i < student1_1.pastJobs.length; i++){
        totalPastJob+=1;
    }
    student1_1.pastJobs.unshift('Yes', totalPastJob);
} else
   student1_1.pastJobs.unshift('No');

let totalSkills= 0;
    for (let i= 0; i < student1_1.knownSkills.length; i++){
    totalSkills+=1;
    }

student1_1.knownSkills.unshift(totalSkills);

console.log(student1_1);

/*
    name : John Doe
    state : NJ
    age : 20
    gender : M
    paymentMethod : finance
    anyExperience : true
    pastJobs : Yes (3)
        companyName : ABC
        numOfYears : 2
        title : 'DEF'

        companyName : EFG
        numOfYears : 3
        title : 'HIJ'
        
        companyName : KLM
        numOfYears : 4
        title : 'NOP'
    knownSkills : 5 (Java, Manual testing, Js basics, Programming, CS basics)
*/

let student1_2 = {
    name : 'Eli hen',
    state : 'NY',
    age : 22,
    gender : 'F',
    paymentMethod : 'Paid',
    anyExperience : false,
    pastJobs : [],
    knownSkills: ['Java', 'Manual testing', 'CS basics']
}
 
let totalPastJob1 = 0;
   
let totalSkills1= 0;
    for (let i= 0; i < student1_2.knownSkills.length; i++){
    totalSkills1+=1;
    }
console.log(totalSkills1);

if (student1_2.anyExperience){
    for (let i= 0; i < student1_2.pastJobs.length; i++){
        totalPastJob1+=1;
    }
    student1_2.pastJobs.unshift('Yes', totalPastJob1);
} else
   student1_2.pastJobs.unshift('No');

   student1_2.knownSkills.unshift(totalSkills1);

   console.log(student1_2);
/*
    name : Eli hen
    state : NY
    age : 22
    gender : F
    paymentMethod : Paid
    anyExperience : false
    pastJobs : No
    knownSkills : 3 (Java, Manual testing, CS basics)
*/



/**
 * Q2: Print the index for SECOND occurrence of 'baseBalL' (Ignoring cases)
 * 
 * if BaseBall is NOT present in Array: print, Baseball is not present in the given array
 * 
 * if BaseBall is present Only once in Array: print, Baseball is present only once in the given array
 * 
 * if BaseBall is present two or more times in Array: print, Baseball has second occurrence at index-X
 *  
 */
let favSports_1 = ['Football', 'Soccer', 'Fishing', 'BASKETBALL', 'Ping pong', 'Swimming', 'Running'];

let favSports_2 = ['Football', 'Soccer', 'BaseBall', 'Ping pong', 'Rugby', 'BASKETBALL', 'Ping pong', 'Swimming', 'Running'];

let favSports_3 = ['Football', 'Soccer', 'Baseball', 'Fishing', 'Baseball', 'Ping pong', 'Baseball', 'Rugby', 'BASKETBALL', 'Ping pong', 'Swimming', 'Running'];


let occ = 0;
for ( const sName of favSports_1){
    
   
    
         
    
       
}



/**
 * Q3. Print the total number of past experience for a student
 * 
 * Assumption:
 * In studentObject, anyExperience-attribute will be true, if has any past-experience, 
 * otherwise anyExperience-attribute will be false
 * 
 * If student has any past experience, print :
 *      studentName has total X-years of experience
 * 
  * If student has NO past experience, print :
 *      studentName has no past experience
 */
let student3_1 = {
    name : 'John Doe',
    state : 'NJ',
    age : 20,
    gender : 'M',
    paymentMethod : 'finance',
    anyExperience : true,
    pastJobs : [
        {
            companyName : 'ABC',
            numOfYears : 2,
            title : 'DEF'
        },
        {
            companyName : 'EFG',
            numOfYears : 3,
            title : 'HIJ'
        },
        {
            companyName : 'KLM',
            numOfYears : 4,
            title : 'NOP'
        }
    ],
    knownSkills: ['Java', 'Manual testing', 'Js basics', 'Programming', 'CS basics']
}

let totalExperince = 0;

if (student3_1.anyExperience){
    for ( let i = 0 ; i < student3_1.pastJobs.length ; i++){
        totalExperince += student3_1.pastJobs[i].numOfYears
     }
    console.log(`${student3_1.name} has total ${totalExperince} years experience`);
   } 
else 
   console.log(`${student3_1.name} has no experience`);

let student3_2 = {
    name : 'Eli hen',
    state : 'NY',
    age : 22,
    gender : 'F',
    paymentMethod : 'Paid',
    anyExperience : false,
    pastJobs : [],
    knownSkills: ['Java', 'Manual testing', 'CS basics']
}


let totalExperince1 = 0;

if (student3_2.anyExperience){
    for ( let i = 0 ; i < student3_2.pastJobs.length ; i++){
        totalExperince1 += student3_2.pastJobs[i].numOfYears
     }
    console.log(`${student3_2.name} has total ${totalExperince1} years experience`);
   } 
else 
   console.log(`${student3_2.name} has no experience`);


































