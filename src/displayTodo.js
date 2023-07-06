import { projects, projectArrList, activeProject } from "./addProject";
import indicateActiveProject from "./indicateActiveProject";
import { toggleProjectTokens } from ".";



const projectHead = document.getElementById("project_head_para");
const projectTaskList = document.getElementById("project_task_list");
const projectList = document.getElementById("project_list");
const completedTask = document.getElementById("comp_task");
const remainingTask = document.getElementById("remain_task");


function displayFigures () {
    const proLength = projects.theProject[activeProject.project].length
    let remainNumb = 0;
    for (const proj of projects.theProject[activeProject.project]) {
        if (proj.checked) remainNumb++;
    }
    completedTask.innerText = remainNumb;
    remainingTask.innerText = proLength - remainNumb;
    // console.log('vvv')
}




function displayTodo () {
    
    
    function displayProject () {
        localStorage.setItem("pList", JSON.stringify(projectArrList.list));
        let storageArrProjectsList = JSON.parse(localStorage.getItem("pList"));
        // console.log(storageArrProjectsList)
        if (storageArrProjectsList.length > 0 ) {
            toggleProjectTokens("flex");
            projectHead.innerText = `// ${activeProject.project}`;
        } else {
            toggleProjectTokens("none");
            projectHead.innerText = `// Hi, Add a project`;
        }  
        projectList.innerHTML = "";
        for (const project of storageArrProjectsList) {
            const li = document.createElement("li");
            li.textContent = project;
            projectList.appendChild(li);
            
        }
        if (storageArrProjectsList.length > 0 ) {
            indicateActiveProject();
        }

    }

    function displayProjectTask () {
        localStorage.setItem("todo", JSON.stringify(projects.theProject));
        let storageArrProjects = JSON.parse(localStorage.getItem("todo"));
        projectTaskList.innerHTML = "";
        const curProject = storageArrProjects[activeProject.project];
        for (let i = 0; i < curProject.length; i++) {
            const task = document.createElement("li");
            task.className = `${curProject[i].priority}_imp`;
            if (curProject[i].checked == true) {
                task.classList.add("check");
            }else {
                task.classList.remove("check");
            }
            task.id = `${i}`
            task.innerHTML = `<div class="li_title">
                                <input type="checkbox" class="task_checkbox" ${curProject[i].checked? "checked":""}>
                                <p>${curProject[i].title}</p>
                            </div>
                            <div class="li_btn">
                                <div class="due_date">${curProject[i].dueDate}</div>
                                <button><img src="./images/edit.png" alt="edit"></button>
                                <button><img src="./images/bin.png" alt="delete"></button>
                                <button><img src="./images/info.png" alt="info"></button>
                            </div>`;
            
        
            projectTaskList.appendChild(task);
            

            
        }
        displayFigures();
    }

    function displayTaskInfo (index) {
        const infoTitle = document.getElementById("info_title");
        const infoDescription = document.getElementById("info_description");
        const infoDate = document.getElementById("info_date");
        const infoPriority = document.getElementById("info_priority");
        const infoProject = document.getElementById("info_project");

        const curProject = projects.theProject[activeProject.project][index];

        infoTitle.innerText = curProject.title;
        infoDescription.innerText = curProject.description;
        infoDate.innerText = curProject.dueDate;
        infoPriority.innerText = curProject.priority;
        infoProject.innerText = activeProject.project;
    }

return {displayProject, displayProjectTask, displayTaskInfo}

}

export { displayTodo, displayFigures }