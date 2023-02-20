import "./closeFriend.css";

export default function CloseFriend({user}) {
  const PF = "assets/person/"
  
  return (
    <li className="sidebarFriend">
      <img className="sidebarFriendImg" src={PF+user.profilePicture} alt="img" />
      <span className="sidebarFriendName">{user.username}</span>
    </li>
  );
}
