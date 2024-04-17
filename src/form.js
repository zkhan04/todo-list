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
// we should be able to generalize this to any set of parameters
const createForm = (formInputs) => {
    const form = document.createElement('form');
    form.classList.add('todo-form');
    form.classList.add('hidden');

    const inputs = [];
    formInputs.forEach((row) => {
        inputs.push(createLabelInputPair(...row));
    })

    // adds them to DOM
    inputs.forEach(elmt => {
        form.append(elmt.inputPairDiv);
    })

    const submitBtn = document.createElement('button');
    submitBtn.type = "submit";
    submitBtn.innerHTML = "submit";
    form.append(submitBtn);

    // refactoring time :///////
    // confirmed to work
    const getFormData = () => {
        const info = []
        inputs.forEach((elmt) => {
            info.push(elmt.getValue());
        })
        return info;
    }

    return {form, getFormData};
}

export {createForm};

// now we wanna add cards inside of cards
// we want a variable storing the parent container of the "add item" button that was clicked
// in the form submit event listener, instead of putting it div.todos by default, we put it in the element that was clicked
// how?

// click button inside card
// make form visible
// add a parameter to createForm?
// or a function that changes where to append things to
// so we initialize it by default to div.todos
// and a function is used to change

