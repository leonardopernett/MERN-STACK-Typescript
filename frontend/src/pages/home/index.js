import React,{lazy} from 'react'
import videoHook from 'hooks/videoHook'

const VideoList = lazy(()=>import('components/video/videoList'))

export default function Home() {
 const {state} = videoHook()
  return (
    <div>
       <VideoList videos={state}  />
    </div>
  )
}
