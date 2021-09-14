import { ExpenseModel } from "../model/ExpenseModel.js";
class ExpenseController {
    constructor() {
        this.$category = document.querySelector('#ipt-dp-category');
        this.$description = document.querySelector('#ipt-dp-description');
        this.$currency = document.querySelector('#ipt-dp-currency');
    }
    add() {
        const expense = this.createExpense();
        console.log(expense);
    }
    createExpense() {
        const category = this.$category.value.toString();
        const description = this.$description.value.toString();
        const currency = Number.parseFloat(this.$currency.value.replace(/,/g, '.'));
        return new ExpenseModel(category, description, currency);
    }
}
export { ExpenseController };
