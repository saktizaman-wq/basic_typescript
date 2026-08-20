/**
 * A company evaluates employees based on several projects.
 * Tasks:
 * 1. Calculate each employee's average score format {name, averageScore}
 * 2. Find employees whose average score is above 85.
 * 3. Find employees who have at least one project with a score below 80.
 */
const employees = [
    {
        name: "Andi",
        department: "Backend",
        projects: [
            { name: "LMS", score: 90 },
            { name: "Payment", score: 85 },
            { name: "API", score: 95 },
        ],
    },
    {
        name: "Budi",
        department: "Frontend",
        projects: [
            { name: "Dashboard", score: 80 },
            { name: "Landing Page", score: 75 },
        ],
    },
    {
        name: "Citra",
        department: "Backend",
        projects: [
            { name: "LMS", score: 95 },
            { name: "API", score: 88 },
        ],
    },
];

const employeeWithAverageScores = employees.map(employee => ({
    name: employee.name,
    averageScore: employee.projects.reduce((total, project) => total + project.score, 0) / employee.projects.length,
}));

const employeesScoreAbove85 = employeeWithAverageScores.filter(employee => employee.averageScore > 85);

const employeesWithLowScore = employees.filter(employee => employee.projects.some(project => project.score < 80));

console.log("Employee with Average Scores:", employeeWithAverageScores);
console.log("Employees with Average Score Above 85:", employeesScoreAbove85);
console.log("Employees with at least one project score below 80:", employeesWithLowScore);