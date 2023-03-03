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

function clearLiClick() {
  const liNav = document.querySelectorAll('.li-nav');
  liNav.forEach(element => {
    element.classList.remove('-active')
    element.id === "all" ? element.classList.add('-active'): '';
  })
}

function handleNewTask() {
  const tasksInput = document.querySelector('.new-task');
  const taskValue = tasksInput.value

  if (taskValue === "") return

  tasksInput.value = "";

  newTask(taskValue);
  clearLiClick()
};

const buttonNewTask = document.querySelector('.btn-new-task');
buttonNewTask.addEventListener('click', handleNewTask);