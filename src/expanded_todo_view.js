const expanded_todo_view = (todo_elements) => {
    // TODO just arrange todo view collection in a container
    // TITLE || DUE DATE || PRIORITY || COMPLETE [X]

    const expandedCard = document.createElement('div');
    expandedCard.appendChild(todo_elements.title);
    expandedCard.appendChild(todo_elements.description);
    expandedCard.appendChild(todo_elements.dueDate);
    expandedCard.appendChild(todo_elements.priority);
    expandedCard.appendChild(todo_elements.complete);
    expandedCard.classList.add("todo_view");
    expandedCard.classList.add("expanded_view");


}