/**
 * An online marketplace wants to calculate the customer's final payment and reward points after checkout.
 * The customer purchases the following items:
 * | Product             |  Price | Quantity |
 * | ------------------- | -----: | -------: |
 * | Mechanical Keyboard | 850000 |        1 |
 * | Wireless Mouse      | 275000 |        2 |
 * | Monitor Stand       | 420000 |        1 |
 * 
 * Customer Information:
 * | Information       | Value                            |
 * | ----------------- | -------------------------------- |
 * | Voucher Value     | 100000                           |
 * | Premium Member    | Yes                              |
 * | Reward Point Rate | 1 point for every Rp50,000 spent |
 * 
 * Business Rules:
 * - Premium members receive 10% discount.
 * - Voucher is deducted after the membership discount.
 * - Reward points are calculated from the final payment before tax.
 * - VAT is 11%.
 * - Free shipping is available if:
 * - Premium member OR
 * - Final payment before tax exceeds Rp1,500,000.
 * 
 * The checkout system must calculate:
 * - Product subtotal
 * - Membership discount
 * - Voucher deduction
 * - Payment before tax
 * - VAT
 * - Final payment
 * - Reward points
 * - Free shipping eligibility

 */

class Product {
    name: string;
    price: number;
    quantity: number;

    constructor(name: string, price: number, quantity: number) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
}

class Customer {
    name: string;
    voucherEligibility: boolean;
    isPremiumMember: boolean;

    constructor(name: string, isPremiumMember: boolean, voucherEligibility: boolean) {
        this.name = name;
        this.isPremiumMember = isPremiumMember;
        this.voucherEligibility = voucherEligibility;
    }
}


class Checkout {
    boughtProducts: Product[];
    customer: Customer;
    rewardPointRate: number = 50000;
    vatRate: number = 0.11;
    isFreeShippingEligible: boolean = false;
    productSubtotal: number = 0;
    membershipDiscount: number = 0;
    voucherDeduction: number = 0;
    paymentBeforeTax: number = 0;
    vatPayment: number = 0;
    finalPayment: number = 0;
    rewardPointsGained: number = 0;

    constructor(products: Product[], customer: Customer) {
        this.boughtProducts = products;
        this.customer = customer;
        this.productSubtotal = this.boughtProducts.reduce((total, product) => total + (product.price * product.quantity), 0);
        this.membershipDiscount = this.customer.isPremiumMember ? this.productSubtotal * 0.1 : 0;
        this.voucherDeduction = this.customer.voucherEligibility ? 100000 : 0;
        this.paymentBeforeTax = this.productSubtotal - this.membershipDiscount - this.voucherDeduction;
        this.vatPayment = this.paymentBeforeTax * this.vatRate;
        this.finalPayment = this.paymentBeforeTax + this.vatPayment;
        this.rewardPointsGained = Math.floor(this.paymentBeforeTax / this.rewardPointRate);
        this.isFreeShippingEligible = this.customer.isPremiumMember || (this.paymentBeforeTax > 1500000);
    }

    printCheckoutSummary(): void {
        console.log(`Product Subtotal: Rp ${this.productSubtotal}`);
        console.log(`Membership Discount: Rp ${this.membershipDiscount}`);
        console.log(`Voucher Deduction: Rp ${this.voucherDeduction}`);
        console.log(`Payment Before Tax: Rp ${this.paymentBeforeTax}`);
        console.log(`VAT Payment: Rp ${this.vatPayment}`);
        console.log(`Final Payment: Rp ${this.finalPayment}`);
        console.log(`Reward Points Gained: ${this.rewardPointsGained} points`);
        console.log(`Free Shipping Eligibility: ${this.isFreeShippingEligible ? 'Eligible' : 'Not Eligible'}`);
    }
}
    