import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState} from "react"
import { useParams } from 'react-router-dom';

export function Edit({InitialDishes,SetDishes})
{
  const { id } = useParams();
  const dish = InitialDishes[id];
  console.log(dish);
  const [name,setName] = useState(dish.DishName);
  const [pict,setPic] = useState(dish.DishPicture);
  const [des, setDescription] = useState(dish.DishDescription);
 

  const addnewDish = () =>{
    const updated = {
     DishName : name,
     DishPicture : pict,
     DishDescription : des
    };
    const copylist = [...InitialDishes];
    copylist[id]=updated;
    SetDishes(copylist);  
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
         <Button variant="text"  onClick={() => addnewDish()}>Save</Button> 
    </div>)
}

