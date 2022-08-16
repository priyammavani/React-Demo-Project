import './Login.css';
import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
    const navigate = useNavigate();
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const submitHandler = (e) => {
        e.preventDefault();
        localStorage.setItem("username", JSON.stringify(name));
        localStorage.setItem("email", JSON.stringify(email));
        localStorage.setItem("password", JSON.stringify(password));
        navigate("/login");
    };

    return(
        <div className="login_page">
            <form className='login_from' onSubmit={submitHandler}>
                <h2>Signup</h2>
                <div className="form__input">
                    <label>Username*</label>
                    <input type="text" placeholder="username" value={name} onChange={(e)=>{setName(e.target.value)}} />
                </div>
                <div className="form__input">
                    <label>Email*</label>
                    <input type="email" placeholder="Email" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
                </div>
                <div className="form__input">
                    <label>Set Password*</label>
                    <input type="password" placeholder="Set Password" value={password} onChange={(e)=>{setPassword(e.target.value)}} />
                </div>
                <div className="form__actions">
                    <button className='custom_btn' type="submit">Create Account</button>
                </div>
            </form>
        </div>
    );
}

export default Signup;