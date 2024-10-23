import { useState } from "react"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"
import Home from "./components/pages/home/home.jsx"
import Header from "./components/layout/header/header"
import Users from "./components/pages/users/users"
import Login from "./components/pages/login/login.jsx";
import Register from "./components/pages/register/register.jsx";
function App() {
 return (
  <div>
   <BrowserRouter>
<Header />
    <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/users" element={<Users />} />
     <Route path="/login" element={<Login />} />
     <Route path="/register" element={<Register />} />
     {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
   </BrowserRouter>
  </div>
 )
}
export default App