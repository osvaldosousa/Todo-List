const allTask = [];
function newTask(task) {
  const $boxTasks = document.querySelector('#list-task');
  $boxTasks.innerHTML = "";

  allTask.push({
    texto: task,
    checked: false,
    id: allTask.length
  })

  allTask.forEach(elemento => {
    $boxTasks.insertAdjacentHTML("beforeend", `
      <li class="list-tasks">
        <input
          onclick="toggleCheck(event)"
          type="checkbox"
          name="meu-checkbox"
          data-task="task-item"
          class= "item-task"
          id= ${elemento.id}
          ${elemento.checked ? 'checked': ''}
        />
        <label for="task-item">${elemento.texto}</label>
      </li>
  `);
  })
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