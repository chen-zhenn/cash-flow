import { ExpenseModel } from "../model/ExpenseModel.js";
import { ExpenseListModel } from "../model/ExpenseListModel.js";
import { ExpenseListView } from "../view/ExpenseveListView.js";
class ExpenseController {
    constructor() {
        this._expenseListModel = new ExpenseListModel();
        this._expenseListView = new ExpenseListView('#expense-list');
        this.$id = document.querySelector('#ipt-dp-id');
        this.$category = document.querySelector('#ipt-dp-category');
        this.$description = document.querySelector('#ipt-dp-description');
        this.$currency = document.querySelector('#ipt-dp-currency');
        this._expenseListView.update(this._expenseListModel);
    }
    create() {
        const expense = this.createExpense();
        this._expenseListModel.add(expense);
        this.updateView();
        this.resetForm();
    }
    update() {
        const expense = this.setUpdatedExpense();
        const updated = this._expenseListModel.update(expense);
        if (!updated) {
            throw new Error('Não foi possivel atualizar dados de despesa!');
            return;
        }
        this.updateView();
        this.resetForm();
    }
    delete(id) {
        this._expenseListModel.delete(id);
        this.updateView();
        this.resetForm();
    }
    edit(id, expense) {
        const { category, description, currency } = this._expenseListModel.getById(id);
        this.$id.value = id.toString();
        this.$category.value = category;
        this.$description.value = description;
        this.$currency.value = currency.toString();
        this.$category.focus();
    }
    createExpense() {
        const category = this.$category.value.toString();
        const description = this.$description.value.toString();
        const currency = this.setCurrencyFormat(this.$currency.value);
        return ExpenseModel.create(category, description, currency);
    }
    setUpdatedExpense() {
        const id = parseInt(this.$id.value, 10);
        const category = this.$category.value.toString();
        const description = this.$description.value.toString();
        const currency = this.setCurrencyFormat(this.$currency.value);
        return { id, category, description, currency };
    }
    updateView() {
        this._expenseListView.update(this._expenseListModel);
    }
    setCurrencyFormat(value) {
        return parseFloat(value.replace(/,/g, '.'));
    }
    resetForm() {
        this.$description.value = '';
        this.$currency.value = '';
        this.$category.focus();
    }
}
export { ExpenseController };
