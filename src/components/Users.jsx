import React from 'react'
import Button from '@mui/material/Button';
import DeleteUser from './DeleteUser';
import { fakeData } from '../userapi';
import { useDispatch } from 'react-redux';
import { addUser } from '../store/slices/UserSlice';
import DisplayUsers from './DisplayUsers';



export default function Users() {

  //dispatch hook for store action
  const dispatch = useDispatch();

  const addNewUser = (payload) => {
    dispatch(addUser(payload))

   }
  
  return (
    <>

        <Button variant="outlined" onClick={() => addNewUser(fakeData())}> Add Users </Button>

        <ul>
          <DisplayUsers />
        </ul>
      
      <DeleteUser/>
    </>
  )
}
