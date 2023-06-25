import displayTodo from "./displayTodo";
import indicateActiveProject from "./indicateActiveProject";

const projectName = document.getElementById("new_project_name");


let projects = {};
let projectDomList = [];
const activeProject = {
    project: "",

    set changeProject(project){
        this.project = project;
    }
}

function addProject() {
    const newProjectName = projectName.value;
    if (newProjectName === "") return;
    const strProjectName = newProjectName.charAt(0).toUpperCase() + newProjectName.slice(1).toLowerCase();

    activeProject.changeProject = strProjectName;
    // const newProject = new project(strProjectName)
    // projects.push(newProject);
    projects[strProjectName] = [];
    projectDomList.push(strProjectName);
    displayTodo().displayProject();
    projectName.value = "";
    indicateActiveProject(strProjectName);
}

export {addProject, projects, projectDomList, activeProject};