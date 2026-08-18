/**
 * An e-commerce platform receives orders from customers.
 */

type Order = {
    id: string
    customer: string
    total: number
    paid: boolean
}
const orders: Order[] = [
    {
        id: "ORD001",
        customer: "Alya",
        total: 850000,
        paid: true
    },
    {
        id: "ORD002",
        customer: "Budi",
        total: 1250000,
        paid: false
    },
    {
        id: "ORD003",
        customer: "Citra",
        total: 450000,
        paid: true
    },
    {
        id: "ORD004",
        customer: "Dimas",
        total: 2100000,
        paid: true
    }
];

/**
 * The order management system needs to process orders differently depending on the operation.
 * 1. Operation for status payment.
 * ORD001 → PAID
 * ORD002 → UNPAID
 * ...
 * 
 * 2. Determine Shipping Category.
 * Business rules:
 * - Total ≥ Rp1,500,000 → FREE SHIPPING
 * - Total ≥ Rp500,000 → STANDARD SHIPPING
 * - Otherwise → ECONOMY SHIPPING
 * 
 * 
 */

type SHIPPING_CATEGORY = "FREE SHIPPING" | "STANDARD SHIPPING" | "ECONOMY SHIPPING"
type ORDER_STATUS = "PAID" | "UNPAID"
type PaymentStatusOrder = Order & { status: ORDER_STATUS }
type ShippingCategoryOrder = Order & { shippingStatus: SHIPPING_CATEGORY }

function getPaymentStatus(selectedOrder: Order): PaymentStatusOrder {
    let status: ORDER_STATUS;
    if (selectedOrder.paid) {
        status = "PAID";
    } else {
        status = "UNPAID";
    }
    return { ...selectedOrder, status };
}


function getShippingCategory(selectedOrder: Order): ShippingCategoryOrder {
    let shippingStatus: SHIPPING_CATEGORY;
    if (selectedOrder.total >= 1500000) {
        shippingStatus = "FREE SHIPPING";
    } else if (selectedOrder.total >= 500000) {
        shippingStatus = "STANDARD SHIPPING";
    } else {
        shippingStatus = "ECONOMY SHIPPING";
    }
    return { ...selectedOrder, shippingStatus };
    }

function processOrder<T>(
    arr: Order[],
    callback: (order: Order) => T): T[] {
        return arr.map(order => callback(order));
}

const orderWithPaymentStatus = processOrder(orders, getPaymentStatus)
const orderWithShippingCategory = processOrder(orders, getShippingCategory)

console.log(`====== ORDER WITH PAYMENT STATUS ======`);
console.log({ orders: orderWithPaymentStatus })
console.log(`====== ORDER WITH SHIPPING CATEGORY ======`);
console.log({ orders: orderWithShippingCategory })