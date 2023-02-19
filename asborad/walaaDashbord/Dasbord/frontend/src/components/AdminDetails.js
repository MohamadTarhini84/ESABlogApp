import { useAdminsContext } from "../hooks/useAdminsContext"

const AdminDetails =({admin}) => {
const { dispatch } = useAdminsContext()
    const handleClick = async () => {
       const response= await fetch('/api/admins/' + admin._id, {
        method:'DELETE'
       })
       const json = await response.json()

       if (response.ok){
        dispatch({type: 'DELETE_ADMIN' , payload:json})
       }
    }
    const handleUpdate = async () => {
   
     
      const response= await fetch('/api/admins/' + admin._id, {
       method:'PATCH'

      })
      const json = await response.json()
 

      if (response.ok){
       dispatch({type: 'PATCH_ADMINS' , payload:json})
      }
   }
    return(
     <div className="admin-details">
        {/* <h4>{admin.username}</h4> */}
       
        <p><strong>ID:</strong>{admin._id}</p> 
        
        <p><strong >Email:</strong>{admin.email}</p>
        <p><strong>Username:</strong>{admin.username}</p>
        {/* <p><strong>Password:</strong>{admin.password}</p> */}
        <p>{admin.createdAt}</p>
        <span className="material-symbols-outlined" onClick={handleClick}>delete</span>
        
       
     </div>
    )

}

export default AdminDetails