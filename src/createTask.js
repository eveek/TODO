import { curLiDiv, curTaskForm } from ".";
import { activeProject, projects} from "./addProject";
import { displayTodo } from "./displayTodo";
const { format } = require("date-fns");




class Task {
    constructor (title, description, dueDate, priority, checked) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this,checked = checked;
    }
}

function createNewTask () {
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const date = document.getElementById("date").value;
    const dueDate = format(new Date(date), "dd/MM/yyyy");
    const priorityGroup = document.getElementsByName("priority");
    const priority = Array.from(priorityGroup).find(radio => radio.checked).value;

    const newTask = new Task(title, description, dueDate, priority, false);

    if (curTaskForm.form == "add") {
        projects.theProject[activeProject.project].push(newTask);
    } else {
        projects.theProject[activeProject.project][~~curLiDiv.li] = newTask;
    }
    displayTodo().displayProjectTask();
}

export { Task, createNewTask };
