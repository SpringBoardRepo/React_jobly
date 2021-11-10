
import { useState } from "react";
import { useHistory } from "react-router";
import { Button, Label } from 'reactstrap';
import './LoginForm.css'

function SignUp({ signUp }) {

    const history = useHistory();
    const [signUpFormData, setSignUpFormData] = useState({
        username: "",
        password: "",
        email: "",
        firstName: "",
        lastName: ""
    });
    const [error, setError] = useState([]);
    function handleChange(evt) {
        const { name, value } = evt.target;
        setSignUpFormData(data => ({
            ...data,
            [name]: value
        }));
    }
    async function handleSubmit(evt) {
        evt.preventDefault();
        let result = await signUp(signUpFormData);
        if (result.success) {
            history.push('/companies');
        }
        else {
            setError(result.error);
            console.log(error);
        }
    }
    return (
        <div className="LoginCard">
            <div className="cardBody">
                <form className="LoginForm" onSubmit={handleSubmit}>
                    <Label htmlFor="username"> Username<small>*</small></Label>
                    <input placeholder="Username"
                        name="username"
                        type="text"
                        value={signUpFormData.username}
                        onChange={handleChange} />
                    <Label htmlFor="password">Password<small>*</small> </Label>
                    <input placeholder="Password"
                        name="password"
                        type="text"
                        value={signUpFormData.password}
                        onChange={handleChange} />
                    <Label htmlFor="email">Email<small>*</small> </Label>
                    <input placeholder="Email"
                        name="email"
                        type="text"
                        value={signUpFormData.email}
                        onChange={handleChange} />
                    <Label htmlFor="firstName">FirstName<small>*</small> </Label>
                    <input placeholder="FirstName"
                        name="firstName"
                        type="text"
                        value={signUpFormData.firstName}
                        onChange={handleChange} />
                    <Label htmlFor="lastName">LastName<small>*</small></Label>
                    <input placeholder="LastName"
                        name="lastName"
                        type="text"
                        value={signUpFormData.lastName}
                        onChange={handleChange} />

                    <Button className="Loginbtn" color="primary" size="lg">SignUp</Button>
                </form>
            </div>
        </div>
    )
}

export default SignUp;

