import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState, Button} from "react";
import {
  Avatar,
  Box,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
  Typography,
} from '@mui/material';
import {Group, MapsHomeWork} from'@mui/icons-material'
import { link} from'react';
import Header from "../../components/Header"



const Dashborad = () => {
   const [setSelectedLink] = useState('')
   const [users, setUsers] = useState('')
   const [admins, setAdmins] = useState('')
   const [posts, setPosts] = useState('')

   useEffect(() => {
    const fetchUsers = async() => {
       const response = await fetch('/api/users')
       const json = await response.json()

       if(response.ok){
         setUsers(json)
       
       }
       console.log(response)
        
    }
    fetchUsers()
}, [])

useEffect(() => {
  const fetchAdmins = async() => {
   const response = await fetch('/api/admins')
   const json = await response.json()
   

   if(response.ok){
     setAdmins(json)
   }
console.log(json)
  }

  fetchAdmins()
}, [])

useEffect(() => {
  const fetchPosts = async () => {
    const response = await fetch('/api/posts')
    const json = await response.json()

    if(response.ok){
      
      setPosts(json)
    

    }
  }
  fetchPosts()
},[])

  
  
   

  // console.log(users.length)
    return (
        <Box m="20px" width="100%">
             <Header title="Dashborad"/>
        <Box 
        sx={{
            display:{xs:'flex', md:'grid',m:'40px'},
            gridTemplateColumns:'repeat(3,1fr)',
            gridAutoRows:'minmax(100px, auto',
            gap:3,
            textAlign:'center',
            flexDirection:'column'
        }}
        >
              <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="h4">Total Users</Typography>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Group sx={{ height: 100, width: 100, opacity: 0.3, mr: 1 }} />
     
       <Typography variant="h4">
     {users.length}
      
       </Typography>

        
        </Box>
      </Paper>

      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="h4">Total Admins</Typography>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Group sx={{ height: 100, width: 100, opacity: 0.3, mr: 1 }} />
          <Typography variant="h4">{admins.length}</Typography>
        </Box>
      </Paper>
              
             
      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="h4">Total Posts</Typography>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <MapsHomeWork sx={{ height: 100, width: 100, opacity: 0.3, mr: 1 }} />
          <Typography variant="h4">{posts.length}</Typography>
        </Box>
      </Paper>
     
      <Paper elevation={3} sx={{ p: 2, gridColumn: 3, gridRow: '1/4' }}>
        <Box>
          <Typography>Recently added Users</Typography>
          <List>
            {users && users.map((user) => (
              <Box key={user._id}>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar alt={user.username}  />
                  </ListItemAvatar>
                  <ListItemText
                    primary={user.username}
                    secondary={user.createdAt}
                      
                  />
                </ListItem>
                
              </Box>
            ))}
          </List>
        </Box>
        <Divider sx={{ mt: 3, mb: 3, opacity: 0.7 }} />
        <Box>
          <Typography>Recently added Posts</Typography>
          <List>
            {posts && posts.map((post) => (
              <Box key={post._id}>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar
                      alt={post.content}
                    
                      variant="rounded"
                    />
                  </ListItemAvatar>
                  <ListItemText
                    primary={post.content}
                    secondary={post.createdAt}
                  />
                </ListItem>
              
              </Box>
            ))}
          </List>
        </Box>
      </Paper>
        </Box>
        </Box>
    )
}

export default Dashborad