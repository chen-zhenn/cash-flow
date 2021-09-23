import { ExpenseModel } from "../model/ExpenseModel.js"
import { ExpenseListModel } from "../model/ExpenseListModel.js"
import { ExpenseListView } from "../view/ExpenseveListView.js"
import { ExpenseInterface} from '../interfaces/expenseInterface.js'
class ExpenseController {
    private $id: HTMLInputElement
    private $category: HTMLInputElement
    private $description: HTMLInputElement
    private $currency: HTMLInputElement
    private _expenseListModel = new ExpenseListModel()
    private _expenseListView = new ExpenseListView('#expense-list');

    constructor() {
        this.$id = document.querySelector('#ipt-dp-id') as HTMLInputElement
        this.$category = document.querySelector('#ipt-dp-category') as HTMLInputElement
        this.$description = document.querySelector('#ipt-dp-description') as HTMLInputElement
        this.$currency = document.querySelector('#ipt-dp-currency') as HTMLInputElement
        this._expenseListView.update(this._expenseListModel)
    }

    public async get(){

        await fetch('http://localhost:8080/expense/list')
            .then(res => res.json())
            .then(list => list.forEach((expense: ExpenseModel) => this._expenseListModel.add(expense)))
            .catch(error => console.log(error))

        this.updateView()
    }

    public create(): void {
        const expense = this.createExpense()
    
        this._expenseListModel.add(expense)
        this.updateView()
        this.resetForm()   
    }

    public update(): void {
        // const expense = this.setUpdatedExpense()
        // const updated = this._expenseListModel.update(expense)

        // if(!updated){
        //     throw new Error('Não foi possivel atualizar dados de despesa!')
        //     return
        // }

        // this.updateView()
        // this.resetForm()
    }

    public delete(id: number): void {
        this._expenseListModel.delete(id)
        this.updateView()
        this.resetForm()
    }

    public edit(id: number, expense?: ExpenseInterface){ 
       const { category, description, currency } = this._expenseListModel.getById(id)
    
        this.$id.value = id.toString()
        this.$category.value = category
        this.$description.value = description
        this.$currency.value = currency.toString()
        this.$category.focus()
    }

    private createExpense(): ExpenseModel {
        const expenseList = this._expenseListModel.list()
        const id = expenseList.length ? expenseList[expenseList.length - 1]['id'] + 1 : 1  
        const category = this.$category.value.toString()
        const description = this.$description.value.toString()  
        const currency = this.setCurrencyFormat(this.$currency.value)

        return ExpenseModel.create(id, category, description, currency)
    }

    private setUpdatedExpense(): ExpenseInterface {
        const id = parseInt(this.$id.value, 10)
        const category = this.$category.value.toString()
        const description = this.$description.value.toString()
        const currency = this.setCurrencyFormat(this.$currency.value)

        return { id, category, description, currency }
    }

    private updateView(): void {
        this._expenseListView.update(this._expenseListModel)
    }

    private setCurrencyFormat(value: string): number {
        return parseFloat(value.replace(/,/g, '.'))
    }

    private resetForm(): void {
        this.$description.value = ''
        this.$currency.value = ''
        this.$category.focus()
    }
}

export { ExpenseController }