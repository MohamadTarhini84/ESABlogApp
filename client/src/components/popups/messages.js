import { useMsgContext } from '../../hooks/useMsgContext';
import PersonBubble from './personBubble'

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
      <div id="myMessBar" className={`w-96 h-1/2 fixed bottom-0 right-28 bg-blue-200 rounded-t-lg ${msg}
      transition-all ease-in-out z-10`}>
          <div className="absolute top-0 w-full h-10 bg-blue-400 rounded-t-lg" 
                      onClick={handleClick}>
              <button id="messBarButton" className='absolute top-0 left-6' 
                    onClick={handleClick}>
                {msg===""?"hide":"show"}
              </button>
          </div>
          <div className='flex flex-col-reverse h-full w-full rounded-t-xl px-4'>
            <PersonBubble switch={false}/>
            <PersonBubble switch={true}/>
          </div>
      </div>
  )
}

export default Messages