import { createForm } from "./form";
import { todo_item } from "./todo";
import { todo_view } from "./todo_view";
import { condensed_todo_view } from "./condensed_todo_view";
import './style.css';

const formInputs = [
    ["title", "title", "text"],
    ["description", "description", "text"], 
    ["due-date", "due date", "text"],
    ["priority", "priority", "text"],
    ["complete", "complete", "checkbox"],
];

const modalButton = document.querySelector('.show-modal');
const overlay = document.querySelector('.overlay');
const form = createForm(formInputs);
let todo_section = document.querySelector('.todos');

document.body.prepend(form.form);

modalButton.addEventListener('click', () => {
    form.form.classList.remove('hidden');
    form.form.classList.add('shown');
    overlay.classList.remove('hidden');
    overlay.classList.add('shown');
})

form.form.addEventListener('submit', (e) => {
    e.preventDefault();

    const info = form.getFormData();

    const new_todo = todo_item(...info);
    todo_section.appendChild(condensed_todo_view(new_todo));

    overlay.classList.remove('shown');
    overlay.classList.add('hidden');
    form.form.classList.remove('shown');
    form.form.classList.add('hidden');
});


