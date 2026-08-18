/**
 * An LMS stores student performance data below.
 * The school wants to analyze students using different criteria.
 * A student is considered academically successful if:
 * - Score ≥ 75
 * - Attendance ≥ 90%
 * 
 * 
 * The teacher wants to generate:
 *  - Pass/fail status.
 *  - Academic performance category.
 *  - Attendance status.
 *  - Final recommendation.
 * 
 * Recommendation Rules:
 * ----------------------------------------------------------------|
 * | Condition                      | Recommendation               |
 * | ------------------------------ | ---------------------------- |
 * | Score ≥ 90 AND attendance ≥ 90 | Excellent                    |
 * | Score ≥ 75 AND attendance ≥ 90 | Good                         |
 * | Score ≥ 75 BUT attendance < 90 | Improve Attendance           |
 * | Score < 75                     | Improve Academic Performance |
 * ----------------------------------------------------------------|
 * 
 * Challenge:
 * - processStudents() should know nothing about these rules.
 * - It should only process the students and execute the callback.
 */

type Student = {
    name: string
    score: number
    attendance: number
};

const students: Student[] = [
    { name: "Alya", score: 92, attendance: 96 },
    { name: "Budi", score: 68, attendance: 88 },
    { name: "Citra", score: 84, attendance: 91 },
    { name: "Dimas", score: 73, attendance: 95 },
    { name: "Eka", score: 95, attendance: 82 },
    { name: "Fajar", score: 79, attendance: 97 }
];


function processStudents<T>(
    array: Student[],
    callback: (student: Student) => T
): T[] {
    return array.map(student => callback(student));
}

function getPassFailStatus(selectedStudent: Student): { name: string; status: string } {
    const status = selectedStudent.score >= 75 && selectedStudent.attendance >= 90 ? "Pass" : "Fail";
    return { ...selectedStudent, status};
}

function getAcademicPerformanceCategory(selectedStudent: Student): { name: string; category: string } {
const category = selectedStudent.score >= 90 ? "Excellent" :
    selectedStudent.score >= 75 ? "Good" : "Needs Improvement";
    return { ...selectedStudent, category };
}

function getAttendanceStatus(selectedStudent: Student): { name: string; attendanceStatus: string } {
    const attendanceStatus = selectedStudent.attendance >= 90 ? "Satisfactory" : "Needs Improvement";
    return { ...selectedStudent, attendanceStatus };
}

function getFinalRecommendation(selectedStudent: Student): { name: string; recommendation: string } {
    let recommendation: string;

    if (selectedStudent.score >= 90 && selectedStudent.attendance >= 90) {
        recommendation = "Excellent";
    } else if (selectedStudent.score >= 75 && selectedStudent.attendance >= 90) {
        recommendation = "Good";
    } else if (selectedStudent.score >= 75 && selectedStudent.attendance < 90) {
        recommendation = "Improve Attendance";
    } else {
        recommendation = "Improve Academic Performance";
    }

    return { ...selectedStudent, recommendation };
}

const studentsWithPassFailStatus = processStudents(students, getPassFailStatus);
const studentsWithAcademicPerformanceCategory = processStudents(students, getAcademicPerformanceCategory);
const studentsWithAttendanceStatus = processStudents(students, getAttendanceStatus);
const studentsWithFinalRecommendation = processStudents(students, getFinalRecommendation);

console.log(`STUDENTS WITH PASS/FAIL STATUS`);
console.log({ students: studentsWithPassFailStatus });
console.log(`STUDENTS WITH ACADEMIC PERFORMANCE CATEGORY`);
console.log({ students: studentsWithAcademicPerformanceCategory });
console.log(`STUDENTS WITH ATTENDANCE STATUS`);
console.log({ students: studentsWithAttendanceStatus });
console.log(`STUDENTS WITH FINAL RECOMMENDATION`);
console.log({ students: studentsWithFinalRecommendation });