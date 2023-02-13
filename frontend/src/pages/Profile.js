import { useEffect, useState } from "react"

const Profile = () => {

    const [users, setUsers] = useState(null);

    useEffect(()=>{
        const fetchUser = async () => {
           
            const res = await fetch(`/api/user`);
            const json= await res.json()

            if(res.ok){
                setUsers(json)
            }
        };
        fetchUser();
  }, []);
    

    return (
        <div className="home">
          <div className="workouts">
            <h2>We are in Profile</h2>
            <div>
                {users && users.map((user)=>(
                <h1><p key={user._id}>{user.username}</p></h1>
                ))}
            </div>
          </div>
          
        </div>
    )
}
export default Profile