/**
 * An LMS stores assignment submission data at following array.
 * Business Rules
 * - Passing score = 75
 * - Students who do not submit receive 0
 * - Submitted assignments below 75 require revision.
 * 
 * The principal requests a report showing:
 * - Total students
 * - Submitted assignments
 * - Missing assignments
 * - Passed students
 * - Students requiring revision
 * - Average score
 * - Highest score
 * - Lowest score
 * 
 * Student Tasks
 * 1. Design your own functions.
 * At minimum, your solution must contain:
 * - 7 non-void functions
 * - 1 void function to display the report.
 * 
 */
const submissions = [
    {
        student: "Alya",
        submitted: true,
        score: 90
    },
    {
        student: "Budi",
        submitted: false,
        score: 0
    },
    {
        student: "Citra",
        submitted: true,
        score: 84
    },
    {
        student: "Dimas",
        submitted: true,
        score: 72
    },
    {
        student: "Eka",
        submitted: false,
        score: 0
    },
    {
        student: "Fajar",
        submitted: true,
        score: 96
    }
];

function countTotalStudents() {
    return submissions.length;
}

function countSubmittedAssignments() {
    let submittedCount = 0;
    submissions.forEach((submission) => {
        if (submission.submitted) {
            submittedCount++;
        }
    });
    return submittedCount;
}

function countMissingAssignments() {
    let missingCount = 0;
    submissions.forEach((submission) => {
        if (!submission.submitted) {
            missingCount++;
        }
    });
    return missingCount;
}

function countPassedStudents() {
    let passedCount = 0;
    submissions.forEach((submission) => {
        if (submission.submitted && submission.score >= 75) {
            passedCount++;
        }
    });
    return passedCount;
}

function countStudentsRequiringRevision() {
    let revisionCount = 0;  
    submissions.forEach((submission) => {
        if (submission.submitted && submission.score < 75) {
            revisionCount++;
        }
    });
    return revisionCount;
}

function calculateAverageScore() {
    let totalScore = 0;
    let submittedCount = 0;
    submissions.forEach((submission) => {
        if (submission.submitted) {
            totalScore += submission.score;
            submittedCount++;
        }
    });
    return submittedCount > 0 ? totalScore / submittedCount : 0;
}

function findHighestScore() {
    let highestScore = 0;
    submissions.forEach((submission) => {
        if (submission.submitted && submission.score > highestScore) {
            highestScore = submission.score;
        }
    });
    return highestScore;
}

function findLowestScore() {
    let lowestScore = Infinity;
    submissions.forEach((submission) => {
        if (submission.submitted && submission.score < lowestScore) {
            lowestScore = submission.score;
        }
    });
    return lowestScore;
}

function displayReport() {
    console.log("Report:");
    console.log("Total Students:", countTotalStudents());
    console.log("Submitted Assignments:", countSubmittedAssignments());
    console.log("Missing Assignments:", countMissingAssignments());
    console.log("Passed Students:", countPassedStudents());
    console.log("Students Requiring Revision:", countStudentsRequiringRevision());
    console.log("Average Score:", calculateAverageScore().toFixed(2));
    console.log("Highest Score:", findHighestScore());
    console.log("Lowest Score:", findLowestScore());
}

displayReport();