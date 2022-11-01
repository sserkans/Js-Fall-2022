// Question - 2 - 30
/**
 * Create a function to convert all student-names into Titlecase.
 * Return the updated allStudentsData
 * 
 * const updateStudentRecord = titleCaseAllStudentNames(allStudentData_3)
 * console.log(updateStudentRecord)
 * 
 */
/**
 * Example:
 * 
 */
  
 /* 
 * output/Return:
 * [
 *      {
 *          id: 1,
 *          name: 'Harry Potter',
 *      },
 *      {
 *          id: 2,
 *          name: 'King Kong',
 *      },
 *      {
 *          id: 3,
 *          name: 'Lana Gere',
 *      },
 *      {
 *          id: 4,
 *          name: 'Chase Lan',
 *      },
 *      {
 *          id: 5,
 *          name: 'Maya Pasha',
 *      }
 * ]
 * 
 * 
 * let allStudentData_3 = [
 *      {
 *          id: 1,
 *          name: 'leo',
 *      },
 *      {
 *          id: 2,
 *          name: 'greg COlL',
 *      },
 *      {
 *          id: 3,
 *          name: 'Adien Row',
 *      },
 *      {
 *          id: 4,
 *          name: 'cheville jUSa',
 *      }
 * ]
 * 
 * output/Return:
 * [
 *      {
 *          id: 1,
 *          name: 'Leo',
 *      },
 *      {
 *          id: 2,
 *          name: 'Greg Coll',
 *      },
 *      {
 *          id: 3,
 *          name: 'Adien Row',
 *      },
 *      {
 *          id: 4,
 *          name: 'Cheville Jusa',
 *      }
 * ]
 **/
 let allStudentData_3 = [    
    {
       id: 1,
       name: 'haRrY poTteR',
    },
   {
       id: 2,
       name: 'KiNG koNG',
   }
   
]

 function titleCaseAllStudentNames(allStudentData) {
    newName = [];
    nameTitleCase = ''
    for( let i=0; i<allStudentData.length;i++){
        newName.push(allStudentData[i].name.toLowerCase().split(' '));
        console.log(newName); 
    }
    for ( let j = 0; j < newName.length; j++){
       nameTitleCase += newName[j].charAt(0).toUpperCase() + newName[j].slice(1) + ' '
        console.log(nameTitleCase);

    }  

}
console.log(titleCaseAllStudentNames(allStudentData_3));


/*let allStudentData2_1 = [
   {
       id: 1,
       name: 'haRrY',
   },
   {
       id: 2,
       name: 'KiNG',
   },
   {
       id: 3,
       name: 'laNa',
   },
   {
       id: 4,
       name: 'cHaSe',
   },
   {
       id: 5,
       name: 'mAYa',
   }
];


const updateStudentRecord2_1 = titleCaseAllStudentNames(allStudentData2_1)
console.log(updateStudentRecord2_1);
/**
* [
*      {
*          id: 1,
*          name: 'Harry Potter',
*      },
*      {
*          id: 2,
*          name: 'King Kong',
*      },
*      {
*          id: 3,
*          name: 'Lana Gere',
*      },
*      {
*          id: 4,
*          name: 'Chase Lan',
*      },
*      {
*          id: 5,
*          name: 'Maya Pasha',
*      }
* ]
*/


 //const updateStudentRecord2_2 = titleCaseAllStudentNames(allStudentData2_2)
 //console.log(updateStudentRecord2_2);
// /**
/* * 
*      {
*          id: 1,
*          name: 'Leo',
*      },
*      {
*          id: 2,
*          name: 'Greg Coll',
*      },
*      {
*          id: 3,
*          name: 'Adien Row',
*      },
*      {
*          id: 4,
*          name: 'Cheville Jusa',
*      }
* ]
*/
