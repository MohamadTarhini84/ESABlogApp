import { useMsgContext } from '../../hooks/useMsgContext';
import PersonBubble from './personBubble'
import Button from '../buttons/button'

function Messages(){
  var {msg,dispatch}= useMsgContext()

  function handleClick(){
    if(msg===""){
      dispatch({type:'msgBar',payload:"translate-y-72"})
    } else{
      dispatch({type:'msgBar',payload:""})
    }
  }

  return (
      <div id="myMessBar" className={`w-96 h-1/2 fixed bottom-0 right-28 flex flex-col 
      bg-blue-200 rounded-t-lg ${msg} transition-all ease-in-out z-10 text-white`}>
          <div className=" w-full h-10 bg-blue-400 rounded-t-lg" 
                      onClick={handleClick}>
              <button id="messBarButton" className='absolute top-0 left-6' 
                    onClick={handleClick}>
                {msg===""?"hide":"show"}
              </button>
              <span>Global Chat</span>
          </div>
          <div className='flex flex-col-reverse h-full w-full rounded-t-xl px-4'>
            <PersonBubble switch={false}/>
            <PersonBubble switch={true}/>
          </div>
          <div className='h-10 w-full flex justify-center items-center'>
            <label className='text-ss'>Send Message:</label>
            <input type="text" className='focus:outline-none p-1 m-2 h-1/2' placeholder='Hello everyone!'/>
            <Button>Send</Button>
          </div>
      </div>
  )
}

export default Messages