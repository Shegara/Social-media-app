import React, { useContext } from "react";
import Home from "./pages/home/Home";
import Profile from "./pages/home/Profile/Profile";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register"
import { AuthContext } from "./context/AuthContext";

import {
    Route,
    Routes,
    Navigate
} from "react-router-dom"

export default function App () {
    const {user} = useContext(AuthContext)
    return (
            <Routes>
                <Route path='/' element={user ? <Home /> : <Register/>}/>
                <Route path='/login' element={user ? <Navigate to="/"/> : <Login />}/>
                <Route path='/register' element={user ? <Navigate to="/"/> : <Register />}/>
                <Route path='/profile/:username' element={<Profile />}/>
            </Routes>
    ) 
}

