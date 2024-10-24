import { todo_item } from "./todo";
import { todo_element_collection } from "./common_todo_view";
import { condensed_todo_view } from "./condensed_todo_view";

function createLabelInputPair(id, name, type, defaultValue = null) {
    const input = document.createElement("input");
    const label = document.createElement("label");

    input.id = id; 
    input.type = type;
    
    if (defaultValue != null) {
        input.value = defaultValue;
    }

    label.htmlFor = id;
    label.innerHTML = name;

    const inputPairDiv = document.createElement("div");
    inputPairDiv.append(input, label);
    inputPairDiv.classList.add("input-label-pair");

    const getValue = () => {
        if (input.type === "checkbox") return input.checked;
        if (input.type === "text") return input.value;
    }

    return {inputPairDiv, getValue};
}

const createForm = (formInputs) => {
    const form = document.createElement("form");
    form.classList.add("todo-form");

    const inputs = []
    formInputs.forEach((row) => {
        inputs.push(createLabelInputPair(...row));
    })

    inputs.forEach((elmt) => {
        form.appendChild(elmt.inputPairDiv);
    })

    const submitButton = document.createElement("button");
    submitButton.type = "submit";
    submitButton.innerHTML = "submit";

    form.append(submitButton);

    const formSubmitCallback = (e) => {
        e.preventDefault();

        let data = [];
        inputs.forEach((elmt) => {
            data.push(elmt.getValue());
        })

        const todo = todo_item(...data);

        const todo_collection = todo_element_collection(todo);

        const condensed_view = condensed_todo_view(todo_collection);

        const body = document.querySelector(".all-tasks");

        body.appendChild(condensed_view);
    }

    form.addEventListener("submit", formSubmitCallback);

    return form;
}

export {createForm};
