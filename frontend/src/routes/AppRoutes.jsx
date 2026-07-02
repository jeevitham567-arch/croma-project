import { BrowserRouter, Routes, Route } from "react-router-dom";


import Login from "../pages/Login";
import Register from "../pages/Register";
import UserDashboard from "../pages/UserDashboard";
import AdminDashboard from "../pages/AdminDashboard";
import AddProduct from "../pages/AddProduct";

import Navbar from "../components/Navbar";


function AppRoutes(){

  return(

    <BrowserRouter>

      <Navbar />

      <Routes>


        <Route
          path="/"
          element={<Login />}
        />


        <Route
          path="/register"
          element={<Register />}
        />


        <Route
          path="/user-dashboard"
          element={<UserDashboard />}
        />


        <Route
          path="/admin-dashboard"
          element={<AdminDashboard />}
        />


        <Route
          path="/add-product"
          element={<AddProduct />}
        />


      </Routes>


    </BrowserRouter>

  );

}


export default AppRoutes;