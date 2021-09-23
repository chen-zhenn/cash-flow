var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
    get() {
        return __awaiter(this, void 0, void 0, function* () {
            yield fetch('http://localhost:8080/expense/list')
                .then(res => res.json())
                .then(list => list.forEach((expense) => this._expenseListModel.add(expense)))
                .catch(error => console.log(error));
            this.updateView();
        });
    }
    create() {
        const expense = this.createExpense();
        this._expenseListModel.add(expense);
        this.updateView();
        this.resetForm();
    }
    update() {
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
        const expenseList = this._expenseListModel.list();
        const id = expenseList.length ? expenseList[expenseList.length - 1]['id'] + 1 : 1;
        const category = this.$category.value.toString();
        const description = this.$description.value.toString();
        const currency = this.setCurrencyFormat(this.$currency.value);
        return ExpenseModel.create(id, category, description, currency);
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
