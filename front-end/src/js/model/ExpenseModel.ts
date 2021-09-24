import { ExpenseServices } from "../services/ExpenseServices.js"
class ExpenseModel {
    id: number
    category: string;
    description: string;
    currency: number;
    static id: number = 0;

    constructor(id: number, category: string, description: string, currency: number) {
        // ExpenseModel.id = ExpenseModel.id + 1
        // this._id = ExpenseModel.id
        this.id = id 
        this.category = category;
        this.description = description;
        this.currency = currency;

    }

    // get id(): number {
    //     return this._id
    // }

    // get category(): string { 
    //     return this._category
    // }

    // get description(): string {
    //     return this._description
    // }

    // get currency(): number {
    //     return this._currency
    // }

    public static create(id: number, category: string, description: string, currency: number): ExpenseModel  {
        return new ExpenseModel(id, category, description, currency)
    }

}

export { ExpenseModel }