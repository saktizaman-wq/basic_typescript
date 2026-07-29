/**
 * An airline automatically determines a passenger's check-in status.
 * Business Rules
 * Step 1
 * If the passenger has not checked in online, display:
 * "Please complete online check-in first.""
 * 
 * Otherwise, continue.
 * Step 2
 * If baggage weight exceeds 20 kg:
 * - Business Class → Extra baggage allowed.
 * - Economy Class → Additional baggage fee required.
 * 
 * Otherwise:
 * Proceed to boarding pass printing.
 * 
 * Passenger Information
 * | Information     | Value         |
 * | --------------- | ------------- |
 * | Passenger       | Fajar Nugroho |
 * | Online Check-in | Yes           |
 * | Cabin Class     | Economy       |
 * | Baggage Weight  | 24 kg         |
 * 
 * Student Tasks
 * 1. Declare all variables.
 * 2. Implement the airline decision process.
 * 3. Display the correct message.
 */


type cabinClass = "Business" | "Economy";

type passengerInfo = {
    name: string;
    onlineCheckIn: boolean;
    cabinClass: cabinClass;
    baggageWeight: number;
};


function checkInStatus(passenger: passengerInfo): string {
    if (!passenger.onlineCheckIn) {
        return "Please complete online check-in first.";
    }else {
        if (passenger.baggageWeight > 20) {
            if (passenger.cabinClass === "Business") {
                return "Extra baggage allowed.";
            } else if (passenger.cabinClass === "Economy") {
                return "Additional baggage fee required.";
            }
        } else {
            return "Proceed to boarding pass printing.";
        }
    }
    return "Invalid passenger information.";
}


const passenger1: passengerInfo = {
    name: "Fajar Nugroho",
    onlineCheckIn: true,
    cabinClass: "Economy",
    baggageWeight: 24,
}

const message = checkInStatus(passenger1);
console.log(`Passenger: ${passenger1.name}`);
console.log(`Check-in Status: ${message}`);