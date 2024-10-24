function todo_view_items(todo_item) {
    // PARAMETER
    this.todo_item = todo_item
    this.title = document.createElement('p');
    this.description = document.createElement('p');
    this.dueDate = document.createElement('p');
    this.priority = document.createElement('p');
    this.complete = document.createElement('input');
    complete.type = "checkbox";

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
    
    // wait I think I see how we could do it.
    // we could generate a set of HTML elements for each todo item,
    // and different views are just different ways of organizing/including them.
    // how would this work?

    // have a function for generating all the relevant elements pertaining
    // to a todo item (title, description, duedate, priority, complete or not complete)

    // this approach allows for more flexibility. But how would the switching
    // process work?

    // have a class that contains a collection of html elements.
    // god these comments are so unhinged
}



