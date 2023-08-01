function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    if (taskInput.value.trim() === "") {
        return; // Ignore empty tasks
    }

    var li = document.createElement("li");
    li.textContent = taskInput.value;
    taskList.appendChild(li);
    taskInput.value = "";

    
    // Save task to local storage
    saveTaskToLocalStorage(taskList.innerHTML);
}

function saveTaskToLocalStorage(tasks) {
    localStorage.setItem("tasks", tasks);
}
