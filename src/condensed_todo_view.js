import { expanded_todo_view } from "./expanded_todo_view";

const condensed_todo_view = (todo_elements) => {
    const condensedCard = document.createElement('div');
    condensedCard.appendChild(todo_elements.title);
    condensedCard.appendChild(todo_elements.dueDate);
    condensedCard.appendChild(todo_elements.priority);
    condensedCard.appendChild(todo_elements.complete);

    const expandButtonCallback = () => {
        condensedCard.replaceWith(expanded_todo_view(todo_elements));
    }

    const expandButton = document.createElement('button');
    expandButton.innerHTML = "expand"
    expandButton.addEventListener("click", expandButtonCallback);

    condensedCard.appendChild(expandButton);

    condensedCard.classList.add("todo_view")
    condensedCard.classList.add("condensed_view");

    return condensedCard
}

export {condensed_todo_view};