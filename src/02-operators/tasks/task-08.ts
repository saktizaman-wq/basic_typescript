/**
 * A smart home monitors electricity usage every day.
 * Today's information:
 * | Information               | Value |
 * | ------------------------- | ----- |
 * | Previous Meter            | 25640 |
 * | Current Meter             | 25892 |
 * | Electricity Price per kWh | 1650  |
 * | Solar Panel Installed     | Yes   |
 * | Energy Saving Mode        | No    |
 * 
 * Business Rules
 * - Electricity usage is calculated from the meter difference.
 * - Houses with solar panels receive a 20% discount.
 * - Houses receive an additional 5% discount if Energy Saving Mode is enabled.
 * - A house qualifies for the Green Energy Program only if:
 *      - Solar panel is installed
 *      - Energy consumption is below 300 kWh
 *      - Energy Saving Mode is enabled
 * 
 * The system must calculate:
 * - Total energy consumption
 * - Electricity bill
 * - Final bill
 * - Green Energy Program eligibility
 */


class SmartHome {
    previousMeter: number;
    currentMeter: number;
    solarPanelInstalled: boolean;
    energySavingMode: boolean;
    electricityUsage: number;
    pricePerKWh: number = 1650;
    IsGreenEnergyProgramEligible: boolean = false;
    ElectricityBill: number = 0;

    constructor(previousMeter: number, currentMeter: number, solarPanelInstalled: boolean, energySavingMode: boolean) {
        this.previousMeter = previousMeter;
        this.currentMeter = currentMeter;
        this.electricityUsage = currentMeter - previousMeter;
        this.solarPanelInstalled = solarPanelInstalled;
        this.energySavingMode = energySavingMode;
        this.IsGreenEnergyProgramEligible = this.solarPanelInstalled && this.electricityUsage < 300 && this.energySavingMode;
    }

    calculateElectricityBill(): number {
        let bill = this.electricityUsage * this.pricePerKWh;
        this.solarPanelInstalled ? bill *= 0.8 : null;
        this.energySavingMode ? bill *= 0.95 : null;
        this.ElectricityBill = bill;
        return bill;
    }

    printBill(): void {
        console.log(`Electricity Usage: ${this.electricityUsage} kWh`);
        console.log(`Electricity Bill: Rp ${this.ElectricityBill}`);
        console.log(`Green Energy Program Eligibility: ${this.IsGreenEnergyProgramEligible ? 'Eligible' : 'Not Eligible'}`);
    }
};


let home1 = new SmartHome(500000, 350000, true, false);
home1.printBill();
