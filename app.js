import { createElement } from "./functions/dom.js";
import { fetchJSON } from "./functions/api.js";
import { TodoList } from "./components/TodoList.js";

try
{
    const tasks = await fetchJSON('https://jsonplaceholder.typicode.com/todos?_limit=5', {method: 'GET'});
    const todoList = new TodoList(tasks);
    todoList.appendTo(document.querySelector('#todolistcontainer'));
}
catch (e)
{
    const alertElement = createElement('div',
    {
        class: 'alert alert-danger m-2',
        role: 'alert'
    });
    alertElement.innerText = 'Impossible to fetch the elements';
    document.body.prepend(alertElement);
    console.error(e);
}
