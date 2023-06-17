import displayProject from "./displayProject";

const projectList = document.getElementById("project_list");
const projectName = document.getElementById("new_project_name");


let projects = {};
let activeProject = "";

function addProject() {
    const newProjectName = projectName.value;
    if (newProjectName === "") return;
    const strProjectName = newProjectName.charAt(0).toUpperCase() + newProjectName.slice(1).toLowerCase();
    const li = document.createElement("li");
    li.textContent = strProjectName;
    projectList.appendChild(li);
    projectName.value = "";
    projects[strProjectName] = [];
    activeProject = strProjectName;
    displayProject(activeProject);
}

export {addProject, projects, activeProject};