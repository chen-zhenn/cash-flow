import { ExpenseListModel } from "../model/ExpenseListModel.js"
import { ExpenseModel } from "../model/ExpenseModel"

class ExpenseListView {

    private _element: HTMLElement

    constructor(element: string){
        this._element = document.querySelector(element)
    }

    template(data: ExpenseListModel): string{
        return `
        <table class="table  table-striped">
            <thead>
                <tr>
                    <th class="table__head" scope="col">#</th>
                    <th class="table__head" scope="col">Descição</th>
                    <th class="table__head" scope="col">Categoria</th>
                    <th class="table__head" scope="col">Valor</th>
                    <th class="table__head -center" scope="col">Editar</th>
                    <th class="table__head -center" scope="col">Excluir</th>
                </tr>
            </thead>
            <tbody>
                ${data.list().map((expense): string => {
                    return `
                    <tr class="align-middle">
                        <th scope="row">${expense.id}</th>
                        <td>${expense.description}</td>
                        <td>${expense.category}</td>
                        <td>${expense.currency}</td>
                        <td><button type="button" class="btn btn-warning"><i class="bi bi-pencil-fill"></i></button></td>
                        <td><button type="button" class="btn btn-danger"><i class="bi bi-trash-fill"></i></button></td>
                    </tr>
                    `
                }).join('')}
            </tbody>
        </table>
        `
    }

    update(data: ExpenseListModel): void{
        this._element.innerHTML = this.template(data)
    }
}

export { ExpenseListView }