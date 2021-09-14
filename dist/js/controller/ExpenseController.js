import { ExpenseListModel } from "../model/ExpenseListModel.js";
import { ExpenseModel } from "../model/ExpenseModel.js";
class ExpenseController {
    constructor() {
        this._expenseList = new ExpenseListModel();
        this.$category = document.querySelector('#ipt-dp-category');
        this.$description = document.querySelector('#ipt-dp-description');
        this.$currency = document.querySelector('#ipt-dp-currency');
    }
    add() {
        const expense = this.createExpense();
        this._expenseList.add(expense);
        console.log(this._expenseList.list());
        this.clearForm();
    }
    createExpense() {
        const category = this.$category.value.toString();
        const description = this.$description.value.toString();
        const currency = Number.parseFloat(this.$currency.value.replace(/,/g, '.'));
        return new ExpenseModel(category, description, currency);
    }
    clearForm() {
        this.$description.value = '';
        this.$currency.value = '';
    }
}
export { ExpenseController };
