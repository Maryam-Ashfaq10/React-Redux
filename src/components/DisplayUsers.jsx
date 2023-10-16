import React from 'react'
import { useSelector } from 'react-redux'
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';



export default function DisplayUsers() {

    const data = useSelector((state) => {
        return state.users;
    })
    console.log(data)


    return (
        <>
            {
                data.map((user, id) => {
                    return <div key={id}>
                        {user}
                        <IconButton aria-label="delete" size="small">
                            <DeleteIcon fontSize="inherit" />
                        </IconButton>
                    </div>
                })
            }
        </>
    )
}
