class ExpenseModel {
    private _id: number
    private _category;
    private _description;
    private _currency;
    static id: number = 0;

    constructor(category: string, description: string, currency: number) {
        ExpenseModel.id = ExpenseModel.id + 1
        this._id = ExpenseModel.id 
        this._category = category;
        this._description = description;
        this._currency = currency;

    }

}

export { ExpenseModel }