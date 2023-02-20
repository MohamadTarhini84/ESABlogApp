import { useAuthContext } from "../../hooks/useAuthContext";

function Bubble(props){
    const {user}=useAuthContext()
    let side=user.id===props.chat.id?"self-end flex-row-reverse":"";
    let colour=user.id===props.chat.id?"bg-green-400":"bg-blue-400";
    return (
        <div className={`flex gap-2 items-center text-left text-white ${side}`}>
            <img src={props.chat.pfp} className="w-10 h-10 rounded-full"/>
            <div className={`${colour} rounded-3xl w-auto p-2 relative flex items-center h-6 text-ss`}>
                {!user.id===props.chat.id && <span className="text-sxs absolute -top-4 left-0">
                    {props.chat.name}
                </span>}
                <span className="min-w-ok">
                    {props.chat.message}
                </span>
            </div>
        </div>
    )
}

export default Bubble