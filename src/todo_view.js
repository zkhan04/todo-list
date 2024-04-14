const todo_view = (todo_item) => {
    const card = document.createElement('div');
    card.classList.add('card');
    const title = document.createElement('p');
    const description = document.createElement('p');
    const dueDate = document.createElement('p');
    const priority = document.createElement('p');
    const complete = document.createElement('input');
    complete.type = "checkbox";

    title.innerHTML = todo_item.getTitle();
    description.innerHTML = todo_item.getDescription();
    dueDate.innerHTML = todo_item.getDueDate();
    priority.innerHTML = todo_item.getPriority();
    complete.checked = todo_item.getComplete();

    const refreshStyling = () => {
        if (todo_item.getComplete()) {
            card.classList.remove('incomplete');
            card.classList.add('complete');
        } else {
            card.classList.remove('complete');
            card.classList.add('incomplete');
        }
    }

    complete.addEventListener('change', () => 
    {
        todo_item.toggleComplete();
        refreshStyling();
    });

    card.appendChild(title);
    card.appendChild(description);
    card.appendChild(dueDate);
    card.appendChild(priority);
    card.appendChild(complete);
    refreshStyling();

    return card;
}

export {todo_view};

