import { useHistory, useParams } from "react-router";
import { Button } from "@mui/material";

export function Recipie({InitialDishes, SetDishes})
{
     const { id } = useParams();
     const currentDish = InitialDishes[id];
     const history = useHistory()
    console.log(currentDish);
    return(
    <div className="Dishes">
   <iframe width="100%"
       height="570"
        src={currentDish.RecipieVideo}
        title={currentDish.DishName}
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen></iframe>
    <Button variant="contained" onClick ={()=>history.goBack()} >Back</Button>
    <Button variant="contained" onClick ={()=>history.goForward()} >Forward</Button>
    </div>
    )
}