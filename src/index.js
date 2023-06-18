import {addProject, activeProject} from "./addProject";
import displayProject from "./displayProject";
import createNewTask from "./createTask";


const addProjectBtn = document.getElementById("add_project_btn");
const projectList = document.getElementById("project_list");
const addTaskForm = document.getElementById("add_task_form");
const addTaskBtn = document.getElementById("add_task_open");
const addTaskDiv = document.getElementById("create_task");
const background = document.getElementById("background");


addTaskBtn.addEventListener('click', e => {
    e.preventDefault();
    addTaskFormToggle("block");
})

const addTaskFormToggle = (mode) => {
    background.style.display = mode;
    addTaskDiv.style.display = mode;
}

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
    displayProject();
    // console.log(projects)
    // console.log(Object.keys(projects).length)
})


