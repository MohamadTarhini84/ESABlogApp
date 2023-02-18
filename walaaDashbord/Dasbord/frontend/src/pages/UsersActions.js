import { useState, useEffect, useRef } from "react"
import {Box, CircularProgress,Fab} from "@mui/material"
import {Check, Save} from'@mui/icons-material'
import { green } from '@mui/material/colors';


const UserActions = (params, rowId, setRowId) =>{
    // const {dispatch} = useValue()
    const[loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)
    const [user, setUser] = useState('')
    const [role, setRole]= useState('')

    const handleSubmit =  () => {
        setLoading(true)
       
          const fetchUsers= async() => {
            const response= await fetch('/api/users/' + user._id, {
              method:'PATCH',
             
       
             })
           const json = await response.json()
           
       
           if(response.ok){
            setUser(json)
            setSuccess(true);
            setRowId(null);

           }
       console.log(json)
          }
       
          fetchUsers()
      
        // const {role, _id}= params.row
        // const result = await updateStatus({role},_id,dispatch )
        // if(result){
        //     setSuccess(true);
        //     setRowId(null);
        // }
        // setLoading(false)
    };
    

 return(
    <Box
    sx={{
      m: 1,
      position: 'relative',
    }}
  >
    {success ? (
      <Fab
        color="primary"
        sx={{
          width: 40,
          height: 40,
          bgcolor: green[500],
          '&:hover': { bgcolor: green[700] },
        }}
      >
        <Check />
      </Fab>
    ) : (
      <Fab
        color="primary"
        sx={{
          width: 40,
          height: 40,
        }}
        disabled={params.id !== rowId || loading}
        onClick={handleSubmit}
      >
        <Save />
      </Fab>
    )}
    {loading && (
      <CircularProgress
        size={52}
        sx={{
          color: green[500],
          position: 'absolute',
          top: -6,
          left: -6,
          zIndex: 1,
        }}
      />
    )}
  </Box>
 )
}


export default UserActions