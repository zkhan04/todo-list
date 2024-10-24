import "./style.css"

import { todo_item } from "./todo"
import { todo_element_collection } from "./common_todo_view"
import { condensed_todo_view } from "./condensed_todo_view"

// we can follow a similar workflow to this. Just prompt the
// user for the task name, and add a section with a checkbox
// and the task name.

// this looks good so far! to make it look nicer, I 
// will make it so that the task name and the checkbox
// are stacked horizontally instead of vertically.

// now, it is probably a good idea to have more meaningful
// class and ID names.

// the ability to add multiple tasks would be nice.
// we have a button at the top, which starts the prompt -> 
// create task workflow

const body = document.querySelector(".all-tasks")

const create_task_button = document.querySelector(".create-task")

create_task_button.addEventListener("click", () => {
    let taskName = prompt("what is the task?")
    const dummyDescription = "stroking it...";
    const dummyDueDate = "tomorrow";
    const dummyPriority = "high";
    const dummyComplete = true;

    const todo = todo_item(taskName, dummyDescription, dummyDueDate, dummyPriority, dummyComplete);

    const todo_collection = todo_element_collection(todo);

    const condensed_view = condensed_todo_view(todo_collection);

    body.appendChild(condensed_view);
})
