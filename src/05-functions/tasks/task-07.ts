/**
 * A university stores enrollment information at following array
 * The university needs a report containing:
 * - Total students
 * - Active students
 * - Inactive students
 * - Software Engineering students
 * - Networking students
 * - Multimedia students
 * 
 * Complete following functions!
 */

const students = [
  {
    name: "Alya",
    major: "Software Engineering",
    active: true
  },
  {
    name: "Budi",
    major: "Networking",
    active: false
  },
  {
    name: "Citra",
    major: "Software Engineering",
    active: true
  },
  {
    name: "Dimas",
    major: "Multimedia",
    active: true
  },
  {
    name: "Eka",
    major: "Networking",
    active: false
  }
];

function countActiveStudents() {
  let activeCount = students.filter(student => student.active).length;
  return activeCount;
}

function countInactiveStudents(){
 let inactiveCount = 0;
  students.forEach((student) => {
    if (!student.active) {
      inactiveCount++;
    } 
  });
  return inactiveCount;
}

function countStudentsByMajor(major: string){
  let count = 0;
  students.forEach((student) => {
    if (student.major === major) {
      count++;
    }
  });
  return count;
}

function printEnrollmentReport(){
  console.log(`Total students: ${students.length}`);
  console.log(`Active students: ${countActiveStudents()}`);
  console.log(`Inactive students: ${countInactiveStudents()}`);
  console.log(`Software Engineering students: ${countStudentsByMajor("Software Engineering")}`);
  console.log(`Networking students: ${countStudentsByMajor("Networking")}`);
  console.log(`Multimedia students: ${countStudentsByMajor("Multimedia")}`);
}

printEnrollmentReport();