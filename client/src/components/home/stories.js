import { useState } from 'react'
import StoryPopup from '../popups/story'

function Stories(props){
    const [show, setShow]=useState(false)

    return (
        <div className="min-w-ok relative w-32 rounded-md bg-black">
            <img className="m-0 rounded-md w-full h-full hover:opacity-80 hover:cursor-pointer" 
                    src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                    onClick={()=>setShow(true)}/>
            {show && <StoryPopup func={()=>setShow()}/>}
        </div>
    )
}

export default Stories

