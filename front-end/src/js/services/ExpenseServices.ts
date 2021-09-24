import { ExpenseModel } from "../model/ExpenseModel.js"

class ExpenseServices {

    public static async list(): Promise<Array<ExpenseModel>> {
       return await fetch('http://localhost:8080/expense/list')
            .then(res => res.json())
            .then((list: Array<ExpenseModel>) => list)
            .catch(error => error)
    }

    public static async add(expense: ExpenseModel): Promise<ExpenseModel> {
        return await fetch('http://localhost:8080/expense/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(expense)
        })
             .then(res => res.json())
             .then((expense: ExpenseModel) => expense)
             .catch(error => error)
     }

     public static async update(expense: ExpenseModel): Promise<ExpenseModel> {
        const { id, category, description, currency } = expense

        return await fetch(`http://localhost:8080/expense/update/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(expense)
        })
             .then(res => res.json())
             .then((expense: ExpenseModel) => expense)
             .catch(error => error)
     }

     public static async delete(id: number): Promise<boolean> {
        
        return await fetch(`http://localhost:8080/expense/delete/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
             .then(res => res.status == 200)
             .catch(error => error)
     }
}

export { ExpenseServices }