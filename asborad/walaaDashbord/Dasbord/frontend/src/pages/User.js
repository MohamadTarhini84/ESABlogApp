import { DataGrid ,gridClasses} from "@mui/x-data-grid";
import { useEffect, useState, useMemo} from "react";
import { Box, Typography, useTheme} from '@mui/material';
import Header from "../components/Header"
import { tokens }  from "../theme";
// import AdminPanelSettingsOutlinedIcon  from "@mui/icons-material/AdminPanelSettingsOutlined";
// import LockOpenOutlinedIcon  from "@mui/icons-material/LockOpenOutlined";
// import SecurityOutlinedIcon  from "@mui/icons-material/SecurityOutlined";
import moment from 'moment';
// import { useValue } from'../context/UserContext';

import { grey } from '@mui/material/colors';
import UsersActions from './UsersActions';

const User = () => {
const columns = useMemo(
  () =>
[
  { field : "_id", headerName: "ID"},

  { field:"username",
    headerName: "Name",
    // flex:1,
    cellClassName:"name-column--cell",
    width:50,
  },
  {
    field: "email",
    headerName: "Email",
    width:70,
  },
  { field:"firstname",
    headerName: "Firstname",
    // flex:1,
    cellClassName:"name-column--cell",
    width:50,
  },
  { field:"lastname",
  headerName: "Lastname",
  // flex:1,
  cellClassName:"name-column--cell",
  width:50,
},
{ field:"isAdmin",
headerName: "Admin",
width:100,
type:'singleSelect',
valueOptions:['true','false'],
editable:true,

},
{
  field: 'createdAt',
  headerName: 'Created At',
  width: 200,
  renderCell: (params) =>
    moment(params.row.createdAt).format('YYYY-MM-DD HH:MM:SS'),
},
{
  field: 'actions',
  headerName: 'Actions',
  type: 'actions',
  renderCell: (params) => (
    <UsersActions {...{ params, rowId, setRowId }} />
     ),
      },
    ],
    []
  );


 const [users, setUsers] = useState(null)
 const [tableData, setTableData]= useState([])
 const [pageSize, setPageSize] = useState(5);
 const [rowId, setRowId] = useState(null);
 const theme = useTheme();
 const colors = tokens(theme.palette.mode);
    useEffect(() => {
        const fetchUsers = async() => {
           const response = await fetch('/api/users')
           const json = await response.json()

           if(response.ok){
             setUsers(json)
             setTableData(json)
           }
            
        }
        fetchUsers()
    }, [])
    console.log(tableData)

    return(
       
      <Box
      m='20px'
      sx={{
        height: 400,
        width: '100%',
      }}
    >
    <Header title="TEAM" subtitle="Managing the Users Members" />
   
          <DataGrid
           getRowId={(row) => row._id}
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
         </Box> 
       
    )
}

export default User