
const projectHead = document.getElementById("project_head_para");
const projectTaskList = document.getElementById("project_task_list");


function displayProject (projectName) {
    projectHead.innerText = `// ${projectName}`;
    const task = document.createElement("li");
    task.innerHTML = `<div class="li_title">
                            <input type="checkbox">
                            <p>Visit the laundry shop</p>
                        </div>
                        <div class="li_btn">
                            <div class="due_date">25/07/2023</div>
                            <button><img src="./images/edit.png" alt="edit"></button>
                            <button><img src="./images/bin.png" alt="delete"></button>
                            <button><img src="./images/info.png" alt=""></button>
                        </div>`;

}

export default displayProject