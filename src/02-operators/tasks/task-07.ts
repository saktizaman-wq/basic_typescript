/**
 * A hotel calculates a guest's payment based on the following information.
 * | Information          | Value  |
 * | -------------------- | ------ |
 * | Room Price per Night | 650000 |
 * | Nights Stayed        | 4      |
 * | Service Charge       | 120000 |
 * | Tax                  | 11%    |
 * | VIP Member           | Yes    |
 * 
 * Business Rules
 * - VIP guests receive a 12% room discount.
 * - Tax is calculated after the discount.
 * - Service charge is not discounted.
 * - The hotel also offers free breakfast if the guest stays at least 3 nights or is a VIP member.
 * 
 * The system must calculate:
 * - Room subtotal
 * - Discount
 * - Tax
 * - Final payment
 * - Whether the guest is eligible for free breakfast
 */

class RoomInformation  {
    private roomPricePerNight: number;
    private serviceCharge: number;
    private taxRate: number;

    constructor(roomPricePerNight: number, serviceCharge: number, taxRate: number) {
        this.roomPricePerNight = roomPricePerNight;
        this.serviceCharge = serviceCharge;
        this.taxRate = taxRate;
    }

    getroomPricePerNight = (): number => {return this.roomPricePerNight;};
    getserviceCharge = (): number => {return this.serviceCharge;};
    gettaxRate = (): number => {return this.taxRate;};
}

class GuestInformation {
    private  GuestName: string;
    private GuestID: string;
    private nightsStayed: number;
    private isVipMember: boolean;

    constructor(name: string, GuestID: string, nightsStayed: number, isVipMember: boolean) {
        this.GuestName = name;
        this.GuestID = GuestID;
        this.nightsStayed = nightsStayed;
        this.isVipMember = isVipMember;
    }

    getGuestName = (): string => {return this.GuestName;}
    getGuestID = (): string => {return this.GuestID;}
    getNightsStayed = (): number => {return this.nightsStayed;}
    getIsVipMember = (): boolean => {return this.isVipMember;}
};


class HotelBilling {
    private roomInfo: RoomInformation;
    private guestInfo: GuestInformation;

    constructor(roomInfo: RoomInformation, guestInfo: GuestInformation) {
        this.roomInfo = roomInfo;
        this.guestInfo = guestInfo;
    }

    public calculateRoomSubtotal(): number {
        return this.roomInfo.getroomPricePerNight() * this.guestInfo.getNightsStayed();
    }

    public calculateDiscount(): number {
        return this.guestInfo.getIsVipMember() ? this.calculateRoomSubtotal() * 0.12 : 0;
    }

    public calculateTax(): number {
        return (this.calculateRoomSubtotal() - this.calculateDiscount()) * this.roomInfo.gettaxRate();
    }

    public calculateFinalPayment(): number {
        return this.calculateRoomSubtotal() - this.calculateDiscount() + this.calculateTax() + this.roomInfo.getserviceCharge();
    }
    
    public isEligibleForFreeBreakfast(): boolean {
        return this.guestInfo.getNightsStayed() >= 3 || this.guestInfo.getIsVipMember();
    }

    public printBillingDetails(): void {
        console.log("Room Subtotal:", this.calculateRoomSubtotal());
        console.log("Discount:", this.calculateDiscount());
        console.log("Tax:", this.calculateTax());
        console.log("Final Payment:", this.calculateFinalPayment());
        console.log(this.isEligibleForFreeBreakfast() ? "Is" : "Isn't", " Eligible for Free Breakfast:");
    }
}


let room1 = new RoomInformation(650000, 120000, 0.11);
let guest1 = new GuestInformation("John Doe", "G001", 4, true);
let billing1 = new HotelBilling(room1, guest1);
billing1.printBillingDetails();