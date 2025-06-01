import { useDispatch, useSelector } from "react-redux";
import './App.css'
import DeleteIcon from '@mui/icons-material/Delete';
import EditNoteIcon from '@mui/icons-material/EditNote';
import { del,setAddAge,setAddName,setAddStatus,add, setOpenAdd, SetOpenEdit,setEditName,setEditAge,setEditStatus,setIdx,edit, check } from "./store/reducers/todolist";
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from "react";
import { Button } from "@mui/material";
export default function App() {
  
  const dispatch=useDispatch()
  const { data,addName,addStatus,addAge, openAdd,OpenEdit,editName,editAge,idx,editStatus } = useSelector(({todo}) => todo);






    const handleAddClickOpen = () => {
   dispatch(setOpenAdd(true))
  };

  const handleAddClose = () => {
   dispatch( setOpenAdd(false))
  };



      const handleEditClickOpen = (el) => {
   dispatch(SetOpenEdit(true))
   dispatch(setEditName(el.name))
    dispatch(setEditAge(el.age))
     dispatch(setIdx(el.id))

  };

  const handleEditClose = () => {
   dispatch( SetOpenEdit(false))
  };

  return (
    <>
    <div style={{display:'flex',justifyContent:'space-around'}}>

       <button style={{fontSize:'24px',borderRadius:'6px'}} variant="outlined" onClick={handleAddClickOpen}>
    +Add
      </button>
    </div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((el) => {
           return  <tr key={el.id} style={{ textDecoration: el.status ? 'line-through' : 'none' }}>
              <td>{el.id}</td>
              <td>{el.name}</td>
              <td>{el.age}</td>
              <td>{el.status ? "Active" : "Inactive"}</td>
             
              <td>
                
                <div className="actiondiv">
<button onClick={()=>dispatch(del(el.id))}><DeleteIcon style={{color:'red'}} /></button>
<button onClick={()=>handleEditClickOpen(el)}><EditNoteIcon style={{color:'blue'}}/></button>
<input style={{}} onClick={()=>dispatch(check(el.id))} type="checkbox" checked={el.status} />
                </div>
              </td>
            </tr>
})}
        </tbody>
      </table>
{/* addModal */}

      <Dialog
        open={openAdd}
        onClose={handleAddClose}
        slotProps={{
          paper: {
            component: 'form',
            onSubmit: (event) => {
              event.preventDefault();
              const formData = new FormData(event.currentTarget);
              const formJson = Object.fromEntries(formData.entries());
              const email = formJson.email;
              console.log(email);
              dispatch(add());
              handleAddClose();
            },
          },
        }}
      >
        <DialogTitle>Add Your new User</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We
            will send updates occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            value={addName}
            onChange={(e)=>dispatch(setAddName(e.target.value))}
            name="name"
            label="Add Name"
            type="text"
            fullWidth
            variant="standard"
          />
           <TextField
            autoFocus
            required
            margin="dense"
            id="age"
            value={addAge}
            onChange={(e)=>dispatch(setAddAge(e.target.value))}
            name="age"
            label="Add Age"
            type="text"
            fullWidth
            variant="standard"
          />
          <select  value={addStatus}
          onChange={(e)=>dispatch(setAddStatus(e.target.value))}
           style={{padding:'10px',fontSize:'18px',marginTop:'10px'}} name="" id="">
            <option value="inactive">inactive</option>
            <option value="active">active</option>
          </select>

        </DialogContent>
        <DialogActions>
          <Button onClick={handleAddClose}>Cancel</Button>
          <Button type="submit" >Add</Button>
        </DialogActions>
      </Dialog>





{/* editModal */}




  <Dialog
        open={OpenEdit}
        onClose={handleEditClose}
        slotProps={{
          paper: {
            component: 'form',
            onSubmit: (event) => {
              event.preventDefault();
              const formData = new FormData(event.currentTarget);
              const formJson = Object.fromEntries(formData.entries());
              const email = formJson.email;
              console.log(email);
            
              handleEditClose();
            },
          },
        }}
      >
        <DialogTitle>Add Your new User</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We
            will send updates occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            value={editName}
            onChange={(e)=>dispatch(setEditName(e.target.value))}
            name="name"
            label="Edit Name"
            type="text"
            fullWidth
            variant="standard"
          />
           <TextField
            autoFocus
            required
            margin="dense"
            id="age"
            value={editAge}
            onChange={(e)=>dispatch(setEditAge(e.target.value))}
            name="age"
            label="Edit Age"
            type="text"

            fullWidth

            variant="standard"
          />
          <select  value={editStatus}
          onChange={(e)=>dispatch(setEditStatus(e.target.value))}
           style={{padding:'10px',fontSize:'18px',marginTop:'10px'}} name="" id="">
            <option value="false">inactive</option>
            <option value="true">active</option>
          </select>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleEditClose}>Cancel</Button>
          <Button type="submit" onClick={(e)=>dispatch(edit({}))}>Save</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
