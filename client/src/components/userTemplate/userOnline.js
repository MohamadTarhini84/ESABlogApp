function userTemplate(props){
    return (
        <div className="userTemplate flex justify-start my-2 items-center w-full p-2">
            <img
            src={props.user.picture}
            alt=""
            />
            <span>{props.user.name}</span>
            {props.user.isOnline==true ? 
                <span className='w-3 h-3 bg-white ml-3 rounded-full border-4 border-green-500'></span> 
                :<span className='w-3 h-3 bg-white ml-3 rounded-full border-4 border-gray-500'></span>
            }
        </div>
    )
}

export default userTemplate