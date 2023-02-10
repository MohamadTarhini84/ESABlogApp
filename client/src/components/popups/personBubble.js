function Bubble(props){
    let side=props.switch?"self-end flex-row-reverse":"";
    let colour=props.switch?"bg-green-400":"bg-blue-400";
    return (
        <div className={`flex gap-2 items-center text-white ${side}`}>
            <img className="w-10 h-10 rounded-full"/>
            <div className={`${colour} rounded-3xl w-auto p-2 relative flex items-center h-6 text-ss`}>
                {!props.switch && <span className="text-sxs absolute -top-4 left-0">
                    Ali Mantach:
                </span>}
                <span>
                    Hello World
                </span>
            </div>
        </div>
    )
}

export default Bubble