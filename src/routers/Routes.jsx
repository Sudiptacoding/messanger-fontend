import { createBrowserRouter } from "react-router-dom";
import Error from "../components/Error/Error";
import Root from "../layouts/Root/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Registration from "../pages/Registration/Registration";
import Chats from "../pages/Chats/Chats";
import UsersList from "../pages/UsersList/UsersList";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <Error></Error>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/registration",
                element: <Registration></Registration>,
            },
            {
                path: "/chats/:id",
                element: <Chats></Chats>,
            },
            {
                path: "/alluserlist",
                element: <UsersList></UsersList>,
            },
        ],
    },
]);
export default router;