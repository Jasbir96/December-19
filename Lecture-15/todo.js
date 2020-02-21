const input = document.querySelector("input");
const ul = document.querySelector("ul");
const form = document.querySelector("form");
// const value=input.value;
// currentTarget => eventListener
(function getTaskFromLS () {
    if (localStorage.getItem("TaskList") != null) {
        const taskArr = JSON.parse(localStorage.getItem("TaskList"));
        
        for (let i = 0; i < taskArr.length; i++) {
            addOneTask(taskArr[i]);
        }
    }
})()



function addOneTask(task) {
    const li = document.createElement("li");
    li.setAttribute("class", "task");
    li.innerHTML = `<p>${task}</p >
<img src="cross.png" alt="">`
    // li => img
    ul.appendChild(li);
    input.value = "";
    const img = li.querySelector("img");
    img.addEventListener("click", removeTask);

}












form.addEventListener("submit", function (e) {
    // page will never reload
    e.preventDefault();
    //    const button= e.currentTarget;
    const task = input.value;

    //   addTaskToLS
    addOneTask(task)

    addTaskToLS(task)
}
)

function addTaskToLS(task) {
    if (localStorage.getItem("TaskList") == null) {
        const TaskList = [task];
        localStorage.setItem("TaskList", JSON.stringify(TaskList));
    } else {
        const sTaskList = localStorage.getItem("TaskList");
        const TaskList = JSON.parse(sTaskList);
        TaskList.push(task);
        localStorage.setItem("TaskList", JSON.stringify(TaskList));
    }
}

function removeTask(e) {
    // console.log(e);
    const task = e.target.parentElement.querySelector("p").textContent;
    console.log(task)
    removeTaskFromLs(task);
    e.target.parentElement.remove();
    // removeTaskFromLS

}

function removeTaskFromLs(task) {
    const sTasks = localStorage.getItem("TaskList");
    const TaskList = JSON.parse(sTasks);
    const idx = TaskList.indexOf(task.trim());
     TaskList.splice(idx, 1);
    ;

    localStorage.setItem("TaskList", JSON.stringify(TaskList));
}








