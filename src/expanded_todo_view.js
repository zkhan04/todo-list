import { condensed_todo_view } from "./condensed_todo_view";

const expanded_todo_view = (todo_elements) => {
    const expandedCard = document.createElement('div');
    expandedCard.appendChild(todo_elements.title);
    expandedCard.appendChild(todo_elements.description);
    expandedCard.appendChild(todo_elements.dueDate);
    expandedCard.appendChild(todo_elements.priority);
    expandedCard.appendChild(todo_elements.complete);
    
    const condenseButtonCallback = () => {
        expandedCard.replaceWith(condensed_todo_view(todo_elements));
    }

    const condenseButton = document.createElement('button');
    condenseButton.innerHTML = "shrink";
    condenseButton.addEventListener('click', condenseButtonCallback);

    expandedCard.appendChild(condenseButton);

    expandedCard.classList.add("todo_view");
    expandedCard.classList.add("expanded_view");

    return expandedCard;
}

export {expanded_todo_view};