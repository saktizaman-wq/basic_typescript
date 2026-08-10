/**
 * An LMS stores assignment submission information on array below.
 * Business Rules
 * - Students who do not submit automatically receive a score of 0.
 * - A passing score is 75.
 * - Submitted assignments with a score below 75 require revision.
 * 
 * Student Tasks using a loop for:
 * - Count students who submitted their assignment.
 * - Count students who did not submit.
 * - Count students who passed.
 * - Count students who must revise their assignment.
 * - Display the names of students who did not submit.
 * - Display the names of students who must revise.
 * - Calculate the class average score.
 */

const submissions = [
    { student: "Atha", submitted: true, score: 92 },
    { student: "Soni", submitted: false, score: 0 },
    { student: "Bayu", submitted: true, score: 78 },
    { student: "Agus", submitted: true, score: 65 },
    { student: "Sakti", submitted: false, score: 0 },
    { student: "Maha", submitted: true, score: 84 },
    { student: "Yana", submitted: true, score: 90 },
    { student: "Zaman", submitted: true, score: 73 }
];

let submittedCount = 0;
let notSubmittedCount = 0;
let passedCount = 0;
let reviseCount = 0;
let totalScore = 0;
let notSubmittedStudents: string[] = [];
let reviseStudents: string[] = [];

submissions.forEach((submission) => {
    if (submission.submitted) {
        submittedCount++;
        totalScore += submission.score;
        if (submission.score >= 75) {
            passedCount++;
        } else {
            reviseCount++;
            reviseStudents.push(submission.student);
        }
    } else {
        notSubmittedCount++;
        notSubmittedStudents.push(submission.student);
    }
});

let classAverage = totalScore / submittedCount;

console.log(`Students Who Submitted: ${submittedCount}`);
console.log(`Students Who Did Not Submit: ${notSubmittedCount}`);
console.log(`Students Who Passed: ${passedCount}`);
console.log(`Students Who Must Revise: ${reviseCount}`);
console.log(`Class Average Score: ${classAverage.toFixed(2)}`);
console.log(`Names of Students Who Did Not Submit: ${notSubmittedStudents.join(", ")}`);
console.log(`Names of Students Who Must Revise: ${reviseStudents.join(", ")}`);