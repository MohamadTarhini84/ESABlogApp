import "./profile.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";


const Profile=()=> {

  const [user, setUser] = useState('');
  const username = useParams().username;

  useEffect(() => {
    const fetchUser = async () => {
      const res = await fetch(`api/user/?id=63eff787cadd6d553cb06187`);
      setUser(res.data);
    };
    fetchUser();
  }, [username]);


  /*const [user, setUser] = useState({});
  const username = useParams().username;

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`api/user/users/$`);
      setUser(res.data);
    };
    fetchUser();
  }, [username]);
*/
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src="assets/post/3.jpeg"
                alt=""
              />
              <img
                className="profileUserImg"
                src="assets/person/1.jpeg"
                alt=""
              />
            </div>
            <div className="profileInfo">
                <h4 className="profileInfoName">{user.username}</h4>
                <span className="profileInfoDesc">Hello my friends!</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
         
            <Rightbar profile/>
          </div>
        </div>
      </div>
    </>
  );
}
export default Profile