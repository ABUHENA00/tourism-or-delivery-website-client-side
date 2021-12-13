import React from 'react';
import { useHistory, useLocation } from 'react-router';

import useAuth from '../../Hooks/useAuth';

const Login = () => {
    const {signInUsingGoogle} = useAuth();
    const location = useLocation();
    const history =useHistory();
    const redirect_url =location.state?.from || '/home';

    const handleGoogleLogin =() =>{
        return signInUsingGoogle()
        .then(result =>{
         
         history.push(redirect_url);
       })
       }

   
    return (
        <div>
            <h2 className="text-info" >Please Login</h2>
            <button onClick={handleGoogleLogin} className="btn btn-warning p-2 m-2">SignIn With Google</button>
        </div>
    );
};

export default Login;