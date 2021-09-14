import { ExpenseModel } from "../model/ExpenseModel.js"
import { ExpenseListModel } from "../model/ExpenseListModel.js"
import { ExpenseListView } from "../view/ExpenseveListView.js"


class ExpenseController {
    private $category: HTMLInputElement
    private $description: HTMLInputElement
    private $currency: HTMLInputElement
    private _expenseListModel = new ExpenseListModel()
    private _expenseListView = new ExpenseListView('#expense-list');

    constructor() {
        this.$category = document.querySelector('#ipt-dp-category')
        this.$description = document.querySelector('#ipt-dp-description')
        this.$currency = document.querySelector('#ipt-dp-currency')
        this._expenseListView.update(this._expenseListModel)
    }

    add(): void {
        const expense = this.createExpense()
        const expenseList = this._expenseListModel
        
        this._expenseListModel.add(expense)
        this._expenseListView.update(expenseList)
        
        
        console.log(this._expenseListModel.list())
        console.log( this._expenseListModel )

        this.resetForm()
    }

    createExpense(): ExpenseModel {
        const category = this.$category.value.toString()
        const description = this.$description.value.toString()
        const currency = Number.parseFloat(this.$currency.value.replace(/,/g, '.'))

        return new ExpenseModel(category, description, currency)
    }

    resetForm(): void {
        this.$category.focus()
        this.$description.value = '';
        this.$currency.value = '';
    }
}

export { ExpenseController }