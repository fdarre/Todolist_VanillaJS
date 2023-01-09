/**
 * @returns {Array<Object>}
 *
*/
async function loadListElements(){
  try {
    const url = 'https://jsonplaceholder.typicode.com/todos?_limit=5';
    const res = await fetch(url,
    {
      headers: { Accept: 'application/json' },
      method: 'GET'
    });

    if (!res.ok)
    {
      throw new Error('Impossible de contacter le serveur');
    }

    const data = await res.json();
    return data;
  }

  catch (err) {
    console.error(`erreur: ${err}`);
  }
}

const apiData = await loadListElements();

//const numberOfCurrentElements = apiData.length;

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