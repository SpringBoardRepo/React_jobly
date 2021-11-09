
import { useState } from "react";
import { Button, Card, Form, FormGroup, Label } from 'reactstrap';
import './LoginForm.css'

function SignUp() {

    const [signUpForm, setSignUpForm] = useState({
        username: "",
        password: "",
        email: "",
        firstName: "",
        lastName: ""
    });
    function handleChange(evt) {
        const { name, value } = evt.target;
        setSignUpForm(data => ({
            ...data,
            [name]: value
        }));
    }
    function handleSubmit(evt) {
        evt.preventDefault();
        let { ...data } = signUpForm;
        console.log(data);
        setSignUpForm(data);
    }
    return (
        <div className="LoginCard">
            <div className="cardBody">
                <form className="LoginForm" onSubmit={handleSubmit}>
                    <Label htmlFor="username"> Username<small>*</small></Label>
                    <input placeholder="Username"
                        name="username"
                        type="text"
                        value={signUpForm.username}
                        onChange={handleChange} />
                    <Label htmlFor="password">Password<small>*</small> </Label>
                    <input placeholder="Password"
                        name="password"
                        type="text"
                        value={signUpForm.password}
                        onChange={handleChange} />
                    <Label htmlFor="email">Email<small>*</small> </Label>
                    <input placeholder="Email"
                        name="email"
                        type="text"
                        value={signUpForm.email}
                        onChange={handleChange} />
                    <Label htmlFor="firstName">FirstName<small>*</small> </Label>
                    <input placeholder="FirstName"
                        name="firstName"
                        type="text"
                        value={signUpForm.firstName}
                        onChange={handleChange} />
                    <Label htmlFor="lastName">LastName<small>*</small></Label>
                    <input placeholder="LastName"
                        name="lastName"
                        type="text"
                        value={signUpForm.lastName}
                        onChange={handleChange} />

                    <Button className="Loginbtn" color="primary" size="lg">SignUp</Button>
                </form>
            </div>
        </div>
    )
}

export default SignUp;

