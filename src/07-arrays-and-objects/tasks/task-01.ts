/**
 * A teacher has a list of students and their exam scores below.
 * The teacher wants to analyze the exam results.
 * Tasks:
 * 1. Get an array containing only the student names.
 * expected array: ["Andi", "Budi", "Citra", "Deni", "Eka"]
 * 2. Get students who passed. Passing score is >= 70. 
 * expected array: [
 * { name: "Andi", score: 85 },
 * { name: "Citra", score: 91 },
 * { name: "Deni", score: 74 }
 * ]
 * 
 * 3. Find the student named "Citra".
 * 4. Calculate the average score.
 */

const students = [
  { name: "Andi", score: 85 },
  { name: "Budi", score: 62 },
  { name: "Citra", score: 91 },
  { name: "Deni", score: 74 },
  { name: "Eka", score: 55 },
];

let nameArray: string[] = students.map(student => student.name);
let passedStudents: { name: string; score: number }[] = students.filter(student => student.score >= 70);
let averageScore: number = students.reduce((sum, student) => sum + student.score, 0) / students.length;

function findStudentByName(name: string): { name: string; score: number } | undefined {
  return students.find(student => student.name === name);
}

let citra = findStudentByName("Citra");

console.log("Student Names:", nameArray);
console.log("Passed Students:", passedStudents);
console.log("Average Score:", averageScore);
console.log("Citra's Record:", citra);