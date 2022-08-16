import './Login.css';
import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const [name,setName] = useState('');
    const [password,setPassword] = useState('');
    const users = [{ username: "admin", password: "testadmin" },{ username: "priyam", password: "testpriyam" }];
    const submitHandler = (e) => {
        e.preventDefault();
        const account = users.find((user) => user.username === name);
        if (account && account.password === password) {
            localStorage.setItem("username", name);
            localStorage.setItem("authenticated", true);
            navigate("/dashboard");
        }else{
            localStorage.setItem("authenticated", false);
            alert('wrong username or password');
        }
    };

    return(
        <div className="login_page">
            <form className='login_from' onSubmit={submitHandler}>
                <h2>Login</h2>
                <div className="form__input">
                    <label>Username<sup>*</sup></label>
                    <input type="text" placeholder="username" value={name} onChange={(e)=>{setName(e.target.value)}} />
                </div>
                <div className="form__input">
                    <label>Password<sup>*</sup></label>
                    <input type="password" placeholder="Enter Password" value={password} onChange={(e)=>{setPassword(e.target.value)}} />
                </div>
                <div className="form__actions">
                    <button className='custom_btn' type="submit">Login</button>
                </div>
            </form>
        </div>
    );
}

export default Login;