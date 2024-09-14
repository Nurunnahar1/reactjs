// import { createBrowserRouter } from "react-router-dom";
// import publicRoute from "./publicRouter";
// import privateRoute from "./privateRouter";

import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/layout";
import Home from "../pages/Home/Home";

// const router = createBrowserRouter([...publicRoute, ...privateRoute]);


// export default router;

const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />
            }
        ]
    }
]);
export default router;