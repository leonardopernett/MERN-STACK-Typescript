const API = process.env.REACT_APP_API


export const getVideo = async () =>{
   const res = await  fetch(API)
   const data = await res.json()
   return data
}

export const saveVideo = async ({item}) =>{
   const res = await fetch(API,{
            method:"POST",
            headers:{
              'Content-type':"application/json"
            },
            body:JSON.stringify(item)
        })
   const data = await res.json()
   return data
}

export const updateVideo = async ({item, id}) =>{
   const res = await fetch(`${API}/${id}/edit`,{
            method:"PUT",
            headers:{
              'Content-type':"application/json"
            },
            body:JSON.stringify(item)
        })
   const data = await res.json()
   return data
}


export const deleteVideo = async ({id}) =>{
   const res = await fetch(`${API}/${id}`,{
            method:"DELETE",
            headers:{
              'Content-type':"application/json"
            },
        })
   const data = await res.json()
    
   return data
}