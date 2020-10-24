import React from 'react'
import VideoItem from './videoItem'

export default function VideoList({videos}) {
    return  (
        <div className="row mt-5">
           { videos.map((video) => <VideoItem  video={video} key={video._id} /> )}
        </div>
    )
}
