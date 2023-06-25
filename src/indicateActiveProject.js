import { activeProject } from "./addProject";

const projectList = document.getElementById("project_list");


const indicateActiveProject = () => {
    const projectElements = projectList.querySelectorAll("li");
    const openedProject = Array.from(projectElements).find(project => {
        return project.innerText == activeProject.project; 
    })

    projectElements.forEach(project => {
        project.className = "";
    })
    openedProject.className = "active";

}

export default indicateActiveProject;