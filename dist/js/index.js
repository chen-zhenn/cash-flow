import { ExpenseController } from "./controller/ExpenseController.js";
const expense = new ExpenseController();
const $btnSubmit = document.getElementById('btn-dp-submit');
$btnSubmit.addEventListener('click', event => expense.add());
