
import { NavLink } from "react-router-dom";
import { Button } from "reactstrap";
import "./HomePage.css";


function HomePage() {

    return (
        <>
            <div className="HomepageTitle">
                <h1> Jobly</h1>
                <h4>All the jobs in one, convenient place</h4>
            </div>
            <div className="Login-Signup">
                <NavLink className="btn" exact to="/login">
                    <Button className="primary">Login </Button>
                </NavLink>
                <NavLink className="btn" exact to="/signup">
                    <Button className="primary">SignUp</Button>
                </NavLink>
            </div>


        </>
    )
}


export default HomePage;