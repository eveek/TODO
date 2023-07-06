import { projects, projectArrList, activeProject } from "./addProject";
import { displayTodo } from "./displayTodo";



export default function delProject () {
    // const curProject = projectArrList.list.find(prj => prj = activeProject.project);
    const index = projectArrList.list.indexOf(activeProject.project);
    projectArrList.list.splice(index, 1);
    delete projects.theProject[activeProject.project]
    activeProject.changeProject = projectArrList.list[projectArrList.list.length - 1];

    displayTodo().displayProject();
    if (projectArrList.list.length > 0) {
        displayTodo().displayProjectTask();
    } else {
        document.getElementById("project_task_list").innerHTML = "";

    }

    // console.log(index)
    // console.log(activeProject.project)
}