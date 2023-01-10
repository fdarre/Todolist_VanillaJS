import { createElement } from "../functions/dom.js";

/**
 * Class representing a TodoList individual item
 */
export class TodoListItem
{

    /**
     * HTML element with Li tag representing the list item
     * @type {HTMLElement}
     * @private
    */
    #itemHTMLliElement;


    /**
     * @param {Task} task
     * */
    constructor(task) {
        const id = `todo-${task.id}`;
        const li = createElement('li',
        {
            class: 'todo list-group-item d-flex align-items-center'
        });
        this.#itemHTMLliElement = li;
        const checkbox = createElement('input',
        {
            type: 'checkbox',
            class: 'form-check-input',
            id,
            checked: task.completed ? '' : null
        });
        const label = createElement('label',
        {
            class: 'ms-2 form-check-label',
            for: id
        });
        label.innerText = task.title;
        const button = createElement('button',
        {
            class: 'ms-auto btn btn-danger btn-sm'
        });
        button.innerHTML = '<i class="bi-trash"></i>';

        li.append(checkbox);
        li.append(label);
        li.append(button);
        this.toggleIsCompletedState(checkbox);

        button.addEventListener('click', e => this.remove(e));
        checkbox.addEventListener('change', e => this.toggleIsCompletedState(e.currentTarget));
    }

    /**
     * @return {HTMLElement}
     */
    get getHTMLliElement()
    {
        return this.#itemHTMLliElement;
    };

    /**
     * @param {PointEvent} e
     */
    remove(e)
    {
        e.preventDefault();
        this.#itemHTMLliElement.remove();
    };

    /**
     * Toggle task state done and todo
     *
     * @param {HTMLInputElement} checkbox
     */
    toggleIsCompletedState(checkbox)
    {
        if (checkbox.checked)
        {
            this.#itemHTMLliElement.classList.add('is-completed');
        }
        else
        {
            this.#itemHTMLliElement.classList.remove('is-completed');
        };
    };
}
