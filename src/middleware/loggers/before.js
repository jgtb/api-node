const parseUrl = (url) => url.split('?')[0]

export default (req, _, next) => {
  const { method, originalUrl } = req
  const url = parseUrl(originalUrl)

  console.log('beforeLoggers', { method, url })
  next()
}
