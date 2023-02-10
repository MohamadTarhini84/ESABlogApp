function notification(props){
    let span="";
    if(props.type==="like"){
        span="has liked your post"
    } else if(props.type==='comment'){
        span="has commented on your post"
    }

    return (
        <div className='w-full h-12 bg-gray-50 py-4 flex gap-2 items-center hover:bg-gray-200'>
            <img className="w-10 h-10 min-w-okk rounded-full"/>
            <span className="flex items-center text-left text-ss">
                {`John Doe ${span}`}
            </span>
        </div>
    )
}

export default notification