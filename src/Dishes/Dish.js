import { Card, CardActions,IconButton } from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material"
import { useState } from "react"

export function Dish({DishName,DishPicture,DishDescription,index , deletebutton,editbutton})
{
    const [show, setShow] = useState(false)
    const styles = {display : show ? "block": "none"}
    return(
        <Card className = "Product">
        <div className='header'>
      <img width = "240" height="250" src = {DishPicture} className = "Movie-Poster"/>
      <h1 className="Movie-name">{DishName}
      <IconButton aria-label="showDescription" 
      size = "small" color = "primary"
      onClick = {()=>setShow(!show)}>{show ? <ExpandLess /> :<ExpandMore/>} 
     </IconButton></h1>
     </div>
      <p style = {styles}>{DishDescription}</p>
      {deletebutton}
      {editbutton}
      <CardActions>
      </CardActions>
      </Card>
    )
}