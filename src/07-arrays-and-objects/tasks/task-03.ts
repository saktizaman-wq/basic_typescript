/**
 * A school has attendance data below.
 * Tasks:
 * 1. Get all student's names who are present
 * expected array: ["Andi","Citra"]
 * 2. Get all students who are not present
 * expected array: ["Budi"]
 * 3. Get students who are late
 * expected array: ["Deni"]
 * 4. Generate array that contains {name, status}
 */

const students = [
    { id: 1, name: "Andi" },
    { id: 2, name: "Budi" },
    { id: 3, name: "Citra" },
    { id: 4, name: "Deni" },
];

const attendance = [
    { studentId: 1, status: "present" },
    { studentId: 2, status: "absent" },
    { studentId: 3, status: "present" },
    { studentId: 4, status: "late" },
];

const attendanceMap = new Map(attendance.map(a => [a.studentId, a.status]));

const joinedData = students.map(student => ({
    name: student.name,
    status: attendanceMap.get(student.id) || "unknown"
}));

const presentStudents = joinedData.filter(student => student.status === "present").map(student => student.name);
const absentStudents = joinedData.filter(student => student.status === "absent").map(student => student.name);
const lateStudents = joinedData.filter(student => student.status === "late").map(student => student.name);

console.log("Present Students:", presentStudents);
console.log("Absent Students:", absentStudents);
console.log("Late Students:", lateStudents);