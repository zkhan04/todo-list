// import { todo_view } from "./todo_view";
import {todo_view_items} from "./common_todo_view";

// a more condensed todo view
const condensed_todo_view = (todo_view_items) => {
    // card is what this function returns
    const card = document.createElement('div');

    // classes for styling
    card.classList.add('card');
    card.classList.add('condensed');

    const title = todo_view_items.title;
    const dueDate = todo_view_items.dueDate;
    const complete = todo_view_items.complete;

    // this button expands it into a normal todo view
    const expandButton = document.createElement('button');
    expandButton.innerHTML = "expand";
    
    // whenever the item is completed/un-completed, refresh the styling
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

    // // replaces it with an expanded version
    // expandButton.addEventListener('click', () => {
    //     card.replaceWith(todo_view(todo_view_items))
    // })

    // append html elements to the card, apply styling
    card.appendChild(title);
    card.appendChild(dueDate);
    card.appendChild(complete);
    card.appendChild(expandButton);
    refreshStyling();

    return card;
}

export {condensed_todo_view}

// instead, put a card inside a div
// should we consolidate todo_view and condensed_todo_view into a single file
// let's add the ability for subtasks to be added!
// but first, it'll make more sense to put the form in a modal
