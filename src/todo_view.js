// import { condensed_todo_view } from "./condensed_todo_view";
import { todo_view_items } from "./common_todo_view"

// constructs a todo card from a todo item. The 'V' in MVC
const todo_view = (todo_view_items) => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.classList.add('expanded');

    const title = todo_view_items.title;
    const description = todo_view_items.description;
    const dueDate = todo_view_items.dueDate;
    const priority = todo_view_items.priority;
    const complete = todo_view_items.complete;
    
    const condenseButton = document.createElement('button');
    condenseButton.innerHTML = "reduce"

    // refresh styling by updating the css class
    const refreshStyling = () => {
        if (todo_view_items.todo_item.getComplete()) {
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
        todo_view_items.todo_item.toggleComplete();
        refreshStyling();
    });

    // // replaces it with the condensed view
    // condenseButton.addEventListener('click', () => {
    //     card.replaceWith(condensed_todo_view(todo_item));
    // })

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

// this is some bullshit bruh I HATE how much information is flowing
// between each component. Must it be this difficult?

export {todo_view};

