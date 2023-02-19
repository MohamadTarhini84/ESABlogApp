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
    <form className="loginBox shadow-lg" onSubmit={handleSubmit}>
      <h1 className="self-center text-blue-500 font-extrabold text-lg">Log In</h1>
      
      <label>Email address:</label>
      <input 
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 
                focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 
                dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        type="email" 
        onChange={(e) => setEmail(e.target.value)} 
        value={email} 
      />
      <label>Password:</label>
      <input 
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 
                focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 
                dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        type="password" 
        onChange={(e) => setPassword(e.target.value)} 
        value={password} 
      />

      <button disabled={isLoading} className="loginRegisterButton">Log in</button>
      {<div className="self-center border-2 border-blue-500 rounded-lg p-2 text-blue-500"><Link to="/Signup">Sign up</Link></div>}
      {error && <div className="error p-3 border-2 border-red-400 bg-red-100 rounded-md">{error}</div>}
    </form>
    </div>
      </div>
    </div>
  )
}

export default Login