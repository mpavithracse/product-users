import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from "react"

export function AddDish ({InitialDishes,SetDishes})
{
  const [name,setName] = useState("");
  const [pict,setPic] = useState("");
  const [des, setDescription] = useState("");

  const addnewDish = () =>{
   
    const newDish = {   
     DishName : name,
     DishPicture : pict,
     DishDescription : des
    };
    SetDishes([...InitialDishes,newDish])  
    console.log(InitialDishes)
   }

    return(
    <div className='AddDish'>
    <TextField id="filled-basic" 
        label="Dish Name" variant="filled" 
         placeholder= "Dish Name" 
         value ={name}
         onChange={(event) => setName(event.target.value)} />
         <TextField id="filled-basic" 
         label="Image URL" variant="filled" 
         value = {pict} 
         placeholder= "Image URL"
         onChange={(event) => setPic(event.target.value)} />
         <TextField id="filled-basic" 
         label="Description" variant="filled" 
          value = {des} 
          placeholder= "Description"
         onChange={(event) => setDescription(event.target.value)} />        
         <Button variant="text"  onClick={() => addnewDish()}>Add New Dish</Button> 
    </div>)
}

