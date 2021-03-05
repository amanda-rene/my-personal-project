import React, {Component} from 'react';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import {Link} from 'react-router-dom';



class Logout extends Component {


    constructor(){
        super();
        this.state = {
            toggleShow: false
        }
    }

    toggleShowFunc = () => {
        this.setState((prevState)=> {
            return{
            toggleShow: !prevState.toggleShow
            }
        })
    }

    render (){
    return(
        <div>
            <header className='header'><h1>You've successfully logged out!</h1></header>

            <nav className={`nav-bar ${this.state.toggleShow ? "show" : ""}`}>
                    <ul>
                        <li><Link to="/home">Home</Link></li>
                        <li><Link to='/logout'>Logout</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to='/add/post'>Add Training</Link></li>
                        
                    </ul>
                </nav>
                <input onClick={this.toggleShowFunc} alt='menu-icon' type='image' src={MenuRoundedIcon} id='nav-btn'/>
            <div>
            
            <p> Return to Login
                <Link to='/login'>Login/Signup</Link>
            </p>
         </div> 
        </div>

        
    )
}
}

export default Logout;