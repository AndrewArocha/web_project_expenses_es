let budgetValue = 0;
let totalExpensesValue = 0;
let balanceColor = "green";

let expenseEntries = [
  ["groceries", 33],
  ["restaurants", 50],
  ["transport", 12],
  ["home", 70],
  ["subscriptions", 14],
  ["groceries", 28],
  ["subscriptions", 12],
];

for (let i = 0; i < expenseEntries.length; i++) {
    totalExpensesValue += expenseEntries[i][1];
}

function calculateAverageExpense () {
    if (expenseEntries.length === 0) {
        return 0;
    } else {
        return totalExpensesValue / expenseEntries.length;
    }
}

function calculateBalance () {
    return budgetValue - totalExpensesValue
}

function updateBalanceColor () {
    if (calculateBalance() < 0) {
        balanceColor = "red"
    } else if (calculateBalance() < budgetValue * 0.25) {
        balanceColor = "orange"
    } else {
         balanceColor = calculateBalance()
    }
}

function calculateCategoryExpenses (category) {
    let categoryTotal = 0;    
    for (let i = 0; i < expenseEntries.length; i++) {
        const expense = expenseEntries[i]
    if (expense[0] === category) {
        categoryTotal+=expense[1]
    }
    }
    return categoryTotal;
    }