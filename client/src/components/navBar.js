import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Link } from 'react-router-dom';
import { useMsgContext } from '../hooks/useMsgContext';
import Notifications from './popups/notification';

function NavBar(){
    var {msg,noti,dispatch}= useMsgContext()
  
    function handleMsgClick(){
      if(msg===""){
        dispatch({type:'msgBar',payload:"translate-y-72"})
      } else{
        dispatch({type:'msgBar',payload:""})
      }
    }

    function handleNotiClick(){
        if(noti===""){
        dispatch({type:'notiBar',payload:"hidden"})
        } else{
        dispatch({type:'notiBar',payload:""})
        }
    }

    return (
        <div className="navBar text-blue-500 h-12 w-full z-10 fixed flex justify-between items-center bg-gray-50 border-b-2 border-gray-200">
            <div className="navbar-left flex p-2 justify-evenly w-2/5 items-center">
                <Link to="/" >
                    <span className='font-extrabold'>The Social Network</span>
                </Link>
                <div className='navbar-search border-gray-100 bg-white border-2 rounded-lg flex'>
                    <SearchIcon className='hover:cursor-pointer rounded-xl'/>
                    <input type="text" placeholder='Type to search' className='rounded-lg focus:outline-none'/>
                </div>
            </div>
            <div className="navbar-right flex p-2 justify-between items-center w-1/4">
                <Link to="/home" >
                    <HomeIcon/>
                </Link>
                <MailOutlineIcon onClick={handleMsgClick} className="hover:cursor-pointer"/>
                <NotificationsIcon onClick={handleNotiClick} className="hover:cursor-pointer"/>
                <div className='flex border-l-2 border-gray-300 pl-4'>
                    <img src="adad" className='rounded-xl'/>
                    <span className='mx-2'>John Doe</span>
                </div>
            </div>
            <Notifications/>
        </div>
    )
}

export default NavBar