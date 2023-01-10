/**
 * Create a HTML element with provided HTML tag and attributes
 * @param {string} tagName
 * @param {object} attributes
 * @return {HTMLElement}
 */
export function createElement(tagName, attributes = {})
{
    const element = document.createElement(tagName);
    for (let [attribute, value] of Object.entries(attributes))
    {
        if (value !== null)
        {
            element.setAttribute(attribute, value);
        };
    };
    return element;
}

