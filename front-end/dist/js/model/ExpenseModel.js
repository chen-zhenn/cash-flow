class ExpenseModel {
    constructor(id, category, description, currency) {
        this.id = id;
        this.category = category;
        this.description = description;
        this.currency = currency;
    }
    static create(id, category, description, currency) {
        return new ExpenseModel(id, category, description, currency);
    }
}
ExpenseModel.id = 0;
export { ExpenseModel };
