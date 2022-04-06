import { Dish } from "./Dish";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { useHistory } from 'react-router';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';

export function Dishlist({InitialDishes, SetDishes})
{
    const history = useHistory();
    function removeMovie(index) {
      const  removeIndex= index;
      const remainingMovies = InitialDishes.filter(
       (mv,idx)=> idx !== removeIndex)
       SetDishes(remainingMovies);
       console.log(remainingMovies)
    }
    return(
    <div className="Dishes">
    {InitialDishes.map(({DishName,DishPicture,DishDescription},index) => (
     <Dish DishName={DishName} DishPicture = {DishPicture} DishDescription={DishDescription} 
     index={index} 
     deletebutton = {
        <IconButton  aria-lable = "Delete" size="small" color ="error"
        onClick={()=>removeMovie(index)} >
          <DeleteIcon/>    
       </IconButton>}
       editbutton = {
        <IconButton  aria-lable = "Delete" size="small" color ="primary"
        onClick={()=>{history.push("/Dishes/edit/" + index)} } >
          <ModeEditOutlineIcon/>    
       </IconButton>}/>
    ))};
    </div>
    )
}