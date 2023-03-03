function filterActive() {
  const taskActive = allTask.filter(task => {
    return task.checked === false
  })
  
  showTasks(taskActive)
};

const liTaskActive = document.querySelector('.task-active')
liTaskActive.addEventListener('click', filterActive)

// Tasks Completed

function filterCompleted() {
  const taskCompleted = allTask.filter(task => {
    return task.checked === true
  })
  
  showTasks(taskCompleted)
};

const liTaskCompleted = document.querySelector('.task-completed')
liTaskCompleted.addEventListener('click', filterCompleted)

// Filter AllTasks

function filterAllTasks() {
  showTasks(allTask)
};

const liAllTasks = document.querySelector('.task-all')
liAllTasks.addEventListener('click', filterAllTasks)