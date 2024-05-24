import * as React from 'react'
import '../../styles/Users.css'
import Backdrop from '@mui/material/Backdrop';
import { IoIosAddCircle } from "react-icons/io";
//import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';
import { DataGrid } from '@mui/x-data-grid';
import { LuPencilLine } from "react-icons/lu";
import { MdDelete } from "react-icons/md";
import AddUser from './AddUser';
import Sidebar from './Sidebar';
import Header from './Header';



function Users() {
  const [data, setData] = React.useState([]);

  const UsersColumns = [
    { field: 'id', headerName: 'ID', width: 50 },
    { field: 'first_name', headerName: 'First name', width: 130 },
    { field: 'last_name', headerName: 'Last name', width: 130 },
    { field: 'email', headerName: 'Email', width: 200},
    { field: 'username', headerName: 'Username',  width: 130},
    { field: 'is_active', headerName: 'Status',  width: 100},
  ]

  const UserListRequest = React.useCallback(async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/myapi/users/", {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        const result = await response.json();
        setData(result)
        console.log(data)
        console.log(`User created successfully : ${JSON.stringify(result)}`);
      } else {
        console.log('Error creating user');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while creating the user.');
    }
  }, [data]);

  React.useEffect(() => {
    UserListRequest();
  }, [UserListRequest]);

  const Action = [
    {field:'action', headerName: 'Actions',with: 300,
      renderCell: () => {
        return(
          <div className='ActionUser'style={{width: 300}}>
            <span className='edit'>Edit <LuPencilLine/></span>
            <span className='delete'>Delete <MdDelete/></span>
          </div>
        )
      }
    }
  ]


  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  const [openSidebar, setOpenSidebar] = React.useState(false)
  function StateSidebar(){
      setOpenSidebar(!openSidebar)
  }

  return (
    <div className='containeur'>
      <Sidebar openSidebar={openSidebar} stateSidebar={StateSidebar}/>        
      <div className='containeur0'>
        <Header stateSidebar={StateSidebar}/>
        <div className='containeur_list_users'>
          <span>
            List of Users
            <div style={{height: "2px", background: "#ffc400", width: "100%", borderRadius:"10px"}}></div>
          </span>
          <div className='dataTable'>
            <button onClick={handleOpen}> Add new user <IoIosAddCircle/></button>
            <Backdrop open={open} sx={{color:'#fff', display:'flex', flexDirection:'column', gap:'10px',zIndex: (theme) => theme.zIndex.drawer + 1 }}>
              <Button onClick={handleClose} sx={{color: 'red', fontSize: '18px', fontWeight: '900'}}>Close</Button>
              <AddUser/>
            </Backdrop>
            <DataGrid 
              style={{background:'#fff', borderRadius:'5px', width:'95%'}}
              rows={data}
              columns={UsersColumns.concat(Action)}
              initialState={{
                pagination: {paginationModel: { page: 0, pageSize: 5 }},
              }}
              pageSizeOptions={[5 ,10, 15, 20]}
              checkboxSelection
            />
          </div>
        </div>
      </div>
    </div>      
  )
}

export default Users;
