

function Button(props){
    if(props.colour==='red'){
        return (
            <button className="Button bg-red-400">
                {props.children || "Ignore"}
            </button>
        )
    } else{
        return (
            <button className="Button bg-blue-400">
                {props.children || "Follow"}
            </button>
        )        
    } 
}

export default Button