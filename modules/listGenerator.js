export function generateList(data){
  for (let i = 0; i < data.length; i++){
    let newTaskTitle = data[i].title;
    createListElement(newTaskTitle);
  }

  handleAddBtnClickEvent();
}

function handleAddBtnClickEvent(){
  const addButton = document.querySelector("#addButton");
  addButton.addEventListener("click", getUserInput);
}

function getUserInput(e){
  e.preventDefault();
  const userInputFormElement = document.querySelector("#user-input");
  createListElement(userInputFormElement.value);
}

let itemCounter = 0;

function createListElement(description){

  itemCounter++;

  let newElement = document.createElement('li');

  newElement.classList.add("todo", "list-group-item", "d-flex", "align-items-center");

  document.querySelector('.list-group').appendChild(newElement);

  const listElementHTML =
    `<input class="form-check-input" type="checkbox" id="todo-${itemCounter}">
    <label class="ms-2 form-check-label" for="todo-${itemCounter}">
      ${description}
    </label>
    <label class="ms-auto btn btn-danger btn-sm">
      <i class="bi-trash"></i>
    </label>`;

    newElement.innerHTML = listElementHTML;

    handleDeleteBtnClickEvent(newElement);
}

function handleDeleteBtnClickEvent(newElement) {
  let deleteBtn = newElement.querySelector('.btn-danger');
  deleteBtn.addEventListener("click", () => newElement.remove());
}




