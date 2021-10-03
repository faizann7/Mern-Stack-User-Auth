import React, { useEffect, useContext } from 'react';
import { useHistory, Link } from 'react-router-dom';
import UserContext from '../../context/userContext';

function Home () {
    const {userData} = useContext(UserContext);
    const history = useHistory();

    useEffect(() => {
        if(!userData.user)
            history.push("/login");

    }, []);
    return (
        <div>
            {userData.user ? (
                <div>
                    <h1>Welcome!</h1>
                    <h2>User Profile</h2>
                    <p>Name: {userData.user.displayName} <br></br>
                       Email: {userData.user.email} </p>
                </div>
                
            ) : (
                <>
                    <h2>You are not logged in</h2>
                    <Link to="/login">Login</Link>
                </>
            )}
        </div>
    );
}
 
export default Home;