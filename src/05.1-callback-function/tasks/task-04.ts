/**
 * An LMS stores assignment scores:
 */
const scores = [92, 68, 84, 73, 95, 61, 88];
/**
 * The LMS needs to perform different analyses:
 * 1. Determine whether each student passed. Passing grade is 70.
 * 2. Convert each score into a grade.
 * | Score | Grade |
 * | ----- | ----- |
 * | ≥ 90  | A     |
 * | ≥ 80  | B     |
 * | ≥ 70  | C     |
 * | < 70  | D     |
 * 
 * 3. Calculate a score after adding 5 bonus points.
 * 4. Determine whether the score is considered excellent. 
 * Score with more than 90 will be "Excellent", otherwise "Reguler".
 * 
 * 
 * Instead of creating four separate loops, create a reusable function that receives a callback responsible for transforming a score.
 */

function processScores(
    scores: number[],
    callback: (score: number) => void
): void {
    scores.forEach(score => {
        callback(score);
    });
}

function checkPassing(score: number): void {
    let result: string;
    if (score >= 70) {
        result = "Passed";
    } else {
        result = "Failed";
    }
    console.log(`${score} - ${result}`);
}

function convertToGrade(score: number): void {
    let grade: string;
    if (score >= 90) {
        grade = "A";
    } else if (score >= 80) {
        grade = "B";
    } else {
        grade = "D";
    }
    console.log(`${score} - Grade: ${grade}`);
}

function addBonus(score: number): void {
    const bonusScore = score + 5;
    console.log(`${score} + 5 bonus points = ${bonusScore}`);
}

function checkExcellent(score: number): void {
    let result: string;
    if (score > 90) {
        result = "Excellent";
    } else {
        result = "Regular";
    }
    console.log(`${score} - ${result}`);
}

processScores(scores, checkPassing);
processScores(scores, convertToGrade);
processScores(scores, addBonus);
processScores(scores, checkExcellent);