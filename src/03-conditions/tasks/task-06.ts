/**
 * A hospital emergency department must determine the priority level of every arriving patient.
 * The hospital follows these rules:
 * 1. If the patient's condition is critical, they are immediately assigned to the Emergency Room.
 * 2. Otherwise, if the patient has an appointment:
 *  - Elderly patients (age ≥ 60) receive Priority Queue.
 *  - Other patients receive Regular Queue.
 * 3. Otherwise:
 *  - Patients with health insurance are assigned to the Insurance Registration Counter.
 *  - Patients without insurance are assigned to the General Registration Counter.
 * 
 * Today's patient information:
 * | Information        | Value      |
 * | ------------------ | ---------- |
 * | Patient Name       | Siti Rahma |
 * | Critical Condition | No         |
 * | Has Appointment    | Yes        |
 * | Age                | 67         |
 * | Has Insurance      | Yes        |
 * 
 * Tasks: 
 * 1. Declare all required variables.
 * 2. Implement the hospital workflow using conditional statements.
 * 3. Display the patient's destination.
 */


class Patient {
    name: string;
    isCriticalCondition: boolean;
    hasAppointment: boolean;
    age: number;
    hasInsurance: boolean;
    destination: string;

    constructor(name: string, isCriticalCondition: boolean, hasAppointment: boolean, age: number, hasInsurance: boolean) {
        this.name = name;
        this.isCriticalCondition = isCriticalCondition;
        this.hasAppointment = hasAppointment;
        this.age = age;
        this.hasInsurance = hasInsurance;
        this.destination = "";
    }

    assignDestination(): string {
        if (this.isCriticalCondition) {
            this.destination = "Emergency Room";
        } else if (this.hasAppointment) {
            if (this.age >= 60) {
                this.destination = "Priority Queue";
            } else {
                this.destination = "Regular Queue";
            }
        } else {
            if (this.hasInsurance) {
                this.destination = "Insurance Registration Counter";
            } else {
                this.destination = "General Registration Counter";
            }
        }
        return this.destination;
    }
}

let patient1 = new Patient("Siti Rahma", false, true, 67, true);
patient1.assignDestination();
console.log(`Patient Name: ${patient1.name} is heading to: ${patient1.destination}`);