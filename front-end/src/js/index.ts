import { ExpenseController } from "./controller/ExpenseController.js";

const expenseController = new ExpenseController()
const $btnAdd = document.getElementById('btn-dp-add')
const $btnUpdate = document.getElementById('btn-dp-update')

$btnAdd.addEventListener('click', event => expenseController.create())
$btnUpdate.addEventListener('click', event => expenseController.update())

addEventListener('hashchange', event => {
    const op = /\w+(?=\?)/.exec(window.location.hash)
    const id = /\d(?!=)/.exec(window.location.hash)
    
    if(!op) return
    if(op.toString() == 'delete') expenseController.delete(parseFloat(id.toString()))
    else if(op.toString() == 'edit')
        $btnAdd.classList.add('d-none')
        $btnUpdate.className = $btnUpdate.className.replace(/none/, 'inline-block')
        expenseController.edit(parseFloat(id.toString()))
})


addEventListener('load', event => {
    console.log('Pagina Carregada!')
    expenseController.get()
})

