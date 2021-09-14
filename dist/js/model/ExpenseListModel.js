class ExpenseListModel {
    constructor() {
        this._expenseList = [];
    }
    add(expense) {
        this._expenseList.push(expense);
    }
    list() {
        return this._expenseList;
    }
}
export { ExpenseListModel };
