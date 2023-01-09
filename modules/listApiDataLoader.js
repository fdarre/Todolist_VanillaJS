/**
 * @returns {Array<Object>}
 *
*/
export async function getListElements(){
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