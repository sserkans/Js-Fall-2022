const Members = require("./Members");
const Helper = require("./Helper");

    const courseData = [
        {
            cName : 'QA',
            cFee : 100
        },
         {
            cName : 'Front End',
            cFee : 200
        },
        {
            cName : 'Back End',
            cFee : 300
        },
        {
            cName : 'PM',
            cFee : 400
        }
    ]

class Students extends Members {

    // variables (Class/Field variables)
    studentData = {
        sId: 0,
        sCourseName: '',
        sTopicsCovered: '',
        sBalance: 0,
        sGrade: '',
    }

    static studentIdTracker = 100;

    /*
        functions
    */
    /**
     *      -> create function for activities:
     *          -> enrollment
     *          -> changeName
     *          -> changeCourse
     *          -> getProfile
     *          -> makePayment
     *          -> changeAddress
     *          -> dropFromCourse
     *          -> bestWishes
     */


    /**
     * -> enrollment
     *  age >= 16
     *      if not, do not enroll and show message, Student has to be of age 16 or above
     * 
     *  if invalid course name 
     *      do not enroll and show message, Please enter a valid course name. Course entered is "ABC"
     * 
     * if data is correct
     *      show message, Congratulations for enrolling in XYZ course
     *                    Your student id : SXXX
     * 
     * courseName, age
     */
    // number, 4-string
    constructor(age, courseName, name, email, address) {
        super();    // to execute parent constructor
        if (age <= 0 || courseName.length === 0 || name.length === 0 || email.length === 0 || address.length === 0) {
            throw 'incomplete data';
        } else {
            if (age < 16) {
                console.log('Student has to be of age 16 or above');
            } else {
                const cObject = this.verifyCourseName(courseName);
                if (!cObject) {
                    console.log(`Please enter a valid course name. Course entered is "${courseName}"`);
                } else {
                    // start enrollment process
                    this.memberData.mName = Helper.toTitleCase(name);
                    this.memberData.mAge = age;
                    this.memberData.mEmail = email;
                    this.memberData.mAddress = address;
                    this.studentData.sBalance = cObject.cFee;
                    this.studentData.sCourseName = cObject.cName;
                    Students.studentIdTracker++;
                    this.studentData.sId = `S${Students.studentIdTracker}`;
                    console.log(`Congratulations for enrolling in ${cObject.cName} course.\nStudent id: S${Students.studentIdTracker}`);
                }
            }
        }
    }

    /**
     * This function is to verify 
     *  if the courseName exists as one of the courses in the courseData
     * 
     * if courseName exists
     *      returns courseObject
     * otherwise
     *      returns undefined
     * 
     */
    verifyCourseName(courseName) {
        return courseData.find(
            cData => cData.cName.toUpperCase().localeCompare(courseName.toUpperCase()) === 0
        )
    }

    /**
     * -> getProfile
     * Show:
     * Profile:::
     * Id: student-id
     * Name: student-name
     * Email: student-email
     * Balance: student-balance
     * Address: student-address
     * 
     */
    getProfile(studentId) {
        console.log(
            `\n\t:::: Profile :::
            Id: ${this.studentData.sId}
            Name: ${this.memberData.mName}
            Email: ${this.memberData.mEmail}
            Balance: ${this.studentData.sBalance}
            ----------------------\n`
        );
    }

    // changeName
    // changeCourse
    // makePayment

    /**
     * bestWishes()
     * 
     * To send wishes/messages to Institute on behalf on all Students
     */
    static bestWishes(msg) {
        console.log(`On behalf of all students -> ${msg}`);
    }

    /*-> changeName
    *  student has to provide newName and their student-id as input
    *  if provided student-id is SAME as of this student's id
    *      if newName is NOT same as stored-name
    *          change name in studentData and show message, Name is changed to "newName" successfully.
    *      otherwise
    *          show message, You are already registered with same name.
    *  otherwise
    *      show message -> You have entered invalid id. Invalid id: SXXX
    */

    changeName (newStudentName, studentId){
        if ( studentId === this.studentData.sId){
            if (newStudentName !== this.memberData.mName){
                this.memberData.mName = newStudentName;
                console.log(`Name is changed to '${newStudentName}' successfully`);
            } else {
                console.log('You are already registered with same name.');
            }
        } else {
            console.log(`You have entered invalid id. Invalid id: ${studentId}`);
        }       
    }








}
module.exports = Students;

