import Stories from '../components/home/stories'
import Action from '../components/popups/actionSuccess';
import Posts from '../components/home/showPosts';
import PostInput from '../components/home/postInput'
import AddIcon from '@mui/icons-material/Add';
import { useEffect, useRef, useState } from 'react';
import { useAuthContext } from '../hooks/useAuthContext';
import axios from 'axios';

function Home(){
    const myForm=useRef()
    const {user}=useAuthContext()
    const [inputCheck, setCheck]=useState(0)
    const [inputValue, setInputValue]=useState(null)
    const [showAction, setShowAction]=useState(false)
    const [isLoading, setIsLoading]=useState(true)

    async function handleSubmit(event){
        event.preventDefault()
        setShowAction(true)
        try {
            const formData= new FormData()
            formData.append('image',inputValue)
            formData.append('username', user.data.name)
            formData.append('profilePicture', "http://localhost:3001/assets/Images/1674480139398_plplpl.png")
            formData.append('image', inputValue)

            const response=await axios.post(
                'api/stories/new/'+user.data.id,
                formData,
                {
                    headers:{
                        "Content-Type":"multipart/form-data"
                    }
                })
            console.log(response)
            setIsLoading(false)
        } catch(error){
            console.log(error)
            alert("An error occured")
            setShowAction(false)
            setInterval(setIsLoading(false), 500); 
        }
    }

    function clearForm(event){
        event.preventDefault();
        myForm.current.reset()
        setCheck(0);
    }
    
    const [stories, setStories]=useState([])
    const [posts, setPosts]=useState([])
    
    useEffect(()=>{

        async function getStories(){
            try{
                const result=await axios.get('/api/stories/'+user.data.id)
                setStories(result.data)
                return null
            } catch(error){
                console.log(error)
                return null
            }
        }

        async function getPosts(){
            try{
                const result=await axios.get('/api/posts/'+user.data.id)
                setPosts(result.data)
                return null
            } catch(error){
                console.log(error)
                return null
            }
        }

        getStories()
        console.log(stories)
        getPosts()
        console.log(posts)
    },[]) 

    // const stories=[{
    //     id:"1111123",
    //     pfp:'http://localhost:3001/assets/Images/1674480139398_plplpl.png',
    //     name:'ali mantach',
    //     createdAt:'2023-02-12T17:51:33.974+00:00',
    //     pic:'http://localhost:3001/assets/Images/1674480139398_plplpl.png',
	// },{
    //     id:"1111123",
    //     pfp:'http://localhost:3001/assets/Images/1674480139398_plplpl.png',
    //     name:'ali mantach',
    //     createdAt:'2023-02-12T17:51:33.974+00:00',
    //     pic:'https://pbs.twimg.com/media/FmV1xy9aAAArJeK?format=jpg&name=4096x4096',
	// }]

    return (
        <div className='Home flex flex-col gap-10 p-4 w-2/3 ml-24 mt-12'>
        {showAction && <Action value={showAction} onClick={()=>setShowAction()} isLoading={isLoading} action="Upload"/>}
            <div className="stories">
                <form ref={myForm} className="min-w-ok flex flex-col items-center justify-evenly w-32 rounded-md bg-gray-50">
                   <div className={`w-10 h-10 hover:scale-105 hover:cursor-pointer relative rounded-full flex items-center justify-center 
                                    text-white bg-blue-500`}>
                        <AddIcon className='hover:cursor-pointer'/>
                        <input type='file' className='inputfile absolute rounded-full'
                            onChange={(e)=>{setCheck(e.target.files.length);setInputValue(e.target.files[0])}}/>
                    </div>
                    {!inputCheck==0 && <h1>{inputValue.name}</h1>}
                    {inputCheck==0 && <h1>Upload story</h1>}
                    <div>
                        {!inputCheck==0 && <button className='Button bg-green-500' type='submit' onClick={(e)=>handleSubmit(e)}>Upload</button>}
                        {!inputCheck==0 && <button className='Button bg-red-500' type='submit' onClick={(e)=>clearForm(e)}>cancel</button>}
                    </div>
                </form>
                {stories && stories.map((story)=><Stories key={story._id} story={story}/>)}
            </div>
            <PostInput/>
            {posts && posts.map((post)=><Posts key={post._id} post={post}/>)}
        </div>
    )
}

export default Home;