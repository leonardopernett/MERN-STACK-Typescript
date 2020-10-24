import mongoose , {ConnectionOptions} from 'mongoose'


( async ()=>{

 try {

  const config: ConnectionOptions = {
    useUnifiedTopology: true ,
    useNewUrlParser: true,
   /*  user:"admin",
       pass:"admin"
   */
  }
  const db = await mongoose.connect('mongodb://localhost/mern-typescript', config)
  console.log("db is connected", db.connection.name)

 } catch (error) {
    console.log(error)
 }
})()



