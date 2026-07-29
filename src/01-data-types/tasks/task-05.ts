/**
 * A software company records daily employee attendance. 
 * Every attendance record stores the employee's ID, employee name, date, check-in time, check-out time, 
 * total working hours, and whether the employee was present on that day.
 * 
 * Task:
 * 1. Define a proper type for the attendance information.
 * 2. Implement a type that you defined on 3 attendance data.
 * 
 * display the attendance data using console.log.
 */

class Attendance {
  constructor(
    public employeeId: string,
    public employeeName: string,
    public date: Date,
    public checkInTime: Date,
    public checkOutTime: Date,
    public isPresent: boolean
  ) {}
  public get totalWorkingHours(): number {
    if (this.isPresent) {
      const diff = this.checkOutTime.getTime() - this.checkInTime.getTime();
      return diff / (1000 * 60 * 60);
    }
    return 0;
  }

  printAttendance(): void {
    console.log(`Employee ID: ${this.employeeId}`);
    console.log(`Employee Name: ${this.employeeName}`);
    console.log(`Date: ${this.date.toDateString()}`);
    console.log(`Check-in Time: ${this.checkInTime.toLocaleTimeString()}`);
    console.log(`Check-out Time: ${this.checkOutTime.toLocaleTimeString()}`);
    console.log(`Total Working Hours: ${this.totalWorkingHours}`);
    console.log(`Is Present: ${this.isPresent}`);
  }
}

let attendance1 = new Attendance("EMP001", "John Doe", new Date("2024-06-01"), new Date("2024-06-01T09:00:00"), new Date("2024-06-01T17:00:00"), true);
let attendance2 = new Attendance("EMP002", "Jane Smith", new Date("2024-06-01"), new Date("2024-06-01T09:30:00"), new Date("2024-06-01T18:00:00"), true);
let attendance3 = new Attendance("EMP003", "Bob Johnson", new Date("2024-06-01"), new Date("2024-06-01T10:00:00"), new Date("2024-06-01T16:00:00"), false);

attendance1.printAttendance();
attendance2.printAttendance();
attendance3.printAttendance();