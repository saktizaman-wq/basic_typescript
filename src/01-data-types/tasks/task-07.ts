/**
 * An online learning platform allows students to register for programming courses. 
 * Every registration stores information about both the student and the selected course. 
 * Student information includes student ID, full name, and grade level. 
 * Course information includes the course ID, course title, instructor name, 
 * and total learning hours. Finally, the registration also records the registration date and whether the payment has been completed.
 * 
 * Task:
 * 1. Define a proper type for the registration information.
 * 2. Implement a type that you defined on 3 registration data.
 * 
 * display the registration data using console.log.
 */

class Registration {
  constructor(
    public studentId: string,
    public studentName: string,
    public gradeLevel: string,
    public courseId: string,
    public courseTitle: string,
    public instructorName: string,
    public totalLearningHours: number,
    public registrationDate: Date,
    public isPaymentCompleted: boolean
  ) {}

    printRegistration(): void {
        console.log(`Student ID: ${this.studentId}`);
        console.log(`Student Name: ${this.studentName}`);
        console.log(`Grade Level: ${this.gradeLevel}`);
        console.log(`Course ID: ${this.courseId}`);
        console.log(`Course Title: ${this.courseTitle}`);
        console.log(`Instructor Name: ${this.instructorName}`);
        console.log(`Total Learning Hours: ${this.totalLearningHours}`);
        console.log(`Registration Date: ${this.registrationDate.toDateString()}`);
        if (this.isPaymentCompleted) {
            console.log(`Payment for the course ${this.courseTitle} has been completed.`);
        } else {
            console.log(`Payment for the course ${this.courseTitle} has not been completed.`);
        }
    }
}

const registration1 = new Registration("STU001", "Alice Johnson", "10th Grade", "CS101", "Introduction to Programming", "Dr. Smith", 40, new Date("2024-06-01"), true);
const registration2 = new Registration("STU002", "Bob Williams", "11th Grade", "CS102", "Data Structures", "Prof. Brown", 50, new Date("2024-06-02"), false);
const registration3 = new Registration("STU003", "Charlie Davis", "12th Grade", "CS103", "Algorithms", "Dr. Taylor", 60, new Date("2024-06-03"), true);

registration1.printRegistration();
registration2.printRegistration();
registration3.printRegistration();