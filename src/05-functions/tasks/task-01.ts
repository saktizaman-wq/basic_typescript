/**
 * A teacher wants to calculate students' final grades automatically. Instead of writing the same formula multiple times, the teacher asks the developer to create a reusable function.
 * The final grade is calculated using the following formula:
 * - Assignment: 30%
 * - Midterm Exam: 30%
 * - Final Exam: 40%
 * 
 * Three students have the following scores:
 * | Student | Assignment | Midterm | Final |
 * | ------- | ---------: | ------: | ----: |
 * | Alya    |         85 |      80 |    92 |
 * | Budi    |         78 |      75 |    81 |
 * | Citra   |         90 |      88 |    95 |
 * 
 * The function should return the calculated final grade.
 * Student Tasks:
 * 1. Create a function named calculateFinalGrade.
 * 2. The function must receive:
 *  - assignment score
 *  - midterm score
 *  - final exam score
 * 3. Return the final grade.
 * 4. Call the function for each student.
 * 5. Display every student's final grade.

 */

let students = [
  {
    name: "Alya",
    assignment: 85,
    midterm: 80,
    final: 92
  },
  {
    name: "Budi",
    assignment: 78,
    midterm: 75,
    final: 81
  },
  {
    name: "Citra",
    assignment: 90,
    midterm: 88,
    final: 95
  }
];

function calculateFinalGrade(assignment: number, midterm: number, final: number): number {
  return assignment * 0.3 + midterm * 0.3 + final * 0.4;
}

students.forEach(student => {
  const finalGrade = calculateFinalGrade(student.assignment, student.midterm, student.final);
  console.log(`${student.name}: ${finalGrade.toFixed(2)}`);
});