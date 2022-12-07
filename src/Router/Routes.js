import { createBrowserRouter } from "react-router-dom";
import Login from "../Component/Authentication/Login/Login";
import SignUp from "../Component/Authentication/SignUp/SignUp";
import Faq from "../Component/Pages/Faq/Faq";
import Home from "../Component/Pages/Home/Home";
import Main from "../layout/Main";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/faq',
                loader: () => fetch('Faq.json'),
                element: <Faq></Faq>
            },
        ]
    }

]);