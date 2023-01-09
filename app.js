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

const htmlListElements = Array.from(document.querySelectorAll(".list-group-item > .form-check-label"));

for (let i in htmlListElements) {
  console.log(htmlListElements[i].textContent = apiData[i].title);
}
