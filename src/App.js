import logo from './logo.svg';
import './App.css';
import { useState } from "react"
import {AddDish} from './Dishes/AddDish.js'
import { Dishlist } from './Dishes/DishList.js';
import { Edit } from './Dishes/Edit';
import { Switch, Route,Link } from "react-router-dom";
import { useHistory } from 'react-router';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Button } from '@mui/material';
import { UsersList } from './users/UsersList.js';
import {AddUsers} from './users/Adduser.js'
import {userdetails} from "./users/usersdata.js"


function App() {
  const history = useHistory();
  const [InitialUsers,setUsers] = useState(userdetails);
  const [InitialDishes,SetDishes]  = useState([
    {
      id : '1',
      DishName : "Ramen",
      DishPicture : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQowlTRT5eYtgeaXZS1H_CnGHcvhhfLZYaJ3A&usqp=CAU",
      DishDescription : "Ramen is a Japanese noodle soup. It consists of Chinese-style wheat noodles served in a meat or fish-based broth, often flavored with soy sauce or miso, and uses toppings such as sliced pork, nori, menma, and scallions"
    },
    {
      id : '2',
      DishName : "Pasta",
      DishPicture : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn30EX-OjbmWS5lLqCdBAsoP9XuRUA7GxzpQ&usqp=CAU",
      DishDescription : "Pasta is a type of food typically made from an unleavened dough of wheat flour mixed with water or eggs, and formed into sheets or other shapes, then cooked by boiling or baking."
    },
    {
      id : '3',
      DishName : "Pizza",
      DishPicture : "https://img.onmanorama.com/content/dam/mm/en/food/features/images/2021/10/17/pizza.jpg",
      DishDescription : "Pizza is a dish of Italian origin consisting of a usually round, flat base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients, which is then baked at a high temperature, traditionally in a wood-fired oven. A small pizza is sometimes called a pizzetta"
    },
    {
      id : '4',
      DishName : "Briyani",
      DishPicture : "https://img-global.cpcdn.com/recipes/d478e18a955045b6/680x482cq70/briyani-recipe-main-photo.jpg",
      DishDescription : "Biryani is a mixed rice dish originating among the Muslims of the Indian subcontinent. It is made with Indian spices, rice, either with meat, or eggs or vegetables such as potatoes. Biryani is one of the most popular dishes in South Asia, as well as among the diaspora from the region."
    }
  ]);

 
  
  return (
    <div> 
    <Header/>
    <AppBar position="static">
        <Toolbar className="toolbar">
          <Button onClick={()=>history.push('/')} size='large' aria-label='Home' color = 'inherit' >Home </Button>
          <Button onClick={()=>history.push('/AddDish')} size='large' aria-label='AddTasks' color = 'inherit' >AddDish </Button>
          <Button onClick={()=>history.push('/Dishes')} size='large'  aria-label='Dishes' color = 'inherit'>Dishes  </Button>
          <Button onClick={()=>history.push('/UserDetails')} size='large'  aria-label='UserDetails' color = 'inherit'>USerDetails  </Button>
          <Button onClick={()=>history.push('/AddUsers')} size='large'  aria-label='AddUsers' color = 'inherit'>AddUsers </Button>
        </Toolbar>
        </AppBar>      
        <Switch>
        <Route path="/AddDish">
        <AddDish InitialDishes = {InitialDishes} SetDishes = {SetDishes}/>
        </Route>              
        <Route path = "/Dishes/edit/:id">
        <Edit InitialDishes={InitialDishes} SetDishes = {SetDishes}/>         
        </Route>  
        <Route path = "/Dishes">
        <Dishlist InitialDishes={InitialDishes} SetDishes = {SetDishes}/>
        </Route>  
        <Route path = "/UserDetails">
        <UsersList InitialUsers = {InitialUsers}/>
        </Route>    
        <Route path = "/AddUsers">
        <AddUsers SetUsers = {setUsers} InitilUsers = {InitialUsers}/>
        </Route> 
        <Route path="/">
        <Home/>
        </Route>
        <Route path = "/**">
        <div>
          <Notfound/>
        </div>
        </Route>       
        </Switch>
    </div>
  );
}

function Notfound() {
  
  return(
    <img  width ="100%" height = "100%"
    src = "https://previews.123rf.com/images/monuttanit/monuttanit1808/monuttanit180800002/105734861-404-error-page-not-found-vector-with-donut-graphic.jpg"/>
  )
}

function Header()
{
  return(
    <div className='header'>
     
     <img  width = "50px" height = "50px"
    src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkHdzBzU4bUghgA1kbxkjHQ6TG0k-jOpIOkA&usqp=CAU"/>    
    COOK BOOK
    </div>
  )
}

function Home()
{
  return(
    <div className='home'>
     <img  width = "100%" height = "100%"
    src = "https://c4.wallpaperflare.com/wallpaper/23/661/315/spices-food-world-wallpaper-preview.jpg"/>
    </div>
  )
}

export default App;
