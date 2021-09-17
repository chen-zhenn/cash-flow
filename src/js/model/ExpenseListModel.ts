import { ExpenseModel } from "./ExpenseModel.js";
import { ExpenseInterface } from "../interfaces/expenseInterface.js"
class ExpenseListModel {
    private _expenseList: Array<ExpenseModel> = [];

    public add(expense: ExpenseModel): void{
        this._expenseList.push(expense)
    }

    public update(expense: ExpenseInterface) {
        const expenseIndex = this.searchByIndex(expense.id)
        
        if(expenseIndex < 0) return false
        this._expenseList[expenseIndex] = ExpenseModel.create(expense.category, expense.description, expense.currency)
        return true
    }

    public delete(id: number): Array<ExpenseModel> {
        const expenseIndex = this.searchByIndex(id)

        expenseIndex >= 0 ? this._expenseList.splice(expenseIndex, 1) : null
        return this._expenseList
    }

    public list(): ReadonlyArray<ExpenseModel>{
        return this._expenseList
    }

    public getById(iD: number): ExpenseInterface  {
        const { id,category, description, currency } = this._expenseList.find(expense => expense.id == iD )
        return { id, category, description, currency }       
    }

    private searchByIndex(id: number): number {
        return this._expenseList.findIndex(expense => expense.id == id)
    }
}

export { ExpenseListModel }