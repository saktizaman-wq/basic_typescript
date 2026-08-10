/**
 * A hospital stores patient information in the following array.
 * The hospital director requests a daily report containing:
 * - Total patients
 * - Total admitted patients
 * - Total discharged patients
 * - Number of patients in each department
 * - Highest hospital bill
 * - Lowest hospital bill
 * - Average hospital bill
 * - Total hospital revenue
 * - Names of admitted patients
 * 
 * Student Tasks
 * Design a program using multiple reusable functions.
 * 
 * Requirements
 * - Create at least 8 non-void functions.
 * - Create 1 void function to print the report.
 * - Each function should perform only one responsibility.
 * - printHospitalReport() must only display results.
 * - No duplicated calculations.
 */
const patients = [
    {
        id: "PT001",
        name: "Alya",
        age: 17,
        department: "Pediatrics",
        admitted: true,
        bill: 850000
    },
    {
        id: "PT002",
        name: "Budi",
        age: 45,
        department: "Cardiology",
        admitted: false,
        bill: 1200000
    },
    {
        id: "PT003",
        name: "Citra",
        age: 68,
        department: "Cardiology",
        admitted: true,
        bill: 2500000
    },
    {
        id: "PT004",
        name: "Dimas",
        age: 33,
        department: "Orthopedics",
        admitted: true,
        bill: 640000
    },
    {
        id: "PT005",
        name: "Eka",
        age: 14,
        department: "Pediatrics",
        admitted: false,
        bill: 350000
    }
];

function countTotalPatients() {
    return patients.length;
}

function countAdmittedPatients() {
    let admittedCount = 0;
    patients.forEach((patient) => {
        if (patient.admitted) {
            admittedCount++;
        }
    });
    return admittedCount;
}

function countDischargedPatients() {
    let dischargedCount = 0;
    patients.forEach((patient) => {
        if (!patient.admitted) {
            dischargedCount++;
        }
    });
    return dischargedCount;
}

interface DepartmentCount {
    name: string;
    count: number;
}

function countPatientsByDepartment(): DepartmentCount[] {
    let departments: DepartmentCount[] = [];

    for (const patient of patients) {
        const existingDept = departments.find(d => d.name === patient.department);

        if (existingDept) {
            existingDept.count++;
            departments.push({ name: patient.department, count: 1 });
        }
    }

    return departments;
}

function findHighestBill() {
    let highestBill = 0;
    patients.forEach((patient) => {
        if (patient.bill > highestBill) {
            highestBill = patient.bill;
        }
    });
    return highestBill;
}

function findLowestBill() {
    let lowestBill = Infinity;
    patients.forEach((patient) => {
        if (patient.bill < lowestBill) {
            lowestBill = patient.bill;
        }
    });
    return lowestBill;
}

function getTotalBill() {
    let totalBill = 0;
    patients.forEach((patient) => {
        totalBill += patient.bill;
    });
    return totalBill;
}

function calculateAverageBill() {
    let totalBill = getTotalBill();
    return totalBill / patients.length;
}

function getRevenue() {
    let totalRevenue = 0;
    patients.forEach((patient) => {
        totalRevenue += patient.bill;
    });
    return totalRevenue;
}

function getAdmittedPatientNames() {
    let admittedNames: string[] = [];
    patients.forEach((patient) => {
        if (patient.admitted) {
            admittedNames.push(patient.name);
        }
    });
    return admittedNames;
}

function printHospitalReport() {
    console.log(`Total patients: ${countTotalPatients()}`);
    console.log(`Total admitted patients: ${countAdmittedPatients()}`);
    console.log(`Total discharged patients: ${countDischargedPatients()}`);
    console.log(`Number of patients in each department:`);
    countPatientsByDepartment().forEach((dept) => {
        console.log(`  ${dept.name}: ${dept.count}`);
    });
    console.log(`Highest hospital bill: ${findHighestBill()}`);
    console.log(`Lowest hospital bill: ${findLowestBill()}`);
    console.log(`Average hospital bill: ${calculateAverageBill()}`);
    console.log(`Total hospital revenue: ${getRevenue()}`);
    console.log(`Names of admitted patients: ${getAdmittedPatientNames().join(", ")}`);
}

printHospitalReport();
