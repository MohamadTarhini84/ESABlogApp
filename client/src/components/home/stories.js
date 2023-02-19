import { useState } from 'react'
import StoryPopup from '../popups/story'

function Stories({story}){
    const [show, setShow]=useState(false)

    return (
        <div className="min-w-ok relative w-32 rounded-md bg-black">
            <img className="m-0 rounded-md w-full h-full hover:opacity-80 hover:cursor-pointer" 
                    src={story.storyPic}
                    onClick={()=>setShow(true)}/>
            {show && <StoryPopup func={()=>setShow()} story={story}/>}
        </div>
    )
}

export default Stories

