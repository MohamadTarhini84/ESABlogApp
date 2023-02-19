import Friends from "../../assets/1.png";
import Groups from "../../assets/2.png";
import Market from "../../assets/3.png";
import Watch from "../../assets/4.png";
import Memories from "../../assets/5.png";
import Events from "../../assets/6.png";
import Gaming from "../../assets/7.png";
import Gallery from "../../assets/8.png";
import Videos from "../../assets/9.png";
import Messages from "../../assets/10.png";
import Tutorials from "../../assets/11.png";
import Courses from "../../assets/12.png";
import Fund from "../../assets/13.png";
import {useState} from 'react'
import KeyboardTabIcon from '@mui/icons-material/KeyboardTab';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';

const LeftBar = () => {
  const [sideNav, setSideNav]= useState(false)
  

  function handleSideNav(){
    if(sideNav===false){
      document.getElementById("mySidenav").classList.remove('-translate-x-3/4');
      setSideNav(true)
      
    } else{
      document.getElementById("mySidenav").classList.add('-translate-x-3/4');
      setSideNav(false)
    }
  }

  return (
    <div id="mySidenav" className="leftBar absolute left-0 w-44 bg-gray-50 rounded-br-lg shadow-lg -translate-x-3/4
    transition-all ease-in-out mt-12">
      <button id="sideNavButton" className="absolute top-2 right-2 text-gray-500" onClick={handleSideNav} colour="blue">
        {sideNav?<KeyboardReturnIcon/>:<KeyboardTabIcon/>}
      </button>
      <div className="container">
        <div className="leftBar-menu">
          <div className="leftBar-item">
            <img src={Friends} alt="" />
            <span>Friends</span>
          </div>
          <div className="leftBar-item">
            <img src={Groups} alt="" />
            <span>Groups</span>
          </div>
          <div className="leftBar-item">
            <img src={Market} alt="" />
            <span>Marketplace</span>
          </div>
          <div className="leftBar-item">
            <img src={Watch} alt="" />
            <span>Watch</span>
          </div>
          <div className="leftBar-item">
            <img src={Memories} alt="" />
            <span>Memories</span>
          </div>
        </div>
        <div className="leftBar-menu">
          <span className="leftBar-title">Your shortcuts</span>
          <div className="leftBar-item">
            <img src={Events} alt="" />
            <span>Events</span>
          </div>
          <div className="leftBar-item">
            <img src={Gaming} alt="" />
            <span>Gaming</span>
          </div>
          <div className="leftBar-item">
            <img src={Gallery} alt="" />
            <span>Gallery</span>
          </div>
          <div className="leftBar-item">
            <img src={Videos} alt="" />
            <span>Videos</span>
          </div>
          <div className="leftBar-item">
            <img src={Messages} alt="" />
            <span>Messages</span>
          </div>
        </div>
        <div className="leftBar-menu">
          <span className="leftBar-title">Others</span>
          <div className="leftBar-item">
            <img src={Fund} alt="" />
            <span>Fundraiser</span>
          </div>
          <div className="leftBar-item">
            <img src={Tutorials} alt="" />
            <span>Tutorials</span>
          </div>
          <div className="leftBar-item">
            <img src={Courses} alt="" />
            <span>Courses</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBar;
