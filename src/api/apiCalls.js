export const fetchSynonyms = async (searchTerm) => {
  
  let url =`https://www.dictionaryapi.com/api/v3/references/thesaurus/json/${searchTerm}?key=${process.env.VUE_APP_API_KEY}`
  
  try {
    let data = await fetch(url)
    if (!data.ok) {
      throw new Error('There was an error when fetching your synonyms. Please try again.')
    }
    let results = await data.json()
    return results[0]
  } catch (error) {
    return error
  }
  
}