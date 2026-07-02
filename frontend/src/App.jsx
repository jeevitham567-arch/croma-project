import {BrowserRouter, Routes, Route} from "react-router-dom";


import Navbar from "./components/Navbar";

import Hero from "./components/Hero";

import CategorySection from "./components/CategorySection";

import Home from "./pages/Home";

import Login from "./pages/Login";

import Register from "./pages/Register";

import UserDashboard from "./pages/UserDashboard";

import AdminDashboard from "./pages/AdminDashboard";



function App(){


return(


<BrowserRouter>


<Navbar/>



<Routes>



<Route

path="/"

element={

<>

<Hero/>

<CategorySection/>

<Home/>

</>

}

/>




<Route

path="/login"

element={<Login/>}

/>




<Route

path="/register"

element={<Register/>}

/>




<Route

path="/user-dashboard"

element={<UserDashboard/>}

/>




<Route

path="/admin-dashboard"

element={<AdminDashboard/>}

/>



</Routes>



</BrowserRouter>


)

}



export default App;