import Button  from "../buttons/button"
import PermMediaIcon from '@mui/icons-material/PermMedia';
import { useState, useRef } from "react";
import Action from "../popups/actionSuccess";
import { useAuthContext } from "../../hooks/useAuthContext";
import axios from "axios";

function PostInput(){
    const myPostForm=useRef()
    const {user}=useAuthContext()
    const [postType,setPostType]=useState("")
    const [caption, setCaption]=useState("")
    const [postInput, setPostInput]=useState(null)
    const [showAction, setShowAction]=useState(false)
    const [isLoading, setIsLoading]=useState(true)

    async function handleForm(event){
        event.preventDefault()

        if(postType===""){
            alert("Make sure you've selected an upload option")
            return
        } else if(caption===""){
            alert("Make sure you've entered a text input")
            return
        } 
        setShowAction(true)
        try{
            const formData=new FormData()
            formData.append('content',postType)
            formData.append('username',user.data.name)
            formData.append('caption',caption)
            formData.append('image',postInput)

            const result=await axios.post('/api/posts/new/'+user.data.id,
            formData,
            {
                headers:{
                    "Content-Type":"multipart/form-data"
                }
            })
            console.log(result)
            setIsLoading(false)
        } catch(error){
            console.log(error)
            alert("An error occured")
            setShowAction(false)
            setIsLoading(false)
        }
    }
    
    return (
        <form ref={myPostForm} className="w-full h-36 bg-white flex flex-col rounded-lg shadow-lg">
            {showAction && <Action value={showAction} onClick={()=>setShowAction()} isLoading={isLoading} action="Upload"/>}
            <div className="flex w-full h-2/3 items-center">
                <img src="" className="w-10 h-10 m-3"/>
                <textarea type="text" placeholder="What's on your mind?" className="p-2 rounded-md focus:outline-none 
                        w-full h-full resize-none" onChange={(e)=>setCaption(e.target.value)}/>
            </div>
            <div className="flex justify-between h-16 items-center pr-4  border-t-2 border-t-gray-200">
                <select className="focus:outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                                focus:ring-blue-500 focus:border-blue-500 block w-auto mx-4 my-1 p-1 dark:bg-gray-700 
                                dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 
                                dark:focus:border-blue-500" onChange={(e)=>setPostType(e.target.value)}>
                    <option disabled selected>Choose post type</option>
                    <option value='text'>Text</option>
                    <option value='image'>Image</option>
                    <option value='video'>Video</option>
                </select>
                {(postType==='image' || postType==='video') && <label className="flex items-center text-blue-500 gap-2 hover:cursor-pointer
                                p-2 my-1 h-full rounded-bl-lg transition-all ease-in-out">
                    <PermMediaIcon/>
                    <h6 className="text-xs">Click to Upload Media</h6>
                    <input type="file" name="file" className="inputfile PostInput edit-popup-element pat-information"
                                onChange={(e)=>setPostInput(e.target.files[0])}/>
                </label> }
                <button type="submit" className="Button bg-blue-500 disabled" onClick={(e)=>{handleForm(e)}}>Upload post</button>
            </div>
        </form>
    )
}

export default PostInput