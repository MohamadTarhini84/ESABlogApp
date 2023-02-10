import './Home.css'
import Stories from '../components/home/stories'
import PostInput from '../components/home/postInput'
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';
import Button from '../components/buttons/button';

function Home(){
    const [inputCheck, setCheck]=useState(false)
    let storyInputValue;

    return (
        <div className='Home p-4 w-2/3 ml-24'>
            <div className="stories">
                <form className="min-w-ok relative w-32 rounded-md bg-black hover:cursor-pointer">
                    <img className="m-0 rounded-md w-full h-full" 
                        src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"/>
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center 
                                    absolute bottom-1 left-1 text-white bg-blue-500 ${inputCheck?"hidden":""}`}>
                        {!inputCheck && <AddIcon/>}
                    </div>
                    {inputCheck && <Button className='absolute bottom-1 left-1' onClick={console.log("poggers")}>Post</Button>}
                    <input type="file" className='inputfile absolute top-0 left-0 hover:cursor-pointer' value="" onChange={(e) => {
                        if(e.target.value.length > 0){
                            storyInputValue=e.target.files
                            setCheck(true)
                            console.log(e.target.value)
                        } else {
                            setCheck(false)
                            console.log("ok1")
                        }}}/>
                </form>
                <Stories/>
                <Stories/>
                <Stories/>
                <Stories/>
                <Stories/>
                <Stories/>
                <Stories/>
                <Stories/>
            </div>
            <PostInput/>
        </div>
    )
}

export default Home;