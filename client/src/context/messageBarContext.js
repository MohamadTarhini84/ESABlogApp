import { createContext, useReducer } from "react";

export const MsgContext = createContext()

export const msgReducer =(state,action)=>{
    switch(action.type){
        case "msgBar":
            return {msg:action.payload,noti:state.noti}
        case "notiBar":
            return {msg:state.msg,noti:action.payload}
        default:
            return state
    }
}

export const MsgContextProvider = ({children})=>{
    const [state, dispatch] = useReducer(msgReducer, {
        msg:"translate-y-72",
        noti:"hidden"
    })

    return (
        <MsgContext.Provider value={{...state, dispatch}}>
            {children}
        </MsgContext.Provider>
    )
}