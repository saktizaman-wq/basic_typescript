/**
 * SMK Telkom Malang calculates each student's final score using several assessment components. 
 * Before calculating the final grade, the system stores every assessment score as a separate variable. 
 * The homeroom teacher entered the following information for one student. 
 * The student named Nadia Putri has a student ID of ST2026045. She earned 88.5 on assignments, 
 * 84 on the midterm exam, and 91.5 on the final exam. Because she submitted every assignment before the deadline, 
 * she received an attendance score of 100. The school also records that Nadia participates in extracurricular activities, 
 * so this information should also be stored.
 * 
 * Task:
 * 
 * 1. dentify all values that should be stored as variables.
 * 2. Determine the most appropriate data type for each variable.
 * 3. Create the variable declarations using TypeScript.
 * 4. Display the student data using console.log.
 */




class studentGrade {
  constructor(public name: string, 
  public studentId: string,
  public assignments: number,
  public midtermExam: number,
  public finalExam: number,
  public attendance: number,
  public extracurricular: boolean) {}
}


const studentNadia = new studentGrade("Nadia Putri", "ST2026045", 88.5, 84, 91.5, 100, true);

console.log(`Student Name: ${studentNadia.name}`);
console.log(`Student ID: ${studentNadia.studentId}`);
console.log(`Assignments Score: ${studentNadia.assignments}`);
console.log(`Midterm Exam Score: ${studentNadia.midtermExam}`);
console.log(`Final Exam Score: ${studentNadia.finalExam}`);
console.log(`Attendance Score: ${studentNadia.attendance}`);
console.log(`Extracurricular Activities: ${studentNadia.extracurricular}`);