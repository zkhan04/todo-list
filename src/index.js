import { createForm } from "./form";
import './style.css';

const modalButton = document.querySelector('.show-modal');
const overlay = document.querySelector('.overlay');


document.body.prepend(createForm());
const form = document.querySelector('.todo-form');

modalButton.addEventListener('click', () => {
    form.classList.remove('hidden');
    form.classList.add('shown');
    overlay.classList.remove('hidden');
    overlay.classList.add('shown');
})

form.addEventListener('submit', (e) => {
    e.preventDefault();
    overlay.classList.remove('shown');
    overlay.classList.add('hidden');
})