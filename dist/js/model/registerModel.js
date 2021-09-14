class RegisterModel {
    constructor(category, description, currency) {
        this._category = category;
        this._description = description;
        this._currency = currency;
    }
    show() {
        console.log(this._category);
        console.log(this._description);
        console.log(this._currency);
    }
}
export { RegisterModel };
