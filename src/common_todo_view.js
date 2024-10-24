const todo_element_collection = (todo_item) => {
    // PARAMETER
    const title = document.createElement('p');
    const description = document.createElement('p');
    const dueDate = document.createElement('p');
    const priority = document.createElement('p');
    const complete = document.createElement('input');

    complete.type = "checkbox";

    const toggleComplete = () => {todo_item.toggleComplete()};

    complete.addEventListener('change', toggleComplete)

    // populate html elements with data from todo item
    title.innerHTML = todo_item.getTitle();
    description.innerHTML = todo_item.getDescription();
    dueDate.innerHTML = todo_item.getDueDate();
    priority.innerHTML = todo_item.getPriority();
    complete.checked = todo_item.getComplete();

    // class lists for styling
    title.classList.add('title');
    description.classList.add('description');
    dueDate.classList.add('due-date');
    priority.classList.add('priority');
    complete.classList.add('complete');

    return {title, description, dueDate, priority, complete}
    
    
}

export {todo_element_collection};



