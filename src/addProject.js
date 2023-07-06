import { displayTodo } from "./displayTodo";
import indicateActiveProject from "./indicateActiveProject";

const projectName = document.getElementById("new_project_name");


const projects = {
    theProject: {},
    set setProject (value) {
        this.theProject = value;
    }
};
const projectArrList = {
    list: [],
    set setList (value) {
        this.list = value;
    }
};
const activeProject = {
    project: "",

    set changeProject(project){
        this.project = project;
        localStorage.setItem("activeProject", JSON.stringify(activeProject.project));
    }
}

function addProject() {
    const newProjectName = projectName.value;
    if (newProjectName === "") return;
    const strProjectName = newProjectName.charAt(0).toUpperCase() + newProjectName.slice(1).toLowerCase();

    activeProject.changeProject = strProjectName;
    localStorage.setItem("activeProject", JSON.stringify(activeProject.project));
    // const newProject = new project(strProjectName)
    // projects.push(newProject);
    projects.theProject[strProjectName] = [];
    projectArrList.list.push(strProjectName);
    displayTodo().displayProject();
    displayTodo().displayProjectTask();
    projectName.value = "";
    indicateActiveProject(strProjectName);
}

export {addProject, projects, projectArrList, activeProject};