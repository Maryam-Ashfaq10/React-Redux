import React from 'react'
import { useSelector } from 'react-redux'

export default function DisplayUsers() {

    const data = useSelector((state) => {
        return state.users;
    })
    console.log(data)

   
  return (
    <div>
        {
    data.map((user, id) => {
        return <li key={id}>
            {user}
        </li>
    })
}
    </div>
  )
}
