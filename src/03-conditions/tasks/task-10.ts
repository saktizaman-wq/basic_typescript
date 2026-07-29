/**
 * A university allows students to register for advanced programming courses only if they satisfy all academic requirements.

Registration Process

Step 1 — Academic Status
The student must:
 - Be actively enrolled.
 - Have completed tuition payment.

If either requirement is not satisfied:
Registration Rejected

Otherwise, continue.

Step 2 — Academic Requirements
The student must:
- Pass Programming Fundamentals.
- Pass Database Systems.
- Have a GPA of at least 3.20.
If these requirements are satisfied, continue.
Otherwise:
Academic Requirements Not Met

Step 3 — Seat Availability
If seats are still available:
- Registration Successful
Otherwise:
- Added to Waiting List

Student Information:
| Information                     | Value       |
| ------------------------------- | ----------- |
| Student Name                    | Nadia Putri |
| Active Student                  | Yes         |
| Tuition Paid                    | Yes         |
| Passed Programming Fundamentals | Yes         |
| Passed Database Systems         | Yes         |
| GPA                             | 3.45        |
| Seats Available                 | No          |

Student Tasks
- Declare all variables.
- Implement the registration workflow.
- Use nested conditional statements.
- Display the final registration result.
 */


class Student {
    name: string;
    isActive: boolean;
    tuitionPaid: boolean;
    passedProgrammingFundamentals: boolean;
    passedDatabaseSystems: boolean;
    gpa: number;
    seatsAvailable: boolean;

    constructor(name: string, isActive: boolean, tuitionPaid: boolean, passedProgrammingFundamentals: boolean, passedDatabaseSystems: boolean, gpa: number, seatsAvailable: boolean) {
        this.name = name;
        this.isActive = isActive;
        this.tuitionPaid = tuitionPaid;
        this.passedProgrammingFundamentals = passedProgrammingFundamentals;
        this.passedDatabaseSystems = passedDatabaseSystems;
        this.gpa = gpa;
        this.seatsAvailable = seatsAvailable;
    }

    getRegistrationResult(): string {
        if (!this.isActive || !this.tuitionPaid) {
            return "Registration Rejected";
        }

        if (!this.passedProgrammingFundamentals || !this.passedDatabaseSystems || this.gpa < 3.20) {
            return "Academic Requirements Not Met";
        }

        if (this.seatsAvailable) {
            return "Registration Successful";
        } else {
            return "Added to Waiting List";
        }
    }
}

let student1 = new Student("Nadia Putri", true, true, true, true, 3.45, false);
console.log(`Student: ${student1.name}`);
console.log(`Registration Result: ${student1.getRegistrationResult()}`);