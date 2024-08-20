import { createForm } from "./form";
import { todo_item } from "./todo";
import { todo_view } from "./todo_view";
import { condensed_todo_view } from "./condensed_todo_view";
import './style.css';

// it appears that these are inputs used for form creation.
// it is the ID, the label text, and the input type
const formInputs = [
    ["title", "title", "text"],
    ["description", "description", "text"], 
    ["due-date", "due date", "text"],
    ["priority", "priority", "text"],
    ["complete", "complete", "checkbox"],
];

// this is a button that causes the modal to show up.
const modalButton = document.querySelector('.show-modal');

// when the modal appears, this blurs out the background
const overlay = document.querySelector('.overlay');

// this is the form that we fill out whenever we add tasks.
const form = createForm(formInputs);

// this is where all the todos go.
let todo_section = document.querySelector('.todos');

// we prepend the form to the document, but it's hidden.
document.body.prepend(form.form);

// when the modal button is clicked, we show the form and overlay.
modalButton.addEventListener('click', () => {
    form.form.classList.remove('hidden');
    form.form.classList.add('shown');
    overlay.classList.remove('hidden');
    overlay.classList.add('shown');
})

// when the form is submitted,
// we prevent the default behavior and instead construct
// a condensed todo view of the newly created todo.
// we then hide the form and overlay.
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


