module.exports = ctx => {
  if (!ctx) return {}
  const request = ctx.req
  const connection = request.connection
  const address = connection && connection.address && connection.address()
  const portNumber = address && address.port
  const url = `${ctx.request.href}`
  return {
    url,
    path: request.url,
    httpMethod: request.method,
    headers: request.headers,
    httpVersion: request.httpVersion,
    query: ctx.request.query,
    connection: request.connection ? {
      remoteAddress: request.connection.remoteAddress || request.ip,
      remotePort: request.connection.remotePort,
      bytesRead: request.connection.bytesRead,
      bytesWritten: request.connection.bytesWritten,
      localPort: portNumber,
      localAddress: address ? address.address : undefined,
      IPVersion: address ? address.family : undefined
    } : undefined
  }
}
