import {addProject, activeProject, projects} from "./addProject";
import displayTodo from "./displayTodo";
import { createNewTask } from "./createTask";
import indicateActiveProject from "./indicateActiveProject";
import ediTask from "./ediTask";


const addProjectBtn = document.getElementById("add_project_btn");
const projectList = document.getElementById("project_list");
const addTaskForm = document.getElementById("add_task_form");
const addTaskBtn = document.getElementById("add_task_open");
const addTaskDiv = document.getElementById("create_task");
const background = document.getElementById("background");
const taskInfo = document.getElementById("task_info");
const infoClose = document.getElementById("info_close");
const projectTaskList = document.getElementById("project_task_list");
const taskHead = document.getElementById("task_head");
const taskBtn = document.getElementById("tsk_btn");


// if (localStorage.getItem("todo") != null){
//     projects = JSON.parse(localStorage.getItem("todo"))
//     displayTodo()
// }
const addTaskFormToggle = (mode) => {
    background.style.display = mode;
    addTaskDiv.style.display = mode;
}
const taskInfoToggle = (mode) => {
    background.style.display = mode;
    taskInfo.style.display = mode;
}

background.addEventListener('click', () => {
    addTaskDiv.style.display = "none";
    taskInfo.style.display = "none";
    background.style.display = "none";
})

addTaskBtn.addEventListener('click', e => {
    e.preventDefault();
    taskHead.innerText = "Add Task";
    taskBtn.innerText = "Create Task";
    addTaskForm.reset();
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

infoClose.addEventListener('click', () => {
    taskInfoToggle("none");
})

projectList.addEventListener('click', e => {
    if (e.target.tagName !== "LI") return;
    const projectName = e.target.innerText;
    activeProject.changeProject = projectName;
    indicateActiveProject(projectName);
    displayTodo().displayProject();
    displayTodo().displayProjectTask();
    indicateActiveProject(projectName);
})

projectTaskList.addEventListener('click', e => {
    const target = e.target;
    const tParent = target.parentElement
    const grandParent = tParent.parentElement
    const ggrandParent = grandParent.parentElement
    const index = ggrandParent.id;
    if (target.tagName == "IMG") {
        if (target.alt == "delete") {
            projects[activeProject.project].splice(index, 1);
        } else if (target.alt == "edit") {
            taskHead.innerText = "Edit Task";
            taskBtn.innerText = "Save Changes";
            ediTask(~~index);
            addTaskFormToggle("block");
            
        } else if (target.alt == "info") {
            displayTodo().displayTaskInfo(~~index);
            taskInfoToggle("block");
        }
        displayTodo().displayProjectTask();
    };
})
