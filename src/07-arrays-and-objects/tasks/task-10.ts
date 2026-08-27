/**
 * An online exam has students and questions.
 * Tasks:
 * 1. Calculate each student's score (each correct answer get 25 points)
 * 2. Determine each student's correct answer, exp: [{student:"Andi", correct:0, wrong: 4}]
 * 3. Calculate the average score for each category.
 * 4. Generate final exam analytics
 * expeced result: {
        totalStudents: 3,
        averageScore: 66.67,
        highestScore: 100,
        lowestScore: 50,
        passedStudents: 1,
        failedStudents: 2,
        passRate: 33.33
    }
 */
const questions = [
    {
        id: 1,
        question: "What is TypeScript?",
        correctAnswer: "A",
        category: "TypeScript",
    },
    {
        id: 2,
        question: "Which method transforms an array?",
        correctAnswer: "B",
        category: "Array",
    },
    {
        id: 3,
        question: "Which method filters an array?",
        correctAnswer: "C",
        category: "Array",
    },
    {
        id: 4,
        question: "What does reduce() do?",
        correctAnswer: "D",
        category: "Array",
    },
];

const submissions = [
    {
        student: "Andi",
        answers: [
            { questionId: 1, answer: "A" },
            { questionId: 2, answer: "B" },
            { questionId: 3, answer: "C" },
            { questionId: 4, answer: "D" },
        ],
    },
    {
        student: "Budi",
        answers: [
            { questionId: 1, answer: "B" },
            { questionId: 2, answer: "B" },
            { questionId: 3, answer: "A" },
            { questionId: 4, answer: "D" },
        ],
    },
    {
        student: "Citra",
        answers: [
            { questionId: 1, answer: "A" },
            { questionId: 2, answer: "C" },
            { questionId: 3, answer: "C" },
            { questionId: 4, answer: "B" },
        ],
    },
];


const studentsWithScores = submissions.map(submission => {
    const correctAnswers = submission.answers.filter(answer => {
        const question = questions.find(q => q.id === answer.questionId);
        return question && question.correctAnswer === answer.answer;
    }).length;

    const score = correctAnswers * 25;
    return {
        student: submission.student,
        score: score,
        correct: correctAnswers,
        wrong: submission.answers.length - correctAnswers
    };
});

const averageScore = (studentsWithScores.reduce((total, student) => total + student.score, 0) / studentsWithScores.length).toFixed(2) as unknown as number;

const highestScore = Math.max(...studentsWithScores.map(student => student.score));

const lowestScore = Math.min(...studentsWithScores.map(student => student.score));

const passedStudents = studentsWithScores.filter(student => student.score >= 75).length;

const failedStudents = studentsWithScores.filter(student => student.score < 75).length;

const passRate = ((passedStudents / studentsWithScores.length) * 100).toFixed(2);

const scoresByCategory: { [category: string]: { totalScore: number, count: number , average: number } } = {};
submissions.forEach(submission => {
    submission.answers.forEach(answer => {
        const question = questions.find(q => q.id === answer.questionId);
        if (question) {
            const category = question.category;
            if (!scoresByCategory[category]) {
                scoresByCategory[category] = { totalScore: 0, count: 0, average: 0 };
            }
            scoresByCategory[category].count++;
            if (answer.answer === question.correctAnswer) {
                scoresByCategory[category].totalScore += 25;
            }
            scoresByCategory[category].average = (scoresByCategory[category].totalScore / scoresByCategory[category].count).toFixed(2) as unknown as number;
        }
        
    });
});


console.log("Students with Scores:", studentsWithScores);