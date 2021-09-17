import { View } from "./View.js";
class ExpenseListView extends View {
    template(data) {
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
                ${data.list().map((expense) => {
            return `
                    <tr class="align-middle">
                        <th scope="row">${expense.id}</th>
                        <td>${expense.description}</td>
                        <td>${expense.category}</td>
                        <td>${expense.currency}</td>
                        <td><a href="/#edit?id=${expense.id}"><button type="button" class="btn btn-warning" id="btn-dp-edit"><i class="bi bi-pencil-fill"></i></button></a></td>
                        <td><a href="/#delete?id=${expense.id}"><button type="button" class="btn btn-danger" id="btn-dp-delete"><i class="bi bi-trash-fill"></i></button></a></td>
                    </tr>
                    `;
        }).join('')}
            </tbody>
        </table>
        `;
    }
}
export { ExpenseListView };
