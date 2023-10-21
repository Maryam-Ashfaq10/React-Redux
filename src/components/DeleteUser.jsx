import React from 'react'
import Button from '@mui/material/Button';
import { deleteAll } from '../store/slices/UserSlice';
import { useDispatch } from 'react-redux';


export default function DeleteUser() {

    const dispatch = useDispatch();

    const delAll = () => {
        dispatch(deleteAll());
    }

    return (
        <div>
            <Button variant="outlined" onClick={delAll}> Delete All Users </Button>

        </div>
    )
}
