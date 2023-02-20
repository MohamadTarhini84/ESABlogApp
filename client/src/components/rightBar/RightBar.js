import Button from '../buttons/button'
import UserTemplate from '../userTemplate/userOnline'

const RightBar = () => {
  const user={
    name:"John Doe",
    picture:"https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600",
    isOnline: true
  }

  return (
    <div className="rightBar absolute right-0 w-1/4 rounded-bl-lg">
      <div className="container">
        <div className="rightBar-item">
          <span className="text-base">Suggestions For You</span>
          <div className="rightBar-user">
            <UserTemplate user={user}/>
            <div className="rightBar-buttons">
              <Button colour='green'></Button>
              <Button colour='red'></Button>
            </div>
          </div>
          <div className="rightBar-user">
            <UserTemplate user={user}/>
            <div className="rightBar-buttons">
              <Button colour='blue'></Button>
              <Button colour='red'></Button>
            </div>
          </div>
        </div>
        <div className="rightBar-item text-start">
          <span className="text-base">Online Friends</span>
          <div className="grid grid-cols-2 w-full">
            <UserTemplate user={user}/>
            <UserTemplate user={user}/>
            <UserTemplate user={user}/>
            <UserTemplate user={user}/>
            <UserTemplate user={user}/>
            <UserTemplate user={user}/>
            <UserTemplate user={user}/>
            <UserTemplate user={user}/>
            <UserTemplate user={user}/>
            <UserTemplate user={user}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightBar;
