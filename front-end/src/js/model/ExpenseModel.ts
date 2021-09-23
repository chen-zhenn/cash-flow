class ExpenseModel {
    private _id: number
    private _category;
    private _description;
    private _currency;
    static id: number = 0;

    constructor(id: number, category: string, description: string, currency: number) {
        // ExpenseModel.id = ExpenseModel.id + 1
        // this._id = ExpenseModel.id
        this._id = id 
        this._category = category;
        this._description = description;
        this._currency = currency;

    }

    get id(): number {
        return this._id
    }

    get category(): string { 
        return this._category
    }

    get description(): string {
        return this._description
    }

    get currency(): number {
        return this._currency
    }

    public static create(id: number, category: string, description: string, currency: number): ExpenseModel {
        return new ExpenseModel(id, category, description, currency)
    }

}

export { ExpenseModel }