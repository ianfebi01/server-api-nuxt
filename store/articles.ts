export const useArticlesStore = definePiniaStore('articles-store', () => {
  const articles = ref([])

  return {
    articles
  }
})
