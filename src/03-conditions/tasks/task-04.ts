/**
 * A hotel determines room availability using the following rules.
 * First, the system checks whether rooms are still available.
 * If rooms are available:
 * - Premium members receive a free room upgrade.
 * - Regular customers receive the reserved room only.
 * 
 * If no rooms are available:
 * - Premium members are placed on the priority waiting list.
 * - Regular customers are informed that no rooms are available.
 * 
 * Today's reservation:
 * | Information    | Value       |
 * | -------------- | ----------- |
 * | Customer Name  | Nadia Putri |
 * | Premium Member | Yes         |
 * | Room Available | No          |
 * 
 * The system should display the appropriate message.
 * Student Tasks: 
 * 1. Declare all variables.
 * 2. Implement the logic using nested if statements.
 * 3. Display the reservation result.
 */


class Reservation {
  customerName: string;
  isPremiumMember: boolean;
  isRoomAvailable: boolean;


  constructor(customerName: string, isPremiumMember: boolean, isRoomAvailable: boolean) {
    this.customerName = customerName;
    this.isPremiumMember = isPremiumMember;
    this.isRoomAvailable = isRoomAvailable;
  }

  getReservationResult(): string {
    if (this.isRoomAvailable) {
      if (this.isPremiumMember) {
        return `Hello ${this.customerName}, your room is available and you have received a free room upgrade!`;
      }
      return `Hello ${this.customerName}, your room is available and you have reserved a standard room.`;
    } else {
      if (this.isPremiumMember) {
        return `Hello ${this.customerName}, unfortunately no rooms are available. As a premium member, you have been placed on the priority waiting list.`;
      }
      return `Hello ${this.customerName}, unfortunately no rooms are available.`;
    }
  }
}

let reservation = new Reservation("Nadia Putri", true, false);
console.log(reservation.getReservationResult());