function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    if (taskInput.value.trim() === "") {
        return; // ignore empty tasks
    }

    var li = document.createElement("li");  //creating a list element dynamically
    li.textContent = taskInput.value; //the input value enetered will be assigned

    var deleteButton = document.createElement("button"); //creates a delete button for eveyr task simultaneously
    deleteButton.textContent = "Delete"; 
    deleteButton.className = "delete-button"; //class to the delete button
    deleteButton.onclick = function () {
        deleteTask(li);
    };

    li.appendChild(deleteButton); //the delete button will be added

    taskList.appendChild(li);
    taskInput.value = "";
    
    // Save task to local storage
    saveTaskToLocalStorage(taskList.innerHTML);
}

function saveTaskToLocalStorage(tasks) {
    localStorage.setItem("tasks", tasks);
    //localstorage-> built-in object for web browsers; provides API for storing keyValue pairs locally
    //"tasks"-> key under which data will be stored (Key)
    //tasks-> the innerHTML ie content of taskList thats <li> stuffs(Actual data)
}

function deleteTask(taskElement) {
    var taskList = document.getElementById("taskList");
    taskList.removeChild(taskElement);

    //Saves the updated tasks to Local Storage after deleting
    saveTaskToLocalStorage(taskList.innerHTML);
}

function getTasksFromLocalStorage() {
    return localStorage.getItem("tasks") || "";
    //returns items from taskList(local storage); if empty then returns empty string
}

function displayTasks() {
    var taskList = document.getElementById("taskList");
    var savedTasks = getTasksFromLocalStorage();
    taskList.innerHTML = savedTasks;
}

// Display tasks when the page is loaded or refreshed
document.addEventListener("DOMContentLoaded", function () {
    displayTasks();
});
