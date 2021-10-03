import React, { useState, useContext } from 'react';
import { useHistory } from "react-router-dom";
import axios from "axios";
import UserContext from "../../context/userContext";
import ErrorNotice from "../../components/misc/ErrorNotice";

function Register () {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [passwordCheck, setPasswordCheck] = useState();
    const [displayName, setDisplayName] = useState();
    const [error, setError] = useState();

    const { setUserData } = useContext(UserContext);
    const history = useHistory();

    const submit = async (e) => {
        e.preventDefault();

        try{
            const newUser = {email, password, passwordCheck, displayName};
            await axios.post("http://localhost:5000/users/register", newUser);
            history.push("/");
        } catch(err) {
            err.response.data.msg && setError(err.response.data.msg)
        }
        
    };
   
    return ( 
        <div className="auth-wrapper">
            <div className="auth-inner">
                <form onSubmit={submit}>
                    <h3>Sign Up</h3>

                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" className="form-control" placeholder="Display name" id="dsplay-name" onChange={e => setDisplayName(e.target.value)}/>
                    </div>

                    <div className="form-group">
                        <label>Email address</label>
                        <input type="email" className="form-control" placeholder="Enter email" id="email" onChange={e => setEmail(e.target.value)}/>
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" placeholder="Enter password" id="password" onChange={e => setPassword(e.target.value)}/>
                    </div>

                    <div className="form-group">
                        <label>Confirm Password</label>
                        <input type="password" className="form-control" placeholder="Enter password" onChange={e => setPasswordCheck(e.target.value)}/>
                    </div>

                    <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                    <p className="forgot-password text-right">
                        Already registered ? Sign In
                    </p>
                </form>
                {error && <ErrorNotice message={error} clearError={() => setError(undefined)} />}
            </div>
        </div>
        );
}
 
export default Register;