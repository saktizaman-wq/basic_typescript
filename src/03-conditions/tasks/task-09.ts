/**
 * A manufacturing company monitors production machines continuously.

Business Rules

If the machine is powered off:

Display Machine Offline.

Otherwise, check its operating condition.

If the machine temperature exceeds 90°C:

If vibration level is High, display:
Emergency Shutdown
Otherwise:
Cooling Required

If the temperature is 90°C or below:

If production speed is below 80%, display:
Performance Warning
Otherwise:
Machine Operating Normally

Today's machine status:
| Information      | Value |
| ---------------- | ----- |
| Powered On       | Yes   |
| Temperature      | 95    |
| High Vibration   | No    |
| Production Speed | 92    |

Student Tasks
- Declare all variables.
- Translate every business rule into conditional statements.
- Display the final machine status.
 */


class Machine {
    poweredOn: boolean;
    temperature: number;
    highVibration: boolean;
    productionSpeed: number;

    constructor(poweredOn: boolean, temperature: number, highVibration: boolean, productionSpeed: number) {
        this.poweredOn = poweredOn;
        this.temperature = temperature;
        this.highVibration = highVibration;
        this.productionSpeed = productionSpeed;
    }

    getMachineStatus(): string {
        if (!this.poweredOn) {
            return "Machine Offline";
        }

        if (this.temperature > 90) {
            if (this.highVibration) {
                return "Emergency Shutdown";
            } else {
                return "Cooling Required";
            }
        } else {
            if (this.productionSpeed < 80) {
                return "Performance Warning";
            } else {
                return "Machine Operating Normally";
            }
        }
    }
}

const machine1 = new Machine(true, 95, false, 92);
console.log(`Machine Status: ${machine1.getMachineStatus()}`);