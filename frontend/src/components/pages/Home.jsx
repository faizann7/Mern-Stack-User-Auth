import React, { useEffect, useContext } from 'react';
import {  useHistory, Link } from 'react-router-dom';
import UserContext from '../../context/userContext';
import { Card } from 'react-bootstrap';
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
            //     <Card style={{  width: '18rem' }}>
            //     <Card.Body className="cen">
            //       <Card.Title>User Profile</Card.Title>
            //       <Card.Text>
            //         <h4>Welcome!</h4>
            //         <p>Name: {userData.user.displayName} <br></br>
            //           Email: {userData.user.email} </p>
            //       </Card.Text>
            //       <div>
                    
            //     </div>
            //     </Card.Body>
            //   </Card>
            <div className="auth-wrapper">
                <div className="auth-inner">
                <h4>Welcome!</h4>
                    <p>Name: {userData.user.displayName} <br></br>
                      Email: {userData.user.email} </p>
                </div>
                </div>
                // <div>
                //     <h1>Welcome!</h1>
                //     <h2>User Profile</h2>
                //     <p>Name: {userData.user.displayName} <br></br>
                //        Email: {userData.user.email} </p>
                // </div>
                
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