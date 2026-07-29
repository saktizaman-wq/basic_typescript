/**
 * An online marketplace sells thousands of products every day. 
 * To display complete product information, the system stores a product code, product name, selling price, 
 * stock quantity, product weight, average customer rating, and whether the product is currently discounted.
 * 
 * Task:
 * 1. Define a proper type for the product information.
 * 2. Implement a type that you defined on 3 products data.
 * 
 * display the product data using console.log.
 */

class Product {
  constructor(
    public productCode: string,
    public productName: string,
    public sellingPrice: number,
    public stockQuantity: number,
    public productWeight: number,
    public averageCustomerRating: number,
    public isDiscounted: boolean
  ) {}

  printProduct(): void {
    console.log(`Product Code: ${this.productCode}`);
    console.log(`Product Name: ${this.productName}`);
    console.log(`Selling Price: $${this.sellingPrice.toFixed(2)}`);
    console.log(`Stock Quantity: ${this.stockQuantity}`);
    console.log(`Product Weight: ${this.productWeight} kg`);
    console.log(`Average Customer Rating: ${this.averageCustomerRating}`);
    if (this.isDiscounted) {
      console.log(`The product ${this.productName} is currently discounted.`);
    } else {
      console.log(`The product ${this.productName} is not currently discounted.`);
    }
  }
}

const product1 = new Product("P001", "Wireless Headphones", 99.99, 50, 0.5, 4.5, true);
const product2 = new Product("P002", "Smartphone", 699.99, 30, 0.3, 4.7, false);
const product3 = new Product("P003", "Laptop", 1299.99, 20, 2.5, 4.8, true);

product1.printProduct();
product2.printProduct();
product3.printProduct();
