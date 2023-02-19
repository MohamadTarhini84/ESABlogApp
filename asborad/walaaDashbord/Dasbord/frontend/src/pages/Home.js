
import { grey } from '@mui/material/colors';
import { DataGrid ,gridClasses} from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { Box, Typography, useTheme} from '@mui/material';
import Header from "../components/Header"
import { tokens }  from "../theme";
import AdminPanelSettingsOutlinedIcon  from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon  from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon  from "@mui/icons-material/SecurityOutlined";
import HomeActons from "./homeActons";


// //components
// import UserDetails from '../components/UserDetails'
const columns = [
  { field : "_id", headerName: "ID"},
  { field:"content",
    headerName: "content",
    flex:1,
    cellClassName:"name-column--cell",
  },
  {
      field:"username",
      headerName: "Username",
    
      headerAlign:"left",
      align: "left",

  },
  { field:"caption",
    headerName: "Caption",
    flex:1,
    cellClassName:"name-column--cell",
  },
  {
    field: 'actions',
    headerName: 'Actions',
    type: 'actions',
    renderCell: (params) => (
      <HomeActons />
       ),
        },

  ];


const Home = () => {

 const [posts , setPosts]= useState(null)
 const [rowId, setRowId] = useState(null);
 const [tableData, setTableData]= useState([])
 const [pageSize, setPageSize] = useState(5);
 const theme = useTheme();
 const colors = tokens(theme.palette.mode);
  useEffect(() => {
      const fetchPosts = async () => {
        const response = await fetch('/api/posts')
        const json = await response.json()

        if(response.ok){
          //  dispatch({type: 'SET_POSTS', payload: json})
          setPosts(json)
          setTableData(json)

        }
      }
      fetchPosts()
  },[])
  console.log(tableData)
    return (
    
      <Box m="20px">
      <Header title="TEAM" subtitle="Managing the Posts Users" />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .{user._id}": {
            border: "none",
          },
          "& .{username}": {
            borderBottom: "none",
            
          },
          // "& .{password}": {
          //   color: colors.greenAccent[300],
          // },
  
        }}
      >
      
        
       
     
          {/* <div style={{ height:700, width:'100%'}}> */}
            <DataGrid
             getRowId={(post) => post._id}
            rows={tableData}
            columns={columns}
           
            pageSize={pageSize}
            rowsPerPageOptions={[5,10,20]}
            onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
            etRowSpacing={(params) => ({
              top: params.isFirstVisible ? 0 : 5,
              bottom: params.isLastVisible ? 0 : 5,
            })}
            sx={{
              [`& .${gridClasses.row}`]: {
                bgcolor: (theme) =>
                  theme.palette.mode === 'light' ? grey[200] : grey[900],
              },
            }}
            onCellEditCommit={(params) => setRowId(params.id)}
            />
          {/* </div> */}
        
           </Box> 
          </Box>
    )
}

export default Home