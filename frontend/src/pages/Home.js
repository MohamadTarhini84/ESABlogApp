import { useEffect }from 'react'
import { useAuthContext } from "../hooks/useAuthContext"

const Home = () => {
  const {user} = useAuthContext()
  useEffect(()=>{
    
    if (user) {
      
    }

}, [ user])
return (
  <div className="home">
    <div className="workouts">
      <h2>We are in home</h2>
    </div>
    
  </div>
)
}

export default Home