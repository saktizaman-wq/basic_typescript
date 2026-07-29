/**
 * A university stores the final grades of students enrolled in the Backend Development course at array below.
 * Grade Categories
 * - A : 90–100
 * - B : 80–89
 * - C : 70–79
 * - D : below 70
 * 
 * Student Task Calculate:
 * - Number of A students
 * - Number of B students
 * - Number of C students
 * - Number of D students
 * - Highest score
 * - Lowest score
 * - Average score
 */

const students = [
    { name: "Alya", score: 88 },
    { name: "Budi", score: 71 },
    { name: "Citra", score: 95 },
    { name: "Dimas", score: 63 },
    { name: "Eka", score: 84 },
    { name: "Fajar", score: 79 },
    { name: "Gita", score: 92 },
    { name: "Hana", score: 67 }
];

let aCount = 0;
let bCount = 0;
let cCount = 0;
let dCount = 0;
let highestScore = students[0].score;
let lowestScore = students[0].score;
let totalScore = 0;

students.forEach((student) => {
    let gradeCategory: string;

    if (student.score >= 90) {
        gradeCategory = "A";
        aCount++;
    } else if (student.score >= 80) {
        gradeCategory = "B";
        bCount++;
    } else if (student.score >= 70) {
        gradeCategory = "C";
        cCount++;
    } else {
        gradeCategory = "D";
        dCount++;
    }

    if (student.score > highestScore) {
        highestScore = student.score;
    }
    if (student.score < lowestScore) {
        lowestScore = student.score;
    }

    totalScore += student.score;
});

let averageScore = totalScore / students.length;

console.log(`Number of A Students: ${aCount}`);
console.log(`Number of B Students: ${bCount}`);
console.log(`Number of C Students: ${cCount}`);
console.log(`Number of D Students: ${dCount}`);
console.log(`Highest Score: ${highestScore}`);
console.log(`Lowest Score: ${lowestScore}`);
console.log(`Average Score: ${averageScore.toFixed(2)}`);