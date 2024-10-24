import "./style.css"

import { todo_item } from "./todo"
import { todo_element_collection } from "./common_todo_view"
import { condensed_todo_view } from "./condensed_todo_view"
import { createForm } from "./form"

const taskSection = document.querySelector(".all-tasks");

const body = document.querySelector("body");

const formInputs = [
    ["title", "Task title: ", "text", "dummy title"],
    ["description", "Description: ", "text", "dummy description"],
    ["duedate", "Due date: ", "text", "dummy date"],
    ["priority", "Priority: ", "text", "dummy priority"],
    ["complete", "complete", "checkbox"]
];

body.appendChild(createForm(formInputs));