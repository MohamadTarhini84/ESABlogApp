import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Link } from 'react-router-dom';
import { useMsgContext } from '../hooks/useMsgContext';
import Notifications from './popups/notifications';
import {useAuthContext} from '../hooks/useAuthContext'
import {useLogout} from '../hooks/useLogout'

function NavBar(){
    const {logout}=useLogout()
    const {user}=useAuthContext()
    const {msg,noti,dispatch}= useMsgContext()
    console.log(user)
  
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
            <div className="navbar-right mr-12 flex p-2 justify-between items-center w-1/4">
                <Link to="/home" >
                    <HomeIcon className='m-2 hover:scale-110 hover:text-black'/>
                </Link>
                <MailOutlineIcon onClick={handleMsgClick} className="m-2 hover:cursor-pointer hover:scale-110 hover:text-black"/>
                <NotificationsIcon onClick={handleNotiClick} className="m-2 hover:cursor-pointer hover:scale-110 hover:text-black"/>
                <div className='flex border-l-2 items-center border-gray-300 pl-4'>
                    <img src="http://localhost:3001/assets/Images/1674480139398_plplpl.png" className='rounded-xl w-6 h-6'/>
                    <span className='mx-2 mr-6'>{user.data.name}</span>
                </div>
                <button className='border-2 border-blue-500 rounded-md p-1' onClick={logout}>Log out</button>
            </div>
            <Notifications/>
        </div>
    )
}

export default NavBar