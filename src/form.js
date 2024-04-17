import { format } from "date-fns";
import { todo_item } from "./todo";
import { todo_view } from "./todo_view";
import { condensed_todo_view } from "./condensed_todo_view";
// title
// due date
// description
// priority
// complete? y/n

// for each one, create a label and input field

// create a method with input name, type
// data validate, but for now let's create the method
// yeah im validating this in javascript LMAO

// dont overthink this
// so, we want to save the label-input pair info in a file (probably JSON)
// if we want to add new parameters, we need to do it in three places:
// in the JSON file, in the todo_item definition, and in the todo_view

// constructs a label-input pair using an id, a name, and the type of input
// may move this to a separate module tbh
function createLabelInputPair(id, name, type) {
    const input = document.createElement('input');
    input.id = id;
    input.type = type;
    const label = document.createElement('label');
    label.htmlFor = id;
    label.innerHTML = name;
    
    const inputPairDiv = document.createElement('div');
    inputPairDiv.append(label, input);
    inputPairDiv.classList.add('input-label-pair');

    const getValue = () => {
        if (input.type == 'text') return input.value;
        if (input.type == 'checkbox') return input.checked;
    }

    return {inputPairDiv, getValue};
}

// creates the form
const createForm = () => {
    const form = document.createElement('form');
    form.classList.add('todo-form');
    form.classList.add('hidden');

    // label input pairs
    const titleField = createLabelInputPair("title", "title", "text");
    const dueField = createLabelInputPair("due-date", "due date", "text");
    const descriptionField = createLabelInputPair('description', 'description', "text");
    const priorityField = createLabelInputPair('priority', 'priority', 'text');
    const completeBox = createLabelInputPair('complete', 'complete', 'checkbox');

    // adds them to DOM
    const inputs = [titleField, descriptionField, dueField, priorityField, completeBox];
    inputs.forEach(elmt => {
        form.append(elmt.inputPairDiv);
    })

    const submitBtn = document.createElement('button');
    submitBtn.type = "submit";
    submitBtn.innerHTML = "submit";
    form.append(submitBtn);
    
    // gets todo data when the form is submitted
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        let info = []
        inputs.forEach((elmt) => {
            info.push(elmt.getValue());
        })

        const new_todo = todo_item(...info);
        const todo_section = document.querySelector('.todos');
        todo_section.appendChild(condensed_todo_view(new_todo));

        form.classList.remove('shown');
        form.classList.add('hidden');
    })

    return form;
}

export {createForm};

