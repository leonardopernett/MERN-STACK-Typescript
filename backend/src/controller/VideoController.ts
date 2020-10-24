import {Request, Response} from 'express'
import Video from '../model/Video'


export const getVideos = async  (req:Request, res:Response)=>{
  const videos = await Video.find();
  res.json(videos)
}

export const getOneVideos = async (req:Request, res:Response)=>{
  const video= await Video.findById(req.params.id);
  if(!video) return res.json({message:"no hay video "})
  res.json(video)
}

export const deleteVideos = async (req:Request, res:Response)=>{
  await  Video.deleteOne({_id:req.params.id})
  res.json('get video deleted')
}

export const UpdateVideos = async(req:Request, res:Response)=>{
  await Video.updateOne({_id:req.params.id},{
    url:req.body.url,
    title:req.body.title,
    description:req.body.description
  })
  res.json('get video update')
}

export const createVideos = async(req:Request, res:Response)=>{
  const videoUrl = await Video.findOne({url:req.body.url})
  if(videoUrl){
    return res.status(500).json({message:"url al ready exist "})
  }
  
 const video = new Video(req.body)
 await video.save();
  res.json({
    message:"video created"
  })
}