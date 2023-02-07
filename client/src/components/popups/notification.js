import { useMsgContext } from '../../hooks/useMsgContext';

function Notifications(){
  var {noti}= useMsgContext()

  return (
      <div id="notiBar" className={`w-72 h-72 fixed flex flex-col top-10 right-36 ${noti} bg-blue-200 rounded-b-lg 
      transition-all ease-in-out z-10`}>
        <div className='w-100 h-10 bg-blue-500 text-white'>
            Notifications
        </div>
        <div className='h-full bg-gray-100 rounded-b-lg flex flex-col border-2 pt-2 border-gray-300 overflow-y-scroll'>
            <div className='w-full h-12 bg-gray-200 hover:bg-gray-300'>

            </div>
        </div>
      </div>
  )
}

export default Notifications