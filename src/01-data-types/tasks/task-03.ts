/**
 * SMK Telkom Malang is developing a new Student Information System. 
 * Before students can use the system, the administrator must record each student's basic information. 
 * Every student has a unique student ID, a full name, an age, and a status indicating whether they are currently an active student.
 * 
 * Task:
 * 1. Define a proper type for the student information.
 * 2. Implement a type that you defined on 3 students data.
 * 
 * display the student data using console.log.
 */

class student {
  constructor(public name: string, 
  public studentId: string,
  public age: number,
  public isActive: boolean) {}
}


const studentNadia = new student("Nadia Putri", "ST2026045", 20, true);

console.log(`Student Name: ${studentNadia.name}`);
console.log(`Student ID: ${studentNadia.studentId}`);
console.log(`Age: ${studentNadia.age}`);
console.log(`Is Active: ${studentNadia.isActive}`);
