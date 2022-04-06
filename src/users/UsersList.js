import {userdetails} from "./usersdata.js"
import { useState } from "react"
import { DataGrid } from '@mui/x-data-grid';

export function UsersList ({InitialUsers})
{
  
    return(
        <div>
        <table>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
          </tr>
          {InitialUsers.map((user)=>
          <tr>
          <td>{user.username}</td>
          <td>{user.useremail}</td>
          <td>{user.usernage}</td>
          </tr>
          )}
        </table>        
        </div>
    )
}