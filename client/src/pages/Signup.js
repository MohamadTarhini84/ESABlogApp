import { useState } from "react"
import { useSignup } from "../hooks/useSignup"
import { Link } from 'react-router-dom'
import "./signup.css";

const Signup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstname, setfirstname] = useState('')
  const [lastname, setlastname] = useState('')
  const [username, setusername] = useState('')
  const {signup, error, isLoading} = useSignup()

  const handleSubmit = async (e) => {
    e.preventDefault()

    await signup(email,username,firstname,lastname, password)
  }

  return (
    
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">ESAsocial</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on ESAsocial.
          </span>
        </div>
        <div className="loginRight">

    <form className="loginBox" onSubmit={handleSubmit}>
      <h3>Sign Up</h3>
      
      <label>Email address:</label>
      <input 
        type="email" 
        className="loginInput"
        onChange={(e) => setEmail(e.target.value)} 
        value={email} 
      />
      <label>Username:</label>
      <input 
        type="text" 
        className="loginInput"
        onChange={(e) => setusername(e.target.value)} 
        value={username} 
      />
      <label>firstname:</label>
      <input 
        type="text" 
        className="loginInput"
        onChange={(e) => setfirstname(e.target.value)} 
        value={firstname} 
      />
      <label>lastname:</label>
      <input 
        type="text" 
        className="loginInput"
        onChange={(e) => setlastname(e.target.value)} 
        value={lastname} 
      />
      <label>Password:</label>
      <input 
        type="password" 
        className="loginInput"
        onChange={(e) => setPassword(e.target.value)} 
        value={password} 
      />

      <button className="loginRegisterButton" disabled={isLoading}>Sign up</button>
      {<div><Link to="/login">Login</Link></div>}
      {error && <div className="error">{error}</div>}
    </form>
    </div>
      </div>
    </div>
  )
}

export default Signup