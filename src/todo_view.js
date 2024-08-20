import { condensed_todo_view } from "./condensed_todo_view";

// constructs a todo card from a todo item. The 'V' in MVC
const todo_view = (todo_item) => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.classList.add('expanded');

    // html elements
    const title = document.createElement('p');
    const description = document.createElement('p');
    const dueDate = document.createElement('p');
    const priority = document.createElement('p');
    const condenseButton = document.createElement('button');
    const complete = document.createElement('input');
    complete.type = "checkbox";

    // populate html elements with data from todo item
    title.innerHTML = todo_item.getTitle();
    description.innerHTML = todo_item.getDescription();
    dueDate.innerHTML = todo_item.getDueDate();
    priority.innerHTML = todo_item.getPriority();
    complete.checked = todo_item.getComplete();
    condenseButton.innerHTML = "reduce"
    
    // class lists for styling
    title.classList.add('title');
    description.classList.add('description');
    dueDate.classList.add('due-date');
    priority.classList.add('priority');
    complete.classList.add('complete');

    // refresh styling by updating the css class
    const refreshStyling = () => {
        if (todo_item.getComplete()) {
            card.classList.remove('incomplete');
            card.classList.add('complete');
        } else {
            card.classList.remove('complete');
            card.classList.add('incomplete');
        }
    }

    // toggles the completion and refreshes the styling when the checkbox is clicked
    complete.addEventListener('change', () => 
    {
        todo_item.toggleComplete();
        refreshStyling();
    });

    // replaces it with the condensed view
    condenseButton.addEventListener('click', () => {
        card.replaceWith(condensed_todo_view(todo_item));
    })

    // append html elements to the card, apply styling
    card.appendChild(title);
    card.appendChild(description);
    card.appendChild(dueDate);
    card.appendChild(priority);
    card.appendChild(complete);
    card.appendChild(condenseButton);
    refreshStyling();

    return card;
}

// I believe it is appropriate for todo_view and condensed_todo_view
// to subclass the same class, as they have the same general structure
// and commands. First, I will place the two files side-by-side and
// rewrite them so they're basically identical :P

export {todo_view};

