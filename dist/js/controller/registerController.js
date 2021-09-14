import { RegisterModel } from "../model/registerModel.js";
class RegisterController {
    constructor() {
        this.$category = document.querySelector('#ipt-dp-category');
        this.$description = document.querySelector('#ipt-dp-description');
        this.$currency = document.querySelector('#ipt-dp-currency');
    }
    add() {
        const register = this.createRegister();
        console.log(register);
        // register.show()
    }
    createRegister() {
        const category = this.$category.value.toString();
        const description = this.$description.value.toString();
        const currency = Number.parseFloat(this.$currency.value.replace(/,/g, '.'));
        return new RegisterModel(category, description, currency);
    }
}
export { RegisterController };
