import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import ErrorPage from "../layouts/ErrorPage";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoutes from './PrivateRoutes';
import UpdateProfile from "../pages/UpdateProfile/UpdateProfile";
import UserProfile from "../pages/UserProfile/UserProfile";
import AgriculturalDetails from "../pages/Home/Agricultural/AgriculturalDetails/AgriculturalDetails";
import FarmDetails from "../pages/Home/Farms/FarmDetails/FarmDetails";
import ForestDetails from "../pages/Home/Forests/ForestDetails";
import PlantationDetails from "../pages/Home/Plantations/PlantationDetails";
import RancheDetails from "../pages/Home/Ranches/RancheDetails";
import VineyardDetails from "../pages/Home/Vineyards/VineyardDetails";
import Blog from "../pages/Blog/Blog";

 

 const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path: '/',
                element:<Home></Home>

            },
            {
                path:'/blog',
                element: <Blog></Blog>
            },
            {
                path:'/login',
                element: <Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path: '/updateprofile',
                element: <PrivateRoutes><UpdateProfile></UpdateProfile></PrivateRoutes>
            },
            {
                path: '/userprofile',
                element: <PrivateRoutes><UserProfile></UserProfile></PrivateRoutes>
            },
            {
                path:'/agriculturalde/:id',
                element:<AgriculturalDetails></AgriculturalDetails>,
                loader: () => fetch('agricultural.json'),
            },
            {
                path:'/farms/:id',
                element:<FarmDetails></FarmDetails>,
                loader: () => fetch('farm.json'),
            },
            {
                path:'/forest/:id',
                element:<ForestDetails></ForestDetails>,
                loader: () => fetch('forests.json'),
            },
            
            {
                path:'/plantation/:id',
                element:<PlantationDetails></PlantationDetails>,
                loader: () => fetch('plantations.json'),
            },
            {
                path:'/ranches/:id',
                element:<RancheDetails></RancheDetails>,
                loader: () => fetch('ranches.json'),
            },
            {
                path:'/vineyards/:id',
                element:<VineyardDetails></VineyardDetails>,
                loader: () => fetch('vineyards.json'),
            },
        ]
    }
 ])

 export default router;