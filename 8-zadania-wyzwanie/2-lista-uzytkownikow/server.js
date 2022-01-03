const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db/database.json')
const middlewares = jsonServer.defaults({ noCors: true })

server.use(middlewares)
server.use(router)
server.listen(3000, () => {
  console.log('JSON Server is running')
})