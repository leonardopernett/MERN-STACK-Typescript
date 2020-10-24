import React,{useState, useContext, useEffect} from 'react'
import {saveVideo, updateVideo} from 'services/getVideo'
import {useHistory, useParams} from 'react-router-dom'
import {toast} from 'react-toastify'
import  {Context} from 'context/videoContext'

export default function VideoForm() {
   const [inputs, setInputs] = useState({
      url:"", title:"", description:""
   })
   const location = useHistory()
   const {id}= useParams()
   const {state}= useContext(Context)

  
  useEffect(() => {
    if(id) {
      let res = state.filter((v)=> v._id === id)
      setInputs({...inputs,
        url:res[0].url,
        description:res[0].description,  
        title:res[0].title
      })
    }
  }, [id])

  const handlerSubmit = async (e)=>{
    e.preventDefault()
      if(id){
        await updateVideo({item:inputs, id:id})
        toast.success('video updated successfully')
        location.push(`/video`)
      }else{
        await saveVideo({item:inputs})
        toast.success('video created successfully')
        location.push(`/video`)
      }
    
  }

  const inputChange = (e)=>{
       setInputs({...inputs,
         [e.target.name]:e.target.value
       })
  }

  return (
    <div className="row">
       <div className="col-md-5 mx-auto">
          <div className="card">
              <div className="card-body">
                  <h3> New Video</h3>
                 <form onSubmit={handlerSubmit}>
                    <div className="form-group">
                      <input value={inputs.url} type="text" name="url" onChange={inputChange} className="form-control" placeholder="url" autoFocus  />
                    </div>
                    <div className="form-group">
                      <input value={inputs.title} type="text" name="title" onChange={inputChange} className="form-control" placeholder="title"   />
                    </div>
                    <div className="form-group">
                      <textarea name="description" onChange={inputChange} className="form-control" placeholder="Description" defaultValue={inputs.description}  rows={3}></textarea>
                    </div>
                    <button className="btn btn-primary btn-block">create video</button>
                 </form>
              </div>
          </div>
       </div>
    </div>
  )
}
