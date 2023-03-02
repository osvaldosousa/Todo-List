function showTaskCompleted(taskActive) {
  const $boxTasks = document.querySelector('#list-task');
  $boxTasks.innerHTML = "";

  taskActive.forEach(elemento => {
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
}

function filterCompleted() {
  const taskCompleted = allTask.filter(task => {
    return task.checked === true
  })
  
  showTaskCompleted(taskCompleted)
};

const liTaskCompleted = document.querySelector('.task-completed')
liTaskCompleted.addEventListener('click', filterCompleted)