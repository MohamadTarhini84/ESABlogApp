import { Box } from "@mui/material"
import { useState } from "react"
import { useAdminsContext } from '../hooks/useAdminsContext'

const AdminForm =  () => {
    const { dispatch} = useAdminsContext()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [username, setUsername] = useState('')
    const [error, setError] = useState(null)
    const [emptyFields, setEmptyFields] = useState([])

    const handleSubmit = async (e) => {
        e.preventDefault()

        const admin = {email, password, username}

        const response = await fetch('/api/admins', {
            method:'POST',
            body: JSON.stringify(admin),
            headers:{
                'Content-Type':'application/json'
            }
        })
        const json = await response.json()

        if(!response.ok){
          setError(json.error)
          setEmptyFields(json.emptyFields)
        }
        if(response.ok){
            setEmail('')
            setPassword('')
            setUsername('')
            setError(null)
            setEmptyFields([])
            console.log('new admin added', json)
            dispatch({type: 'CREATE_ADMIN', payload: json})
        }
    }
    

    return(
     <Box>
        <form className="create" onSubmit={handleSubmit}>
         <h2>Add Admin</h2>

         <label>Email:</label>
         <input
         type="email"
         onChange={(e) => setEmail(e.target.value)}
         value={email}
         className={emptyFields.includes('email') ? 'error':''}
         />

         <label>Password:</label>
         <input
         type="text"
         onChange={(e) => setPassword(e.target.value)}
         value={password}
         className={emptyFields.includes('password') ? 'error':''}
         />

         <label>Username:</label>
         <input
         type="text"
         onChange={(e) => setUsername(e.target.value)}
         value={username}
         className={emptyFields.includes('username') ? 'error':''}
         />
         <button>Add Admin</button>
        
          {error && <div className="error">{error}</div>}
        </form>
     </Box>
    )
}

export default AdminForm