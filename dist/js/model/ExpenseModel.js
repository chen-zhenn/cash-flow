class ExpenseModel {
    constructor(category, description, currency) {
        ExpenseModel.id = ExpenseModel.id + 1;
        this._id = ExpenseModel.id;
        this._category = category;
        this._description = description;
        this._currency = currency;
    }
    get id() {
        return this._id;
    }
    get category() {
        return this._category;
    }
    get description() {
        return this._description;
    }
    get currency() {
        return this._currency;
    }
}
ExpenseModel.id = 0;
export { ExpenseModel };
