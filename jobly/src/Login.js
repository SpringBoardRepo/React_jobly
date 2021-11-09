import { useState } from "react";
import { Button, Form, FormGroup, Label } from 'reactstrap';
import './LoginForm.css';

function Login() {

    const [loginForm, setLoginForm] = useState({
        username: "",
        password: ""
    });
    function handleChange(evt) {
        const { name, value } = evt.target;
        setLoginForm(data => ({
            ...data,
            [name]: value
        }));
    }
    function handleSubmit(evt) {
        evt.preventDefault();
        let { ...data } = loginForm;
        console.log(data);
        setLoginForm(data);
    }
    return (
        <Form className="LoginForm" onSubmit={handleSubmit}>
            <FormGroup ><Label htmlFor="username"> Username<small>*</small></Label>
                <input placeholder="Username"
                    name="username"
                    type="text"
                    value={loginForm.username}
                    onChange={handleChange} />
                <Label htmlFor="password">Password<small>*</small> </Label>
                <input placeholder="Password"
                    name="password"
                    type="text"
                    value={loginForm.password}
                    onChange={handleChange} />
            </FormGroup>
            <Button className="Loginbtn" color="primary" size="lg">Login</Button>
        </Form>
    )
}

export default Login;
