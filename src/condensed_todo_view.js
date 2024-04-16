import { todo_view } from "./todo_view";

// a more condensed todo view
const condensed_todo_view = (todo_item) => {
    let card = document.createElement('div');
    card.classList.add('card');
    card.classList.add('condensed');

    const title = document.createElement('p');
    const dueDate = document.createElement('p');
    const complete = document.createElement('input');
    const expandButton = document.createElement('button');
    
    title.innerHTML = todo_item.getTitle();
    dueDate.innerHTML = todo_item.getDueDate();
    complete.checked = todo_item.getComplete();
    expandButton.innerHTML = "expand"
    complete.type = 'checkbox';

    title.classList.add('title');
    dueDate.classList.add('due-date');
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

    // replaces it with an expanded version
    expandButton.addEventListener('click', () => {
        card.replaceWith(todo_view(todo_item))
    })

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
