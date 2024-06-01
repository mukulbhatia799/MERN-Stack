const input_task1 = document.getElementById('task-1');
const input_task2 = document.getElementById('task-2');
const display_taskDiv = document.getElementById('taskDiv');
const container = document.getElementById('container');

let globalIdOfTasks = 1;

function markAsDone(taskId) {
    const removeTask = document.getElementById(`${taskId}`);
    removeTask.innerHTML = "Done!";
    removeTask.style.borderColor = "green";
    console.log(container);
}

function addTaskFunction() {
    const value1 = input_task1.value;
    const value2 = input_task2.value;
    const parentDiv = document.createElement('div');
    parentDiv.setAttribute('id', `${globalIdOfTasks}`);

    const child1 = document.createElement('di');
    child1.innerHTML = value1;
    const child2 = document.createElement('div');
    child2.innerHTML = value2;
    const child3 = document.createElement('button');
    child3.setAttribute('onclick', `markAsDone(${globalIdOfTasks})`);
    globalIdOfTasks++;
    child3.innerHTML = "Mark As Done";
    parentDiv.appendChild(child1);
    parentDiv.appendChild(child2);
    parentDiv.appendChild(child3);
    container.appendChild(parentDiv);
    console.log(container);
}