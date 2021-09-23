import { ExpenseModel } from "../model/ExpenseModel.js"

class ExpenseServices {

    public static async list() {
       return await fetch('http://localhost:8080/expense/list')
            .then(res => res.json())
            .then((list: Array<ExpenseModel>) => list)
            .catch(error => error)
    }
}

export { ExpenseServices }