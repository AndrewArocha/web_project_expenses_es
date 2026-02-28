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
         balanceColor = "green"
    }
}

function calculateCategoryExpenses(category) {
    let categoryTotal = 0;

    for (const expense of expenseEntries) {
        if (expense[0] === category) {
            categoryTotal += expense[1];
        }
    }

    return categoryTotal;
}

function calculateLargestCategory() {
  const categories = ["groceries","restaurants","transport","home","subscriptions"];
  let categoriesData = [];

  let largestCategory = "";
  let largestAmount = 0;

  for (const category of categories) {
    const total = calculateCategoryExpenses(category);
    categoriesData.push([category,total])
  }

  for (let data of categoriesData) {
    const categoryItem = data[0];
    const categoryValue = data[1];

    if (categoryValue > largestAmount) {
        largestAmount = categoryValue
        largestCategory = categoryItem
    }
  }

  return largestCategory;
}

function addExpenseEntry(entry) {
    expenseEntries.push(entry);
    totalExpensesValue+= entry[1]
}
