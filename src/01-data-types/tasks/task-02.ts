/**
 * An e-commerce platform is preparing a flash sale event. Before the discount calculation begins, 
 * the system temporarily stores several pieces of information as individual variables.
 * A customer wants to purchase a Mechanical Keyboard RGB with the product code KBR-001. 
 * The original price of the product is 850000 rupiahs, 
 * and the flash sale offers a 25% discount. The customer plans to buy 2 keyboards. 
 * Because the customer is a premium member, they are eligible for free shipping. 
 * The current stock available in the warehouse is 18 units.
 * 
 * Task:
 * 1. Identify every value that should become a variable.
 * 2. Choose an appropriate variable name for each value.
 * 3. Determine the correct data type.
 * 4. Declare all variables in TypeScript.
 * 5. Display the product data using console.log.
 */

class Product {
  constructor(
    public productName: string,
    public productCode: string,
    public originalPrice: number,
    public discountPercentage: number,
    public currentStock: number
  ) {}

  getDiscountedPrice(): number {
    const discountAmount = (this.originalPrice * this.discountPercentage) / 100;
    return this.originalPrice - discountAmount;
  }
}

class Order {
  constructor(
    public product: Product,
    public quantity: number,
    public isPremiumMember: boolean
  ) {}

  placeOrder(): void {
    this.product.currentStock -= this.quantity;
  }
}

const flashSaleProduct = new Product("Mechanical Keyboard RGB", "KBR-001", 850000, 25, 18);
const flashSaleOrder = new Order(flashSaleProduct, 2, true);
const discountedPrice = flashSaleOrder.product.getDiscountedPrice();

flashSaleOrder.placeOrder();

console.log(`Product Name: ${flashSaleOrder.product.productName}`);
console.log(`Product Code: ${flashSaleOrder.product.productCode}`);
console.log(`Original Price: ${flashSaleOrder.product.originalPrice}`);
console.log(`Discount Percentage: ${flashSaleOrder.product.discountPercentage}%`);
console.log(`Quantity: ${flashSaleOrder.quantity}`);
console.log(`Is Premium Member: ${flashSaleOrder.isPremiumMember}`);
console.log(`Current Stock: ${flashSaleOrder.product.currentStock}`);
console.log(`Discounted Price: ${discountedPrice}`);