import { useState } from "react"
import { useLogin } from "../hooks/useLogin"
import { Link } from 'react-router-dom'
import "./login.css";

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {login, error, isLoading} = useLogin()

  const handleSubmit = async (e) => {
    e.preventDefault()

    await login(email, password)
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
      <h3>Log In</h3>
      
      <label>Email address:</label>
      <input 
        type="email" 
        onChange={(e) => setEmail(e.target.value)} 
        value={email} 
      />
      <label>Password:</label>
      <input 
        type="password" 
        onChange={(e) => setPassword(e.target.value)} 
        value={password} 
      />

      <button disabled={isLoading} className="loginRegisterButton">Log in</button>
      {<div><Link to="/Signup">Signup</Link></div>}
      {error && <div className="error">{error}</div>}
    </form>
    </div>
      </div>
    </div>
  )
}

export default Login