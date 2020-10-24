import { useContext, useEffect } from 'react'
import * as videoServices from 'services/getVideo'
import {Context} from 'context/videoContext'

export default function VideoHook() {
  const {state , setstate}= useContext(Context)

  const loadVideo  = async ()=>{
      const res =  await videoServices.getVideo()
      const formateVideo = res.map(video=>{
         return {
            ...video,
            createdAt: video.createdAt ? new Date(video.createdAt) : new Date()
         }
      }).sort((a,b)=>b.createdAt - a.createdAt)
      setstate(formateVideo)
}
  
  useEffect(() => {
      loadVideo()
   }, [state, setstate])
  
  return {state}
}
  