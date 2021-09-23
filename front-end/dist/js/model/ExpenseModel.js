class ExpenseModel {
    constructor(id, category, description, currency) {
        this._id = id;
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
    static create(id, category, description, currency) {
        return new ExpenseModel(id, category, description, currency);
    }
}
ExpenseModel.id = 0;
export { ExpenseModel };
