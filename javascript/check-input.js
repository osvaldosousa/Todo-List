function toggleCheck(event) {
  const idiceArrray = event.target.attributes.id.value
  allTask[idiceArrray].checked = true
};

function checkInput() {
  const taskCreated = document.querySelectorAll('[data-task]');
  taskCreated.forEach((checkedBox) => {
    checkedBox.addEventListener('click', toggleCheck(event))
  })
};