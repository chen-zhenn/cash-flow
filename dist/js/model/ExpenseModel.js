class ExpenseModel {
    constructor(category, description, currency) {
        ExpenseModel.id = ExpenseModel.id + 1;
        this._id = ExpenseModel.id;
        this._category = category;
        this._description = description;
        this._currency = currency;
    }
}
ExpenseModel.id = 0;
export { ExpenseModel };
