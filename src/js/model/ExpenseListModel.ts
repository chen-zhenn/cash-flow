import { ExpenseModel } from "./ExpenseModel.js";


class ExpenseListModel {
    private _expenseList: Array<ExpenseModel> = [];

    public add(expense: ExpenseModel): void{
        this._expenseList.push(expense)
    }

    list(): ReadonlyArray<ExpenseModel>{
        return this._expenseList
    }
}

export { ExpenseListModel }