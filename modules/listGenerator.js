let currentItem = 0;

function createListElement(description){

  currentItem++;

  let newElement = document.createElement('li');

  newElement.classList.add("todo", "list-group-item", "d-flex", "align-items-center");

  document.querySelector('.list-group').appendChild(newElement);

  const listElementHTML =
    `<input class="form-check-input" type="checkbox" id="todo-${currentItem}">
    <label class="ms-2 form-check-label" for="todo-${currentItem}">
      ${description}
    </label>
    <label class="ms-auto btn btn-danger btn-sm">
      <i class="bi-trash"></i>
    </label>`;

    newElement.innerHTML = listElementHTML;
}

export function generateList(data){
  for (let i = 0; i < data.length; i++){
    let newTaskTitle = data[i].title;
    createListElement(newTaskTitle);
  }
}

