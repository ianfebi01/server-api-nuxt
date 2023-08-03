import { joinURL, withQuery } from 'ufo'

export default defineEventHandler(async (event) => {
  const { apiAcessToken, apiBaseUrl } = useRuntimeConfig()
  const queryParam = getQuery(event)
  const path = getRouterParam(event, 'path') ?? ''

  const customQuery = {
    ...queryParam,
    per_page: 3
  }
  if (apiAcessToken) {
    event.node.req.headers.authorization = `Bearer ${apiAcessToken}`
  }

  return await proxyRequest(event, withQuery(joinURL(apiBaseUrl, '/public/v2', path), customQuery))
})
