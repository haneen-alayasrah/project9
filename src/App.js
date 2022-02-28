import './App.css';
import {faker} from '@faker-js/faker'
import { Comment } from './components/Comment';
import Registartion from './components/Register/Registertion';
import Login from './components/Login/Login';
import Post  from './components/Post/post'

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from 'responsive-react-js-navbar'
import Home from './components/Home/Home';



export default function App() {
  const links = [{
    "href": "/home",
    "label": "Home",
    "background": false,
},
{
    "href": "/post",
    "label": "Create Post",
    "background": false,
},
{
  "href": "/register",
  "label": "register",
  "background": false,
}

]
  return (
    <BrowserRouter>
     <Navbar

                links={links}

     />     
<Routes>
        <Route path='/home' element={<Home/>}/>
        <Route  path="/post" element={<Post/>} />
        <Route  path="/register" element={<Registartion/>} />

      </Routes>
    </BrowserRouter>
  );
}

