import { todo_item } from "./todo";
import { todo_view } from "./todo_view";
import { createForm } from "./form";
import './style.css';

let sample_todo = todo_item("Read Quran", "Around 5-6 pages", "4/10/24", "high", true);
let sample_view = todo_view(sample_todo);
document.body.appendChild(createForm());
document.body.appendChild(sample_view);