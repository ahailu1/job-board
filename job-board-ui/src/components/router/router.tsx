import React from "react";
import { BrowserRouter, Route, Routes, RouterProvider, Link, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import DisplayHomePage from '../homepage/homepage';
import CreateAccount from '../homepage/create-account';

    
    const AppRoute = () => {

    return (
        <BrowserRouter>
    <Routes>
    <Route path = "/" element = { <DisplayHomePage />} />
    <Route path = "create-account" element = { <CreateAccount />} />
    </Routes>
    </BrowserRouter>
    )
    };
export default AppRoute;