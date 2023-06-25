import {addProject, activeProject, projects} from "./addProject";
import displayTodo from "./displayTodo";
import createNewTask from "./createTask";
import indicateActiveProject from "./indicateActiveProject";


const addProjectBtn = document.getElementById("add_project_btn");
const projectList = document.getElementById("project_list");
const addTaskForm = document.getElementById("add_task_form");
const addTaskBtn = document.getElementById("add_task_open");
const addTaskDiv = document.getElementById("create_task");
const background = document.getElementById("background");


// if (localStorage.getItem("todo") != null){
//     projects = JSON.parse(localStorage.getItem("todo"))
//     displayTodo()
// }
const addTaskFormToggle = (mode) => {
    background.style.display = mode;
    addTaskDiv.style.display = mode;
}

background.addEventListener('click', () => {
    addTaskFormToggle("none");
})

addTaskBtn.addEventListener('click', e => {
    e.preventDefault();
    addTaskFormToggle("block");
})


addTaskForm.addEventListener('submit', e => {
    e.preventDefault();
    createNewTask();
    addTaskForm.reset();
    addTaskFormToggle("none");
})


addProjectBtn.addEventListener('click', e => {
    e.preventDefault();
    addProject();
})

projectList.addEventListener('click', e => {
    if (e.target.tagName !== "LI") return;
    const projectName = e.target.innerText;
    activeProject.changeProject = projectName;
    indicateActiveProject(projectName);
    displayTodo();
    // console.log(projects)
    // console.log(Object.keys(projects).length)
})


const obj = {
    name : "uuuu",
    age : 99
}

console.log(obj.length)