import { useEffect, useState } from "react"
import axios from "axios"
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Link } from "react-router-dom";
import Options from "../postPopups/options";

function Posts(props){
    const [option, setOption]=useState(false)

    function toggleOption(){
        setOption(()=>!option)
    }
    // useEffect(()=>{

    // })

    function timeSince(date) {

        var seconds = Math.floor((new Date() - date) / 1000);
      
        var interval = seconds / 31536000;
      
        if (interval > 1) {
          return Math.floor(interval) + " years";
        }
        interval = seconds / 2592000;
        if (interval > 1) {
          return Math.floor(interval) + " months";
        }
        interval = seconds / 86400;
        if (interval > 1) {
          return Math.floor(interval) + " days";
        }
        interval = seconds / 3600;
        if (interval > 1) {
          return Math.floor(interval) + " hours";
        }
        interval = seconds / 60;
        if (interval > 1) {
          return Math.floor(interval) + " minutes";
        }
        return Math.floor(seconds) + " seconds";
      }

    return (
        <div className="w-full h-auto bg-white flex flex-col p-4 pb-0 rounded-md shadow-lg">
            <div className="flex justify-between">
                <div className="w-auto h-12 flex gap-2 text-left">
                    <img src="http://localhost:3001/assets/Images/1674480139398_plplpl.png"/>
                    <div className="flex flex-col">
                        <Link to='/' style={{fontSize:"20px"}}>{props.post.username}</Link>
                        <h3 style={{fontSize:"12px"}}>{timeSince(Date.parse(props.post.createdAt))}</h3>
                    </div>
                </div>
                <div className="w-auto h-10 text-gray-600 rounded-full hover:bg-blue-200" onClick={toggleOption}>
                    <MoreHorizIcon className="m-2"/>
                    {option && <Options post={props.post}/>}
                </div>
            </div>
            <div className="px-4 py-2">
                <p>{props.post.caption}</p>
            </div>
            {!(props.post.content==='text') && 
                <div className="p-4">
                    {props.post.content==='image' && <img src="server\assets\Images\1676807605377_46b2e8a985687104b79ad9b6b1956724.jpg"/>}
                    {props.post.content==='video' && <p>VIDEOS NOT SUPPORTED</p>}
                </div>
            }
            <div className="flex p-2 gap-4 border-t-2 border-gray-400">
                <h1>likes</h1>
                <h1>comments</h1>
            </div>
        </div>
    )
}

export default Posts