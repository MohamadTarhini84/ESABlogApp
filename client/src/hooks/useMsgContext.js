import { MsgContext } from "../context/messageBarContext";
import { useContext } from "react";

export const useMsgContext =()=>{
    const context=useContext(MsgContext)

    if(!context){
        throw Error("useMsgContext used outside of MsgContextProvider")
    } else
        return context
}