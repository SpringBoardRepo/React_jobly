import { useContext, useState } from "react";
import { Alert, Button, Label } from "reactstrap";
import JoblyApi from "./api";
import UserContext from "./UserContext";
import "./Profile.css"

function Profile() {
    const { currentUser, setCurrentUser } = useContext(UserContext);

    console.log(`INSIDE PROFILE ${JSON.stringify(currentUser)}`);
    console.log(`INSIDE PROFILE ${JSON.stringify(currentUser.username)}`);
    const [formData, setFormData] = useState({

        firstName: currentUser.firstName,
        lastName: currentUser.lastName,
        email: currentUser.email,
        username: currentUser.username,
        password: ""
    });

    const [formErrors, setFormErrors] = useState([]);
    const [updateProfile, setUpdatedProfile] = useState(false);

    const handleChange = (evt) => {

        let { name, value } = evt.target;
        setFormData(data => ({
            ...data,
            [name]: value
        }))
    }

    const handleSubmit = (evt) => {
        evt.defaultprevent();
        let updatedFormData = {
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
            password: formData.password
        }
        let username = formData.username;
        let updatedUser;

        try {
            updatedUser = JoblyApi.saveProfile(username, updatedFormData);
            console.log(`UPDATED User ${JSON.stringify(updatedUser)}`);
        } catch (error) {
            console.log(error);
            setFormErrors(error)
            return;
        }
        setFormData(data => ({ ...data, password: "" }));
        setFormErrors([]);
        setUpdatedProfile(true);

        setCurrentUser(updatedUser);
    }
    return (
        <div className="LoginCard">
            <div className="cardBody">
                <form className="LoginForm" onSubmit={handleSubmit}>
                    <Label htmlFor="username"> Username<small>*</small></Label>
                    <p className="userName">{formData.username}</p>
                    <Label htmlFor="firstName">FirstName<small>*</small> </Label>
                    <input placeholder="FirstName"
                        name="firstName"
                        type="text"
                        value={formData.firstName}
                        onChange={handleChange} />
                    <Label htmlFor="lastName">LastName<small>*</small></Label>
                    <input placeholder="LastName"
                        name="lastName"
                        type="text"
                        value={formData.lastName}
                        onChange={handleChange} />
                    <Label htmlFor="email">Email<small>*</small> </Label>
                    <input placeholder="Email"
                        name="email"
                        type="text"
                        value={formData.email}
                        onChange={handleChange} />

                    <Label htmlFor="password">Confirm Password to make changes<small>*</small> </Label>
                    <input placeholder="Password"
                        name="password"
                        type="text"
                        value={formData.password}
                        onChange={handleChange} />

                    {formErrors.length
                        ? <Alert type="danger" messages={formErrors} />
                        : null}

                    {updateProfile
                        ?
                        <Alert type="success" messages={["Updated successfully."]} />
                        : null}
                    <Button color="primary" size="lg">SaveChanges</Button>
                </form>
            </div>
        </div>
    )
}



export default Profile;