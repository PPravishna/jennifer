import {Outlet} from 'react-router-dom';
import { MyNavbar } from '../components/navbar/MyNavbar.com';

export let LessonsRoutes={
    path:'/lessons',
    element:<div><Outlet/></div>,
    children:[
        {
            path:'all',
            element:<h1>Iam homepage</h1>
        },
        {
            path:'login',
            element:<h1>Iam loginpage</h1>
        },
        {
            path:'register',
            element:<h1>Iam register page</h1>
        },
    ]
}