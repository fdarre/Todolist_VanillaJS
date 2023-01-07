const response = fetch('https://jsonplaceholder.typicode.com/todos?_limit=5', {
  headers: {
    Accept: 'application/json'
  }
})
  .then((r) => {
    if (r.ok) {
      return r.json()
    } else {
      throw new Error('Erreur serveur', { cause: r })
    }
  })


  response.then((listitem) => {
    console.log('La liste des articles : ', listitem)
  })
  .catch((e) => {
    console.error('Une erreur est survenue', e)
  })