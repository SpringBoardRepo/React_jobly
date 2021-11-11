import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Button, Form, FormGroup, Label } from 'reactstrap';
import './LoginForm.css';

function Login({ login }) {
    let history = useHistory();
    const [loginForm, setLoginForm] = useState({
        username: "",
        password: ""
    });
    const [error, setError] = useState([]);
    function handleChange(evt) {
        const { name, value } = evt.target;
        setLoginForm(data => ({
            ...data,
            [name]: value
        }));
    }
    async function handleSubmit(evt) {
        evt.preventDefault();
        let result = await login(loginForm);
        console.log(`INSIDE login ${JSON.stringify(result)}`)
        if (result) {
            console.log("RENDERING TO COMPANIES");
            history.push("/companies");
        }
        else {
            setError(result.error);
            console.log(error);
        }

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
