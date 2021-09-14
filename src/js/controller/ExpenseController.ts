import { ExpenseListModel } from "../model/ExpenseListModel.js"
import { ExpenseModel } from "../model/ExpenseModel.js"


class ExpenseController {
    private $category: HTMLInputElement
    private $description: HTMLInputElement
    private $currency: HTMLInputElement
    private _expenseList = new ExpenseListModel()

    constructor() {
        this.$category = document.querySelector('#ipt-dp-category')
        this.$description = document.querySelector('#ipt-dp-description')
        this.$currency = document.querySelector('#ipt-dp-currency')
    }

    add(): void {
        const expense = this.createExpense()
        
        this._expenseList.add(expense) 
        
        console.log(this._expenseList.list())
        
        this.clearForm()
    }

    createExpense(): ExpenseModel {
        const category = this.$category.value.toString()
        const description = this.$description.value.toString()
        const currency = Number.parseFloat(this.$currency.value.replace(/,/g, '.'))

        return new ExpenseModel(category, description, currency)
    }

    clearForm(): void {
        this.$description.value = '';
        this.$currency.value = '';
    }
}

export { ExpenseController }