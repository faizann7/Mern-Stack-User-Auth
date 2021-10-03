import React, { useState, useContext } from 'react';
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import UserContext from "../../context/userContext";
import ErrorNotice from "../../components/misc/ErrorNotice";

function Login () {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState();

    const { setUserData } = useContext(UserContext);
    const history = useHistory();

    const submit = async (e) => {
        e.preventDefault();
        try{
            const loginUser = {email, password};
            const loginResponse = await axios.post("http://localhost:5000/users/login", loginUser);
            setUserData({
                token: loginResponse.data.token,
                user: loginResponse.data.user
            });
            localStorage.setItem("auth-token", loginResponse.data.token);
            history.push("/");
        } catch(err) {
            err.response.data.msg && setError(err.response.data.msg)
        }
        
    };
    
    return (
        
    <div className="auth-wrapper">
        
        <div className="auth-inner">
            <form onSubmit={submit}>
                <h3>Login In</h3>
        

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" id="email" onChange={e => setEmail(e.target.value)}/>
                </div>

                <p></p>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" id="password" onChange={e => setPassword(e.target.value)}/>
                </div>

                <p></p>

                <button type="submit" className="btn btn-primary btn-block">Log In</button>
                <p className="forgot-password text-right">
                    Don't have an account? Make one! <Link to="/register">Sign Up</Link>
                </p>
            </form>
            

            <p></p>
            {error && <ErrorNotice message={error} clearError={() => setError(undefined)} />}
        </div>
    </div>
    );
}
 
export default Login;