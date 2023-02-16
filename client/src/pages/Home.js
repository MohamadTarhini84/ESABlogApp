import './Home.css'
import Stories from '../components/home/stories'
import PostInput from '../components/home/postInput'
import AddIcon from '@mui/icons-material/Add';
import { useEffect, useRef, useState } from 'react';
import Button from '../components/buttons/button';

function Home(){
    const myForm=useRef()
    const [inputCheck, setCheck]=useState(0)
    const [inputValue, setInputValue]=useState(null)

    function handleSubmit(event){
        event.preventDefault()
        console.log(inputValue)
    }

    function clearForm(event){
        event.preventDefault();
        myForm.current.reset()
        setCheck(0);
    }

    // const [stories, setStories]=useState([])

    // useEffect(async ()=>{
    //     try{
    //         const result=axios.get('/stories',{params:{id:"123"}})
    //         setStories(result.data.stories)
    //     } catch(error){
    //         console.log(error)
    //     }
    // }) 

    const stories=[{
        id:"1111123",
        pfp:'http://localhost:3001/assets/Images/1674480139398_plplpl.png',
        name:'ali mantach',
        createdAt:'2023-02-12T17:51:33.974+00:00',
        pic:'http://localhost:3001/assets/Images/1674480139398_plplpl.png',
	},{
        id:"1111123",
        pfp:'http://localhost:3001/assets/Images/1674480139398_plplpl.png',
        name:'ali mantach',
        createdAt:'2023-02-12T17:51:33.974+00:00',
        pic:'https://pbs.twimg.com/media/FmV1xy9aAAArJeK?format=jpg&name=4096x4096',
	}]

    return (
        <div className='Home p-4 w-2/3 ml-24'>
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
                {stories && stories.map((story)=><Stories story={story}/>)}
            </div>
            <PostInput/>
        </div>
    )
}

export default Home;