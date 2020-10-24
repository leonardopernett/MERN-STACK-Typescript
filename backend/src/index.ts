import dotenv from 'dotenv'
dotenv.config()

import server from './app'

console.log(process.env.NODE_ENV)


server.app.listen(server.port , ()=>{
  console.log('server on port 3000')
})