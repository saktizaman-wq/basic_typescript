/**
 * An online learning platform stores course completion information.
 * The academy director wants a dashboard containing:
 * Completion Statistics:
 * - Total enrollments
 * - Completed enrollments
 * - Incomplete enrollments
 * - Completion percentage
 * 
 * Academic Statistics:
 * - Highest score
 * - Lowest score
 * - Average score
 * - Students with passing scores (≥ 75)
 * 
 * Course Statistics:
 * - Number of students enrolled in each course
 * - Average score for each course
 * 
 * Learning Statistics:
 * - Total learning hours
 * - Average learning duration
 * 
 * Student Tasks:
 * You must design your own program architecture.
 * Requirements
 * Your solution must contain:
 * - At least 10 non-void functions
 * - At least 2 void functions
 * - No duplicated calculations
 * - Each function must have one responsibility
 * - Every printed value must come from another function
 * - Use meaningful function names and parameters
 * Reuse existing functions whenever possible
 */

import { count } from "console";

const enrollments = [
    {
        student: "Alya",
        course: "TypeScript",
        completed: true,
        score: 91,
        duration: 38
    },
    {
        student: "Budi",
        course: "TypeScript",
        completed: false,
        score: 45,
        duration: 12
    },
    {
        student: "Citra",
        course: "Database",
        completed: true,
        score: 87,
        duration: 42
    },
    {
        student: "Dimas",
        course: "Backend",
        completed: true,
        score: 96,
        duration: 40
    },
    {
        student: "Eka",
        course: "Database",
        completed: false,
        score: 60,
        duration: 18
    },
    {
        student: "Fajar",
        course: "Backend",
        completed: true,
        score: 82,
        duration: 35
    },
    {
        student: "Gita",
        course: "TypeScript",
        completed: true,
        score: 88,
        duration: 36
    },
    {
        student: "Hana",
        course: "Backend",
        completed: false,
        score: 70,
        duration: 20
    }
];

interface Enrollment {
    student: string;
    course: string;
    completed: boolean;
    score: number;
    duration: number;
}

interface CourseCount {
    course: string;
    count: number;
}

interface AverageScoreByCourse {
    course: string;
    totalScore: number;
    count: number;
    averageScore?: number;
}



class enrolledClass<T extends Enrollment> {
    private enrollments: T[];

    constructor(enrollments: T[]) {
        this.enrollments = enrollments;
    }

    getEnrollments(): T[] {
        return this.enrollments;
    }

    getTotalEnrollments(): number {
        return this.enrollments.length;
    }

    getCompletedEnrollments(): number {
        let completedCount = 0;
        for (const enrollment of this.enrollments) {
            if (enrollment.completed) {
                completedCount++;
            }
        }
        return completedCount;
    }

    getIncompleteEnrollments(): number {
        let incompleteCount = 0;
        for (const enrollment of this.enrollments) {
            if (!enrollment.completed) {
                incompleteCount++;
            }
        }
        return incompleteCount;
    }
    
    getCompletionPercentage(): number {
        const total = this.getTotalEnrollments();
        const completed = this.getCompletedEnrollments();
        return (completed / total) * 100;
    }

    getHighestScore(): number {
        let highestScore = 0;
        for (const enrollment of this.enrollments) {
            if (enrollment.score > highestScore) {
                highestScore = enrollment.score;
            }
        }
        return highestScore;
    }

    getLowestScore(): number {
        let lowestScore = Infinity;
        for (const enrollment of this.enrollments) {
            if (enrollment.score < lowestScore) {
                lowestScore = enrollment.score;
            }
        }
        return lowestScore;
    }

    getTotalScore(): number {
        let totalScore = 0;
        for (const enrollment of this.enrollments) {
            totalScore += enrollment.score;
        }
        return totalScore;
    }

    getAverageScore(): number {
        const totalScore = this.getTotalScore();
        return totalScore / this.getTotalEnrollments();
    }

    getPassingStudents(): string[] {
        const passingStudents: string[] = [];
        for (const enrollment of this.enrollments) {
            if (enrollment.score >= 75) {
                passingStudents.push(enrollment.student);
            }
        }
        return passingStudents;
    }

    getStudentsCountByCourse(): CourseCount[] {
    let courses: CourseCount[] = [];

    for (const enrollment of this.enrollments) {
        const existingCourse = courses.find(c => c.course === enrollment.course);

        if (existingCourse) {
            existingCourse.count++;
        } else {
            courses.push({ course: enrollment.course, count: 1 });
        }
    }

    return courses;
    }

    getAverageScoreByCourse(): AverageScoreByCourse[] {
    let courses: AverageScoreByCourse[] = [];

    for (const enrollment of this.enrollments) {
        const existingCourse = courses.find(c => c.course === enrollment.course);

        if (existingCourse) {
            existingCourse.totalScore += enrollment.score;
            existingCourse.count++;
        } else {
            courses.push({ course: enrollment.course, totalScore: enrollment.score, count: 1 });
        }
    }

    for (const course of courses) {
        course.averageScore = course.totalScore / course.count;
    }

    return courses;
    }

    getTotalLearningHours(): number {
        let totalHours = 0;
        for (const enrollment of this.enrollments) {
            totalHours += enrollment.duration;
        }
        return totalHours;
    }

    getAverageLearningDuration(): number {
        const totalHours = this.getTotalLearningHours();
        return totalHours / this.getTotalEnrollments();
    }

    printCompletionStatistics(): void {
        console.log("Completion Statistics:");
        console.log(`Total enrollments: ${this.getTotalEnrollments()}`);
        console.log(`Completed enrollments: ${this.getCompletedEnrollments()}`);
        console.log(`Incomplete enrollments: ${this.getIncompleteEnrollments()}`);
        console.log(`Completion percentage: ${this.getCompletionPercentage().toFixed(2)}%`);
    }

    printAcademicStatistics(): void {
        console.log("Academic Statistics:");
        console.log(`Highest score: ${this.getHighestScore()}`);
        console.log(`Lowest score: ${this.getLowestScore()}`);
        console.log(`Average score: ${this.getAverageScore().toFixed(2)}`);
        console.log(`Students with passing scores (over 75) : ${this.getPassingStudents().join(", ")}`);
    }

    printCourseStatistics(): void {
        console.log("Course Statistics:");
        const courseCounts = this.getStudentsCountByCourse();
        for (const { course, count } of courseCounts) {
            console.log(`- ${course}: ${count} students`);
        }
    }

    printLearningStatistics(): void {
        console.log("Learning Statistics:");
        console.log(`Total learning hours: ${this.getTotalLearningHours()}`);
        console.log(`Average learning duration: ${this.getAverageLearningDuration().toFixed(2)} hours`);
    }

    printDashboard(): void {
        this.printCompletionStatistics();
        this.printAcademicStatistics();
        this.printCourseStatistics();
        this.printLearningStatistics();
    }
}

let enrolledClass1 = new enrolledClass(enrollments);

enrolledClass1.printDashboard();