import { ExpenseController } from "./controller/ExpenseController.js";

const expenseController = new ExpenseController()
const $btnAdd = document.getElementById('btn-dp-add')
const $btnUpdate = document.getElementById('btn-dp-update')

$btnAdd.addEventListener('click', event => expenseController.create())
$btnUpdate.addEventListener('click', event => expenseController.update())

addEventListener('hashchange', event => {
    const hash = /\w+(?!#)/.exec(window.location.hash)
    const op = /\w+(?=\?)/.exec(window.location.hash)
    const id = /\d(?!=)/.exec(window.location.hash)
    
    if(!op && !hash) return

    try {
        op
        if(!op && hash){
            $btnUpdate.className = $btnUpdate.className.replace(/inline\-block/, 'none')
            $btnAdd.className = $btnAdd.className.replace(/none/, 'inline-block')
        }
        else if(op){
            if(op.toString() == 'delete'){
                expenseController.delete(parseFloat(id.toString()))
                $btnUpdate.className = $btnUpdate.className.replace(/inline\-block/, 'none')
            }
            else if(op.toString() == 'edit'){
                $btnAdd.classList.add('d-none')
                $btnUpdate.className = $btnUpdate.className.replace(/none/, 'inline-block')
                expenseController.edit(parseFloat(id.toString()))
            }
        }

    } catch (error) {}

})


addEventListener('load', event => {
    console.log('Pagina Carregada!')
    expenseController.get()
})

