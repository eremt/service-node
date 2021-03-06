const server = require('./server')
const { log } = require('./src/utils/logger')

const {
  NODE_ENV,
  HOST,
  PORT,
  DOCS,
  npm_package_name: name,
  npm_package_version: version,
} = process.env
const isDev = NODE_ENV === 'development'

const urlDocumentation = `http://${HOST}:${PORT}${DOCS}`
const serverInfo = {
  name,
  version,
  documentation: isDev ? urlDocumentation : undefined,
}

server.get('/', (req, res) => {
  res.json(serverInfo)
})

if (isDev) {
  const swaggerUi = require('swagger-ui-express')
  const swagger = require('./swagger')
  server.use(DOCS, swaggerUi.serve, swaggerUi.setup(swagger))
}

server.use((req, res) => res.status(404).json({ code: 404, message: 'Not found.' }))

server.listen(PORT, HOST, () => {
  if (isDev) {
    log(`Server running on http://${HOST}:${PORT}`)
    log(`Documentation running on ${urlDocumentation}`)
  }
})
