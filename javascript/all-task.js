function showAllTask() {
  const $boxTasks = document.querySelector('#list-task');
  $boxTasks.innerHTML = "";

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
  `)
  });
}

const liAllTasks = document.querySelector('.task-all')
liAllTasks.addEventListener('click', showAllTask)