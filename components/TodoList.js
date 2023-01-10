import { TodoListItem } from "./TodoListItem.js";

/**
 * Special Task type matching task elements structure received by API calls
 * @typedef {object} Task
 * @property {number} id
 * @property {string} title
 * @property {boolean} completed
 */

/**
 * Class representing the TodoList Element
 */
export class TodoList
{

    /**
     * @type {Task[]}
     * @private
    */
    #tasks = [];

    /**
     * @type {HTMLUListElement}
     * @private
    */
    #ulListElement;

    /**
     * @param {Task[]} tasks
     */
    constructor (tasks) {
        this.#tasks = tasks
    }

    /**
     * @param {HTMLElement} element
     */
    appendTo (element)
    {

        element.innerHTML =
            `<form class="d-flex pb-4">
                <input required="" class="form-control" type="text" placeholder="Add new task" name="tasktitle">
                <button class="btn btn-primary">Add</button>
            </form>

            <main>
                <div class="btn-group mb-4 filter" role="group">
                    <button type="button" class="btn btn-outline-primary active" data-filter="all">All</button>
                    <button type="button" class="btn btn-outline-primary" data-filter="todo">Todo</button>
                    <button type="button" class="btn btn-outline-primary" data-filter="done">Done</button>
                </div>

                <ul class="list-group">
                </ul>
            </main>`

        this.#ulListElement = element.querySelector('.list-group')
        for (let task of this.#tasks) {
            const t = new TodoListItem(task);
            this.#ulListElement.append(t.getHTMLliElement);
        };

        element.querySelector('form').addEventListener('submit', e => this.#onSubmit(e));
        element.querySelectorAll('.btn-group button').forEach(button =>
        {
            button.addEventListener('click', e => this.#toggleFilter(e));
        });
    }

    /**
     * @param {SubmitEvent} e
     * @private
     */
    #onSubmit (e) 
    {
        e.preventDefault()
        const form = e.currentTarget;
        const title = new FormData(form).get('tasktitle').toString().trim();
        if (title === '')
        {
            return;
        };

        /** @type {Task} */
        const newTask =
        {
            id: Date.now(),
            title,
            completed: false
        };

        const item = new TodoListItem(newTask);
        this.#ulListElement.prepend(item.getHTMLliElement);
        form.reset();
    }

    /**
     * @param {PointerEvent} e
     * @private
     */
    #toggleFilter (e)
    {
        e.preventDefault();
        const filter = e.currentTarget.getAttribute('data-filter');
        e.currentTarget.parentElement.querySelector('.active').classList.remove('active');
        e.currentTarget.classList.add('active');

        if (filter === 'todo') {
            this.#ulListElement.classList.add('hide-completed');
            this.#ulListElement.classList.remove('hide-in-progress');
        } else if (filter === 'done') {
            this.#ulListElement.classList.add('hide-in-progress');
            this.#ulListElement.classList.remove('hide-completed');
        } else {
            this.#ulListElement.classList.remove('hide-in-progress');
            this.#ulListElement.classList.remove('hide-completed');
        };
    };

}

