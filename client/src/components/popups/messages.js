import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import { useAuthContext } from "../../hooks/useAuthContext";
import { useMsgContext } from '../../hooks/useMsgContext';
import PersonBubble from './personBubble'
import Button from '../buttons/button'
import {io} from 'socket.io-client'
import { useState } from 'react';

function Messages(){
  const {user}=useAuthContext()
  const {msg,dispatch}= useMsgContext()
  const [msgValue, setMsgValue]=useState()
  const [msgArray,setMsgArray]=useState([])
  const socket= io('ws://localhost:3002')
  let msgArrayReverse=msgArray.slice().reverse()
  console.log(user.data.id)

  function handleClick(){
    if(msg===""){
      dispatch({type:'msgBar',payload:"translate-y-72"})
    } else{
      dispatch({type:'msgBar',payload:""})
    }
  }

  function chatHandler(){
    socket.emit('message', {message:msgValue,id:user.data.id,name:user.data.name,pfp:"http://localhost:3001/assets/Images/1674480139398_plplpl.png"})
  }
  
  socket.on('message', text =>{
    // console.log(text)
    setMsgArray(msgArray.concat(<PersonBubble key={msgArray.length} chat={text}/>))
  })

  return (
      <div id="myMessBar" className={`w-96 h-1/2 fixed bottom-0 right-28 flex flex-col 
      bg-blue-200 rounded-t-lg ${msg} transition-all ease-in-out z-10 text-white`}>
          <div className=" w-full h-10 bg-blue-400 rounded-t-lg" 
                      onClick={handleClick}>
              <button id="messBarButton" className='absolute top-0 left-6' 
                    onClick={handleClick}>
                {msg===""?<KeyboardDoubleArrowDownIcon/>:<KeyboardDoubleArrowUpIcon/>}
              </button>
              <span>Global Chat</span>
          </div>
          <div className='flex flex-col-reverse h-full w-full rounded-t-xl px-4 overflow-scroll'>
            {msgArrayReverse}
          </div>
          <div className='h-10 w-full flex justify-center items-center border-t-2 border-gray-400 bg-gray-300'>
            <label className='text-ss'>Send Message:</label>
            <input type="text" onChange={(e)=>{setMsgValue(e.target.value)}} className='focus:outline-none text-black p-1 m-2 h-1/2' placeholder='Hello everyone!'/>
            <Button onClick={chatHandler}>Send</Button>
          </div>
      </div>
  )
}

export default Messages