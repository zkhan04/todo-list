const condensed_todo_view = (todo_elements) => {
    // TODO just arrange todo view collection in a container
    // TITLE || DUE DATE || PRIORITY || COMPLETE [X]

    const condensedCard = document.createElement('div');
    condensedCard.appendChild(todo_elements.title);
    condensedCard.appendChild(todo_elements.dueDate);
    condensedCard.appendChild(todo_elements.priority);
    condensedCard.appendChild(todo_elements.complete);
    condensedCard.classList.add("todo_view")
    condensedCard.classList.add("condensed_view");

    return condensedCard
}

export {condensed_todo_view};