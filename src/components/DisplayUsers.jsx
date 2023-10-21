import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { removeUser } from '../store/slices/UserSlice';



export default function DisplayUsers() {

    const dispatch = useDispatch();

    //useSelector hook to access store data
    const data = useSelector((state) => {
        return state.users;
    })
    console.log(data)

    const deleteSingle = (id) => {
        dispatch(removeUser(id))
    }

    return (
        <>
            {
                data.map((user, id) => {
                    return <div key={id}>

                        {user}
                        <IconButton aria-label="delete" size="small" onClick={() => deleteSingle(id)}>
                            <DeleteIcon fontSize="inherit" />
                        </IconButton>
                        
                    </div>
                })
            }
        </>
    )
}
