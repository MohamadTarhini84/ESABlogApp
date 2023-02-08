function Bubble(props){
    let side=props.switch?"self-end flex-row-reverse":"";
    let colour=props.switch?"green":"blue";
    return (
        <div className={`flex gap-2 items-center text-white ${side}`}>
            <img className="w-10 h-10 rounded-full"/>
            <div className={`bg-${colour}-400 rounded-3xl w-auto p-2 flex items-center h-6`}>
                Hello World
            </div>
        </div>
    )
}

export default Bubble