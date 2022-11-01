// Question - 3 - 50
let allStudentRecords_3 = [
    {
        id: 1,
        name: 'Adien owjh',
    },
    {
        id: 2,
        name: 'kristEn sole',
    },
    {
        id: 3,
        name: 'ReMA',
    },
    {
        id: 4,
        name: 'chess GamE',
    },
    {
        id: 5,
        name: 'mAYa',
    }
]
/**
 * Create a function to update first name for the student.
 * Student will provide the student-id and NEW FIRST NAME
 * 
 * if student is present in the records AND new FIRST name is different (or NOT EXACTLY present) than already present first name
 *      update the record with student's first name.
 *      print message -> Your name is updated successfully, new full name in the records: "firstName lastName"
 *      (show lastName if that was present already)
 * 
 * if student is present in the records AND new FIRST name is EXACTLY SAME as already present in the records
 *      Do not update the student name
 *      print message -> Provided New firstName is same as of in the records, full name in the records: "firstName lastName"
 *      (show lastName if that was present already)
 * 
 * if student-id is NOT present in the records
 *      Do not update the student name
 *      print message -> Invalid student id provided.
 */

function updateFirstName(sId, newFirstName, studentRecords) {
    for (let i = 0 ; i < studentRecords.length; i++){
        if (studentRecords[i].id === sId && studentRecords[i].name.includes(newFirstName)){
            return `Provided ${newFirstName} is same as of in the records, full name in the records: ${studentRecords[i].name}`;
        } else if ( studentRecords[i].id === sId && studentRecords[i].name !== newFirstName){
            studentRecords[i].name = newFirstName;
            return `Your name is updated successfully, new full name in the records: ${newFirstName}`
        } else if ( studentRecords[i].id !== sId) {
            return `Invalid student id provided.`
        } 
    }
}
    

console.log(updateFirstName(1, 'justin', allStudentRecords_3));

    // Your name is updated successfully, new full name in the records: "justin owjh"

console.log(updateFirstName(5, 'simmy', allStudentRecords_3));
    // Your name is updated successfully, new full name in the records: "simmy"

console.log(updateFirstName(6, 'sole', allStudentRecords_3));
    // Invalid student id provided.

console.log(updateFirstName(4, 'chess', allStudentRecords_3));
    // Provided New firstName is same as of in the records, full name in the records: "chess GamE" 

















