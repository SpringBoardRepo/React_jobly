import { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import UserContext from "./UserContext";



function PrivateRoutes({ exact, path, children }) {

    const { currentUser } = useContext(UserContext);
    console.log(currentUser);
    // if (!currentUser) {
    //     return <Redirect to="/login" />
    // }
    return (
        <Route exact={exact} path={path}>
            {children}
        </Route>

    )
}



export default PrivateRoutes;