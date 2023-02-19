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

    <form className="loginBox shadow-lg" onSubmit={handleSubmit}>
      <h1 className="self-center text-blue-500 font-extrabold text-lg">Sign Up</h1>
      
      <input 
        type="email" 
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 
                focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 
                dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        onChange={(e) => setEmail(e.target.value)} 
        value={email} 
        placeholder="Email address"
      />
      <input 
        type="text" 
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 
                focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 
                dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        onChange={(e) => setusername(e.target.value)} 
        value={username} 
        placeholder="Username"
      />
      <input 
        type="text" 
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 
                focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 
                dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        onChange={(e) => setfirstname(e.target.value)} 
        value={firstname} 
        placeholder="First name"
      />
      <input 
        type="text" 
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 
                focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 
                dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        onChange={(e) => setlastname(e.target.value)} 
        value={lastname} 
        placeholder="Last name"
      />
      <input 
        type="password" 
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 
                focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 
                dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        onChange={(e) => setPassword(e.target.value)} 
        value={password} 
        placeholder="Password"
      />

      <button className="loginRegisterButton" disabled={isLoading}>Sign up</button>
      {<div className="self-center border-2 border-blue-500 rounded-lg p-2 text-blue-500"><Link to="/login">Log in</Link></div>}
      {error && <div className="error p-3 border-2 border-red-400 bg-red-100 rounded-md">{error}</div>}
    </form>
    </div>
      </div>
    </div>
  )
}

export default Signup