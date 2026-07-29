/**
 * The warehouse checks customer orders before shipping based on array below.
 * 
 * Business Rules
 * An order is ready to ship only if:
 * - Payment has been completed.
 * - Stock is available.
 * 
 * Student Task:
 * Loop through every order and calculate:
 * - Number of orders ready to ship
 * - Number of unpaid orders
 * - Number of orders waiting for stock
 * - Display all order IDs that are ready to ship
 */
const orders = [
  { id: "ORD001", paid: true, stockAvailable: true },
  { id: "ORD002", paid: false, stockAvailable: true },
  { id: "ORD003", paid: true, stockAvailable: false },
  { id: "ORD004", paid: true, stockAvailable: true },
  { id: "ORD005", paid: false, stockAvailable: false },
  { id: "ORD006", paid: true, stockAvailable: true }
];

let readyToShipCount = 0;
let unpaidCount = 0;
let waitingForStockCount = 0;
let readyToShipOrders: string[] = [];

orders.forEach((order) => {
    if (order.paid && order.stockAvailable) {
        readyToShipCount++;
        readyToShipOrders.push(order.id);
    } else if (!order.paid) {
        unpaidCount++;
    } else {
        waitingForStockCount++;
    }
});

console.log(`Orders Ready to Ship: ${readyToShipCount}`);
console.log(`Unpaid Orders: ${unpaidCount}`);
console.log(`Orders Waiting for Stock: ${waitingForStockCount}`);
console.log(`Order IDs Ready to Ship: ${readyToShipOrders.join(", ")}`);