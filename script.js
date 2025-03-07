function addTask() {
    const taskInput = document.getElementById("taskInput");
    const deadlineInput = document.getElementById("deadlineInput");
    const taskText = taskInput.value.trim();
    const deadline = deadlineInput.value;
    if (taskText === "" || deadline === "") return;

    const li = document.createElement("li");
    li.innerHTML = `<span onclick="toggleTask(this)">${taskText}</span>
        <span class="deadline">(Due: ${new Date(deadline).toLocaleString()})</span>
        <div class="actions">
            <button onclick="toggleTask(this.parentElement.parentElement)">✔</button>
            <button onclick="deleteTask(this.parentElement.parentElement)">❌</button>
        </div>`;
    document.getElementById("taskList").appendChild(li);
    scheduleReminder(taskText, deadline);
    taskInput.value = "";
    deadlineInput.value = "";
}

function toggleTask(element) {
    element.classList.toggle("completed");
}

function deleteTask(element) {
    element.remove();
}

function scheduleReminder(taskText, deadline) {
    const timeUntilReminder = new Date(deadline) - new Date();
    if (timeUntilReminder > 0) {
        setTimeout(() => {
            alert(`Reminder: Task "${taskText}" is due soon!`);
        }, timeUntilReminder - 60000);
    }
}
