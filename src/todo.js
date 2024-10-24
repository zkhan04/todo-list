const todo_item = function(title, description, dueDate, priority, complete) {
    // getters
    const getTitle = () => title;
    const getDescription = () => description;
    const getDueDate = () => dueDate;
    const getPriority = () => priority;
    const getComplete = () => complete;
    
    // setters
    const setTitle = (ttl) => {title = ttl};
    const setDescription = (dsc) => {description = dsc};
    const setDueDate = (ddt) => {dueDate = ddt};
    const setPriority = (prt) => {priority = prt};
    const toggleComplete = () => {
        if (complete) complete = false;
        else complete = true;
    }

    return {getTitle, getDescription, getDueDate, getPriority, getComplete, 
            setTitle, setDescription, setDueDate, setPriority, toggleComplete};

}

export {todo_item}