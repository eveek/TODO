import {addProject, activeProject, projects, projectArrList} from "./addProject";
import { displayTodo, displayFigures } from "./displayTodo";
import { createNewTask } from "./createTask";
import ediTask from "./ediTask";
import delProject from "./delProject";


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
const taskBar = document.getElementById("project_bar");
const delBtn = document.getElementById("del_project");


if (localStorage.getItem("todo") !== null ){
    projects.setProject = JSON.parse(localStorage.getItem("todo"));
    projectArrList.setList = JSON.parse(localStorage.getItem("pList"));
    activeProject.changeProject = JSON.parse(localStorage.getItem("activeProject"));
    console.log(projects.theProject)
    displayTodo().displayProject();
    displayTodo().displayProjectTask();
}
const addTaskFormToggle = mode => {
    background.style.display = mode;
    addTaskDiv.style.display = mode;
}
const taskInfoToggle = mode => {
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
    curTaskForm.changeForm = "add";
    addTaskForm.reset();
    addTaskFormToggle("block");
})


addTaskForm.addEventListener('submit', e => {
    e.preventDefault();
    // if (curTaskForm.form !== "add") return;
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
    localStorage.setItem("activeProject", JSON.stringify(activeProject.project));
    displayTodo().displayProject();
    displayTodo().displayProjectTask();
})

projectTaskList.addEventListener('click', e => {
    const target = e.target;
    const tParent = target.parentElement;
    const grandParent = tParent.parentElement;
    const ggrandParent = grandParent.parentElement;
    const index = ggrandParent.id;
    if (target.tagName !== "IMG") return;
    if (target.tagName == "IMG") {
        if (target.alt == "delete") {
        projects.theProject[activeProject.project].splice(index, 1);
        } else if (target.alt == "edit") {
            taskHead.innerText = "Edit Task";
            taskBtn.innerText = "Save Changes";
            curTaskForm.changeForm = "edit";
            curLiDiv.changeLi = index;
            ediTask();
            addTaskFormToggle("block");
            
        } else if (target.alt == "info") {
            displayTodo().displayTaskInfo(~~index);
            taskInfoToggle("block");
        } 
    }
    displayTodo().displayProjectTask();
})

projectTaskList.addEventListener('click', e => {
    if (e.target.tagName !== "INPUT") return;
    const tParent = e.target.parentElement;
    const grandParent = tParent.parentElement;
    const index = grandParent.id;
    projects.theProject[activeProject.project][~~index].checked = e.target.checked;
    if (projects.theProject[activeProject.project][~~index].checked == true) {
        grandParent.classList.add("check");
    } else {
        grandParent.classList.remove("check");
    }
    displayFigures();
    // grandParent.classList.add()
    // console.log(e.target.checked)
})


const curTaskForm = {
    form: "",
    set changeForm(formName) {
        this.form = formName;
    }
}

const curLiDiv = {
    li: "",
    set changeLi(li) {
        this.li = li;
    }
}

function toggleProjectTokens (mode) {
    delBtn.style.display = mode
    taskBar.style.display = mode
}

delBtn.addEventListener('click', delProject);

export { curTaskForm, curLiDiv, toggleProjectTokens }

