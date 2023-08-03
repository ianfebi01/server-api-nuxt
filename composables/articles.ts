export const useGetArticles = (page = 1, perPage = 10) => {
  return useFetch('/api/v2/posts', {
    method: 'GET',
    // server: false,
    key   : 'articles',
    params: {
      page,
      per_page: perPage
    }
  })
}
