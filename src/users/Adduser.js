import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from "react"
import {userdetails} from "./usersdata.js"

export function AddUsers({SetUsers , InitilUsers})
{
  const [name,setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
 
  const addnewUser = () =>{
    const count = InitilUsers.lenght;
    const newUser = {
    id :count,
    username : name,
    useremail : email,
    usernage : age
    };
    SetUsers([...InitilUsers,newUser])  
    console.log(InitilUsers)
   }

    return(
    <div className='AddUsers'>
    <TextField id="filled-basic" 
        label="Name" variant="filled" 
         placeholder= "Name" 
         value ={name}
         onChange={(event) => setName(event.target.value)} />
         <TextField id="filled-basic" 
         label="email" variant="filled" 
         value = {email} 
         placeholder= "email"
         onChange={(event) => setEmail(event.target.value)} />
         <TextField id="filled-basic" 
         label="age" variant="filled" 
          value = {age} 
          placeholder= "age"
         onChange={(event) => setAge(event.target.value)} />        
         <Button variant="text"  onClick={() => addnewUser()}>Add User</Button> 
    </div>)
}

