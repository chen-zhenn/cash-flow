class View {
    constructor(element) {
        this._element = document.querySelector(element);
    }
    update(data) {
        this._element.innerHTML = this.template(data);
    }
}
export { View };
