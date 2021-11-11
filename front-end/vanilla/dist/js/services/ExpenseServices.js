var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class ExpenseServices {
    static list() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield fetch(`${this.url}/expense/list`)
                .then(res => res.json())
                .then((list) => list)
                .catch(error => error);
        });
    }
    static add(expense) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield fetch(`${this.url}/expense/add`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(expense)
            })
                .then(res => res.json())
                .then((expense) => expense)
                .catch(error => error);
        });
    }
    static update(expense) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, category, description, currency } = expense;
            return yield fetch(`${this.url}/expense/update/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(expense)
            })
                .then(res => res.json())
                .then((expense) => expense)
                .catch(error => error);
        });
    }
    static delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield fetch(`${this.url}/expense/delete/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(res => res.status == 200)
                .catch(error => error);
        });
    }
}
ExpenseServices.url = 'http://localhost:8080';
export { ExpenseServices };
