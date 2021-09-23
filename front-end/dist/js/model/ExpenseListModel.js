class ExpenseListModel {
    constructor() {
        this._expenseList = [];
    }
    add(expense) {
        this._expenseList.push(expense);
    }
    delete(id) {
        const expenseIndex = this.searchByIndex(id);
        expenseIndex >= 0 ? this._expenseList.splice(expenseIndex, 1) : null;
        return this._expenseList;
    }
    list() {
        return this._expenseList;
    }
    getById(iD) {
        const { id, category, description, currency } = this._expenseList.find(expense => expense.id == iD);
        return { id, category, description, currency };
    }
    searchByIndex(id) {
        return this._expenseList.findIndex(expense => expense.id == id);
    }
}
export { ExpenseListModel };
