import mongoose from 'mongoose'


export interface IVideo extends mongoose.Document{
  title:string,
  url:string,
  description:String
}

const videoSchema = new mongoose.Schema({
   url:{
     type:String, required:true
   },
   title:{
    type:String, required:true
  },
  description:{
    type:String, required:true
  },
},{
  timestamps:true,
  versionKey:false
})

export default mongoose.model<IVideo>('Video', videoSchema)