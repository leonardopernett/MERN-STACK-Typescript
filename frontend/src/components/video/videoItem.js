import React from 'react'
import ReactPlayer from 'react-player'
import {useHistory} from 'react-router-dom'
import './video.css'
import {deleteVideo} from 'services/getVideo'
import {toast} from 'react-toastify'


export default function VideoItem({video}) {
  const history = useHistory()

  const removeVideo = async (id)=>{
    if(window.confirm('are you sure tah delete')){
      await deleteVideo({id:id})
      toast.error('video eliminado')
    }
  }

  return (
      <div className="col-md-4">
      <div className="card video-card" >
         <div className="card-body">
            <div className="d-flex justify-content-between align-items-center">
                <h4 onClick={()=>history.push(`/video/edit/${video._id}`)}>{video.title}</h4>
                <span className="text-danger" onClick={()=>removeVideo(video._id)}>
                    X
                </span>
            </div>
            <p>{video.description}</p>
            
             <div className="embed-responsive embed-responsive-16by9">
              <ReactPlayer url={video.url}  />
             </div>
        </div>
        </div>
      </div>
  )
}
