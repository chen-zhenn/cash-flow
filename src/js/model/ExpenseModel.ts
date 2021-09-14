class ExpenseModel {
    private _category;
    private _description;
    private _currency;

    constructor(category: string, description: string, currency: number) {
        this._category = category;
        this._description = description;
        this._currency = currency;
    }

}

export { ExpenseModel }