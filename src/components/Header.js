import React, {useState,useEffect} from "react";
import { Link,useNavigate } from "react-router-dom";
import './Header.css';
const Header = () => {
    const navigate = useNavigate();
    const [logbtn,setLogbtn] = useState('');
    useEffect(() => {
        const loggedUser = localStorage.getItem("authenticated");
        if (!loggedUser) {
            setLogbtn("Login");
        }else{
            setLogbtn("Dashboard");
        }
    }, []);
    const submitHandler = (e) => {
        const loggedInUser = localStorage.getItem("authenticated");
        if (!loggedInUser) {
            navigate("/login");
        }else{
            navigate("/dashboard");
        }
    };
    return(
        <div className="Main_Header">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <span className="navbar-brand">Navbar</span>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">Contact</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/weather">Weather</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="d-flex">
                        <button className="custom_btn" type="button" onClick={()=>submitHandler()}>{logbtn}</button>
                    </div>
                </div>
                </nav>
        </div>
    );
}

export default Header;