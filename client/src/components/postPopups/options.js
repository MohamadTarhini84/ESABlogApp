import { useAuthContext } from "../../hooks/useAuthContext"
import { useState } from "react";
import EditPopup from "../postPopups/edit";
import Button from "../buttons/button"
import axios from "axios"

function Options(props){
    const {user}=useAuthContext()
    const [edit, setEdit]=useState(false)

    function toggleEdit(){
        setEdit(()=>!edit)
    }

    async function handleDelete(id){
        try{
            const result=await axios.delete('/api/posts/delete/'+id)
            console.log(result)
            alert('Post deleted successfully')
        } catch(error){
            console.log(error)
            alert('An error occured')
        }
    }

    async function handleReport(id){
        try{
            const result=await axios.patch('/api/posts/report/'+id,{username:user.name,id:user.data.id})
            console.log(result)
            alert('Post reported successfully')
        } catch(error){
            console.log(error)
            alert("An error occured")
        }
    }

    return (
        <div className="absolute flex flex-col translate-y-4 w-24 z-10 bg-gray-50 p-1 border-2 border-gray-300 rounded-md shadow-sm">
            {user.data.id===props.post.userId && 
                <button className="w-full bg-red-400 hover:bg-red-100 text-white" onClick={()=>handleDelete(props.post._id)}>Delete</button>}
            {user.data.id===props.post.userId && 
                <button className="w-full hover:bg-gray-100" onClick={toggleEdit}>Edit</button>}
            <button className="w-full hover:bg-gray-100" onClick={()=>handleReport(props.post._id)}>Report</button>
            {edit && <EditPopup cancel={()=>toggleEdit} postId={props.post._id}/>}
        </div>
    )
}

export default Options