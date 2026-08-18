/**
 * A company has a simple data-processing engine used to analyze transaction records.
 */
type status = "paid" | "pending" | "cancelled"

type Transaction = {
    id: string
    customer: string
    amount: number
    status: status
}

const transactions: Transaction[] = [
    {
        id: "TRX001",
        customer: "Alya",
        amount: 850000,
        status: "paid"
    },
    {
        id: "TRX002",
        customer: "Budi",
        amount: 1250000,
        status: "pending"
    },
    {
        id: "TRX003",
        customer: "Citra",
        amount: 450000,
        status: "paid"
    },
    {
        id: "TRX004",
        customer: "Dimas",
        amount: 2100000,
        status: "paid"
    },
    {
        id: "TRX005",
        customer: "Eka",
        amount: 780000,
        status: "cancelled"
    }
];

/** TASKS:
 * - Extract customer's name only in array
 * - Determine Transaction Category with rules below:
 *   - ≥ Rp2,000,000 → HIGH VALUE
 *   - ≥ Rp1,000,000 → MEDIUM VALUE
 *   - < Rp1,000,000 → LOW VALUE
 * - Calculate platform fee:
 *   - Paid transactions → 2%
 *   - Pending transactions → 1%
 *   - Cancelled transactions → 0%
 */


function processTransactions<T>(
    array: Transaction[],
    callback: (transaction: Transaction) => T
): T[] {
    return array.map(transaction => callback(transaction));
}

function extractCustomerName(selectedTransaction: Transaction): { name: string } {
    return { name: selectedTransaction.customer };
}

function getTransactionCategory(selectedTransaction: Transaction): Transaction &{category: string } {
    let category: string;
    if (selectedTransaction.amount >= 2000000) {
        category = "HIGH VALUE";
    } else if (selectedTransaction.amount >= 1000000) {
        category = "MEDIUM VALUE";
    } else {
        category = "LOW VALUE";
    }
    return { ...selectedTransaction, category};
}

function calculatePlatformFee(selectedTransaction: Transaction): Transaction & { platformFee: number } {
    let platformFee: number;
    if (selectedTransaction.status === "paid") {
        platformFee = selectedTransaction.amount * 0.02;
    } else if (selectedTransaction.status === "pending") {
        platformFee = selectedTransaction.amount * 0.01;
    } else {
        platformFee = 0;
    }
    return { ...selectedTransaction, platformFee };
}

let customerNames = processTransactions(transactions, extractCustomerName);
let transactionCategories = processTransactions(transactions, getTransactionCategory);
let platformFees = processTransactions(transactions, calculatePlatformFee);

console.log("Customer Names:", customerNames);
console.log("Transaction Categories:", transactionCategories);
console.log("Platform Fees:", platformFees);