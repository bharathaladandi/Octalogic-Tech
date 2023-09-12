import React from "react";
import { Route, Routes } from 'react-router-dom'
import { Signup } from "../Pages/Signup";
import { Login } from "../Pages/Login";
import { Home } from "../Pages/Home";
import { Course } from "../Pages/Course";
export const AllRoutes = () => {

    return (
        <div>
            <Routes>
                <Route path='/' element={<Signup />}></Route>
                <Route path='/login' element={<Login />}></Route>
                <Route path='/home' element={<Home />}></Route>
                <Route path='/course' element={<Course />}></Route>
            </Routes>
        </div>
    )
}


