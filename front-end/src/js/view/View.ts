abstract class View<T> {

    protected _element: HTMLElement

    constructor(element: string){
        this._element = document.querySelector(element)
    }

    protected abstract template(data: T): string

    update(data: T): void{
        this._element.innerHTML = this.template(data)
    }
}

export { View }