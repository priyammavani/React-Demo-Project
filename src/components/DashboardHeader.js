import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const DashboardHeader = () => {
    const username = localStorage.getItem("username");
    const navigate = useNavigate();
    const remove = () => {
        localStorage.removeItem('username');
        localStorage.removeItem('authenticated');
        return navigate("/login");
     };
    return(
        <div className="Main_Header">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <span className="navbar-brand">{username}</span>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" to="/dashboard">Dashboard</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="d-flex">
                    <button className="custom_btn" type="button" onClick={()=>remove()}>Logout</button>
                    </div>
                </div>
                </nav>
        </div>
    );
}

export default DashboardHeader;