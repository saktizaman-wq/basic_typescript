/**
 * An internet café charges customers Rp8,000 per hour. 
 * Customers are billed for every started hour. If the total playing time exceeds 5 hours, they receive a 15% discount.
 * Today, a customer used a computer for:
 * 7 hours and 35 minutes
 * 
 * 
 * You need to determine:
 * - Total playing time in minutes
 * - Remaining minutes after full hours
 * - Total billed hours
 * - Total payment before discount
 * - Discount amount
 * - Final payment
 */

class InternetCafeBilling {
  private RATE_PER_HOUR: number = 8000;
  private DISCOUNT_THRESHOLD: number = 5;
  private DISCOUNT_VALUE: number = 0.15;

  constructor(private hours: number, private minutes: number) {}

  public get totalPlayingTimeInMinutes(): number {
    return this.hours * 60 + this.minutes;
  }

  public get remainingMinutesAfterFullHours(): number {
    return this.totalPlayingTimeInMinutes % 60;
  }

  public get totalBilledHours(): number {
    return Math.ceil(this.totalPlayingTimeInMinutes / 60);
  }

  public get RawtotalPayment(): number {
    return this.totalBilledHours * this.RATE_PER_HOUR;
  }

  public get discountAmount(): number {
    return this.totalBilledHours > this.DISCOUNT_THRESHOLD
      ? this.RawtotalPayment * this.DISCOUNT_VALUE
      : 0;
  }
  public get finalPayment(): number {
    return this.RawtotalPayment - this.discountAmount;
  }

    public printBillingDetails(): void {
        console.log("Total Playing Time:", this.hours, "hours ", this.minutes, "minutes");
        console.log("Remaining Minutes after Full Hours:", this.remainingMinutesAfterFullHours);
        console.log("Total Billed Hours:", this.totalBilledHours);
        console.log("Total Payment before Discount:", this.RawtotalPayment);
        console.log("Discount Amount:", this.discountAmount);
        console.log("Final Payment:", this.finalPayment);
    }};

    let billing1 = new InternetCafeBilling(7, 35);
    billing1.printBillingDetails();