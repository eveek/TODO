import { projects } from "./addProject";
import { activeProject } from "./addProject";




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
    const date = document.getElementById("due_date");
    const dueDate = new Date(date);
    const priorityGroup = document.getElementsByName("priority");
    const priority = Array.from(priorityGroup).find(radio => radio.checked).value;

    const newTask = new Task(title, description, dueDate, priority, false);
    // projects[activeProject].push(newTask);
    console.log(newTask)
}

export default createNewTask;