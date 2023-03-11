// Create a list element
// Create a span element
// Create a button
// Add span and button as a chlild of li
// add to the ul

function createLi(taskText) {
  // Create a li element
  const liElem = document.createElement('li')
  const spanElem = document.createElement('span')
  spanElem.innerHTML = taskText
  const button = document.createElement('button')
  button.addEventListener('click', deleteTask)
  button.innerHTML = 'Delete'
  liElem.appendChild(spanElem)
  liElem.appendChild(button)
  return liElem
}

function deleteTask(e) {
  const elem = e.target.parentElement
  elem.remove(elem)
}

function addTaskToList() {
  const inputElem = document.querySelector('#task-input').value
  const ulElem = document.querySelector('ul')
  ulElem.appendChild(createLi(inputElem))
}

document.getElementById('add').addEventListener('click', addTaskToList)
