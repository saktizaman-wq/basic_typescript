/**
 * You are developing a simple exam analytics system.
 * Tasks: 
 * 1. Calculate student score (each correct answer get 20 points)
 * 2. Get students that pass (> 70)
 * 3. Find student who reach highest score 
 * 4. Calculate class's average score
 */

const students = [
    {
        id: 1,
        name: "Andi",
        answers: ["A", "B", "C", "A", "B"],
    },
    {
        id: 2,
        name: "Budi",
        answers: ["A", "C", "C", "A", "D"],
    },
    {
        id: 3,
        name: "Citra",
        answers: ["B", "B", "C", "A", "B"],
    },
];

const correctAnswers = ["A", "B", "C", "A", "B"];

const studentsWithScores = students.map(student => {
    const score = student.answers.reduce((total, answer, index) => {
        return total + (answer === correctAnswers[index] ? 20 : 0);
    }, 0);

    return { ...student, score };
});

const passingStudents = studentsWithScores.filter(student => student.score > 70).map(student => student.name);

const highestScoreStudent = studentsWithScores.reduce((highest, student) => {
    return student.score > highest.score ? student : highest;
}, {...studentsWithScores[0] });

const averageScore = studentsWithScores.reduce((total, student) => total + student.score, 0) / studentsWithScores.length;

console.log("Students with Scores:", studentsWithScores);
console.log("Passing Students:", passingStudents);
console.log("Highest Score Student:", highestScoreStudent.name);
console.log("Average Score:", averageScore);