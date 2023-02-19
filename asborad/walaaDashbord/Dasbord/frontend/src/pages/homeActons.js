import { Box, IconButton, Tooltip } from '@mui/material';
import { Delete, Edit  } from '@mui/icons-material';
import {  useEffect, useState} from'react'



const HomeActons = () => {
  const [posts, setPosts]=useState('')
//   const {
//     dispatch,
//     state: { currentUser },
//   } = useValue();
useEffect(() => {
  const fetchPosts = async() => {
    const response = await fetch('/api/posts/:id')
    const json = await response.json()

    if(response.ok){
      setPosts(json)
    
    }
    fetchPosts()
}
})
  return (
    <Box>
     
      <Tooltip title="Edit this posts">
        <IconButton onClick={() => {
          
        
        }}>
          <Edit />
        </IconButton>
      </Tooltip>
      <Tooltip title="Delete this posts">
        <IconButton
          onClick={() => {}

          }
        >
          <Delete />
        </IconButton>
      </Tooltip>
    </Box>
  );
};

export default HomeActons;
