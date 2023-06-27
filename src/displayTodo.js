import { projects, projectDomList, activeProject } from "./addProject";


const projectHead = document.getElementById("project_head_para");
const projectTaskList = document.getElementById("project_task_list");
const projectList = document.getElementById("project_list");





function displayTodo () {
    // localStorage.setItem("todo", JSON.stringify(projects));
    // const arrProjects = JSON.parse(localStorage.getItem("projects"));
    function displayProject () {
        projectList.innerHTML = "";
        projectHead.innerText = `// ${activeProject.project}`;
        for (const project of projectDomList) {
            const li = document.createElement("li");
            li.textContent = project;
            projectList.appendChild(li);

        }


}

    function displayProjectTask () {
        projectTaskList.innerHTML = "";
        projects[activeProject.project].forEach(tsk => {
        });
        for (let i = 0; i < projects[activeProject.project].length; i++) {
            const task = document.createElement("li");
            task.className = `${projects[activeProject.project][i].priority}_imp`;
            task.id = `${i}`
            task.innerHTML = `<div class="li_title">
                                <input type="checkbox">
                                <p>${projects[activeProject.project][i].title}</p>
                            </div>
                            <div class="li_btn">
                                <div class="due_date">${projects[activeProject.project][i].dueDate}</div>
                                <button><img src="./images/edit.png" alt="edit"></button>
                                <button><img src="./images/bin.png" alt="delete"></button>
                                <button><img src="./images/info.png" alt="info"></button>
                            </div>`;
        
            projectTaskList.appendChild(task);

            
        }
    }

    function displayTaskInfo (index) {
        const infoTitle = document.getElementById("info_title");
        const infoDescription = document.getElementById("info_description");
        const infoDate = document.getElementById("info_date");
        const infoPriority = document.getElementById("info_priority");
        const infoProject = document.getElementById("info_project");

        const curProject = projects[activeProject.project][index];

        infoTitle.innerText = curProject.title;
        infoDescription.innerText = curProject.description;
        infoDate.innerText = curProject.dueDate;
        infoPriority.innerText = curProject.priority;
        infoProject.innerText = activeProject.project;
    }

return {displayProject, displayProjectTask, displayTaskInfo}

}

export default displayTodo