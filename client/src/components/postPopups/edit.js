import axios from "axios";
import { useState } from "react";
import Button from "../buttons/button";

function EditPopup(props){
    const [editValue, setEditValue]=useState("")

    async function handleEdit(id){
        try{
            const result=await axios.patch('/api/posts/edit/'+id,{caption:editValue})
            console.log(result)
            alert("Post edited successfully")
        } catch(error){
            console.log(error)
            alert('An error occured')
        }
    }

    return (
        <div className="fixed top-1/3 gap-2 right-1/3 rounded-md w-1/2 h-auto border-2 flex flex-col border-gray-200 bg-white p-2">
            <h1 className="self-start">Edit Post</h1>
            <input type="text" className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
             focus:outline-none block p-2 " onChange={(e)=>setEditValue(e.target.value)}/>
            <div className="flex self-end">
                <Button colour="blue" onClick={()=>handleEdit(props.postId)}>Confirm</Button>
                <Button colour="red" onClick={props.cancel()}>Cancel</Button>
            </div>
        </div>
    )
}

export default EditPopup