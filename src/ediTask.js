import { projects, activeProject } from "./addProject";


function ediTask (index) {
    const title = document.getElementById("title");
    const description = document.getElementById("description");
    const date = document.getElementById("date");

    const curProject = projects[activeProject.project][index];

    title.value = curProject.title;
    description.value = curProject.description;
    date.valueAsDate = strDate();

    if (curProject.priority == "low") {
        const lowP = document.getElementById("low_priority");
        lowP.checked = true;
    } else if (curProject.priority == "medium") {
        const mediumP = document.getElementById("medium_priority");
        mediumP.checked = true;
    } else {
        const highP = document.getElementById("high_priority");
        highP.checked = true;
    }

    function strDate () {
        const dueDate = curProject.dueDate;
        const [day, month, year] = dueDate.split("/");
        return new Date(`${year}-${month}-${day}`)
    }

}


export default ediTask;