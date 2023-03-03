const allTask = [];
function newTask(task) {
  const $boxTasks = document.querySelector('#list-task');
  $boxTasks.innerHTML = "";

  allTask.push({
    texto: task,
    checked: false,
    id: allTask.length
  })

  showTasks(allTask)
};

function handleNewTask() {
  const tasksInput = document.querySelector('.new-task');
  const taskValue = tasksInput.value

  if (taskValue === "") return

  tasksInput.value = "";

  newTask(taskValue);
};

const buttonNewTask = document.querySelector('.btn-new-task');
buttonNewTask.addEventListener('click', handleNewTask);