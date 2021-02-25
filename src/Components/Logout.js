import React from 'react';

import {Link} from 'react-router-dom';



function Logout() {


    return(
        <div>
            <header className='header'><h1>You've successfully logged out!</h1></header>

            <div>
            
            <p> Return to Login
                <Link to='/login'>Login/Signup</Link>
            </p>
         </div> 
        </div>

        
    )
}

export default Logout;