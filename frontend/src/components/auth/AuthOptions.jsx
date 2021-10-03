import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import UserContext from "../../context/userContext";

function AuthOptions () {
    const { userData, setUserData } = useContext(UserContext);
    const history = useHistory();

    const register = () => history.push("/register");
    const login = () => history.push("/login");
    const logout = () => {
        setUserData({
            token: undefined,
            user: undefined
        })
        localStorage.setItem("auth-token","");
    };

    return (
        
        <nav className="auth-options">
            {userData.user ? (
                <span className="nav-link" onClick={logout}>Logout</span>
                // <button className="nav-link" onClick={logout}>Logout</button>
                // <Link className="nav-link" onClick={logout}>Logout</Link>
            ) : (
                <>
                {/* <div class="btn-toolbar">
                <button className="btn btn-primary mr-2" onClick={register}>Sign Up</button>
                <button className="btn btn-primary mr-2" onClick={login}>Login</button>
                </div> */}
                <div class="btn-toolbar pull-right">
                <Link className="nav-link" to={"/login"}>Login</Link>
                <Link className="nav-link" to={"/register"}>Sign Up</Link>
                </div>
                </>
            )}
        </nav>
    )
}

export default AuthOptions;