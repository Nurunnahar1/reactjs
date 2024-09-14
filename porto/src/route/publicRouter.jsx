import { Children } from "react";  
import Home from "../pages/Home/Home";
import layout from './';

const publicRoute = [
    {
        element: <layout/>,
        children: [
            {
                path: "/",
                element:<Home/>
            }
        ]
   }
];
export default publicRoute;
