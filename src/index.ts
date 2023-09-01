import server from './server'

const HOST: string = process.env.HOST!
const PORT: number = +process.env.PORT!

server.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`)
})
