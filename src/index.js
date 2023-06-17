import {addProject, projects} from "./addProject";
import displayProject from "./displayProject";
import createNewTask from "./createTask";


const addProjectBtn = document.getElementById("add_project_btn");
const projectList = document.getElementById("project_list");
const addTaskForm = document.getElementById("add_task_form");


addTaskForm.addEventListener('submit', e => {
    e.preventDefault();
    createNewTask();
})


addProjectBtn.addEventListener('click', e => {
    e.preventDefault();
    addProject();
})

projectList.addEventListener('click', e => {
    if (e.target.tagName !== "LI") return;
    const projectName = e.target.innerText;
    displayProject(projectName);
    console.log(projects)
    console.log(Object.keys(projects).length)
})


