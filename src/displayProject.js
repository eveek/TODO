import { projects } from "./addProject";
import { activeProject } from "./addProject";


const projectHead = document.getElementById("project_head_para");
const projectTaskList = document.getElementById("project_task_list");


function displayProject () {
    projectHead.innerText = `// ${activeProject.project}`;
    projectTaskList.innerHTML = "";
    projects[activeProject.project].forEach(tsk => {
        const task = document.createElement("li");
        task.className = `${tsk.priority}_imp`;
        task.innerHTML = `<div class="li_title">
                            <input type="checkbox">
                            <p>${tsk.title}</p>
                        </div>
                        <div class="li_btn">
                            <div class="due_date">${tsk.dueDate}</div>
                            <button><img src="./images/edit.png" alt="edit"></button>
                            <button><img src="./images/bin.png" alt="delete"></button>
                            <button><img src="./images/info.png" alt=""></button>
                        </div>`;

        projectTaskList.appendChild(task);
    });

}

export default displayProject