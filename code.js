for (i = 0; i < 5; i++) {
    console.log(i + " was just logged to the console!")
}

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

body = document.querySelector(".all-tasks")

create_task_button = document.querySelector(".create-task")
create_task_button.addEventListener("click", () => {
    str = prompt("what is the task?")

    box = document.createElement("div")
    box.setAttribute("class", "task")
    task_name_p = document.createElement("p")
    task_name_p.textContent = str

    checkbox = document.createElement("input")
    checkbox.setAttribute("type", "checkbox")

    box.appendChild(checkbox)
    box.appendChild(task_name_p)

    body.appendChild(box)
})
