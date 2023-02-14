import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

function Notification(props){
    const [user, setUser]=useState(null)

    // useEffect(async ()=>{
    //     const user=axios.get('/users',{params:{id:props.noti.to}})
    //     setUser(user.data)
    // },[])

    let span="";
    if(props.noti.content==="like"){
        span="has liked your post"
    } else if(props.noti.content==='comment'){
        span="has commented on your post"
    }

    return (
        <Link to={`/profile/${user && user.id}`} className='w-full h-12 bg-gray-50 py-4 flex gap-2 items-center hover:bg-gray-200'>
            <img src={user && user.pfp} className="w-10 h-10 min-w-okk rounded-full"/>
            <span className="flex items-center text-left text-ss">
                {`${user && user.name} ${span}`}
            </span>
        </Link>
    )
}

export default Notification