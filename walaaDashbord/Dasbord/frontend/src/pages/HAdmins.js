import { useEffect}  from'react'
import { Box} from "@mui/material"
import Header from "../components/Header"
import AdminDetails from "../components/AdminDetails"
import AdminForm from '../components/AdminForm'
import { useAdminsContext } from '../hooks/useAdminsContext'


const HAdmins =()=>{
// const [admins, setAdmins]=useState(null)

 const { admins, dispatch } = useAdminsContext()

useEffect(() => {
   const fetchAdmins = async() => {
    const response = await fetch('/api/admins')
    const json = await response.json()
    

    if(response.ok){
      dispatch({type: 'SET_ADMINS', payload: json})
    }
console.log(json)
   }

   fetchAdmins()
}, [])

 return(
   <Box m="20px" width="100%">
   <Header title="TEAM" subtitle="Managing the Admins" />
<div className='hadmin'>
   <div className='admins'>
{admins && admins.map((admin) => (
<AdminDetails    key={admin._id} admin={ admin} />
 
))}
</div>
<AdminForm />
</div>
</Box>
 )
}
export default HAdmins
