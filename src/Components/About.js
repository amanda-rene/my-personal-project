import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';

class About extends Component{

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

    render(){
    return(
        <div>
        <header className='header'><h1>About 'whatever my app name is'</h1>
        <nav className={`nav-bar ${this.state.toggleShow ? "show" : ""}`}>
                    <ul>
                        <li><Link to="/api/home">Home</Link></li>
                        <li><Link to='/logout'>Logout</Link></li>
                        <li><Link to="/api/home">About</Link></li>
                        <li><Link to='/logout'>Add Training</Link></li>
                        
                    </ul>
                </nav>
                <input onClick={this.toggleShowFunc} alt='menu-icon' type='image' src={MenuRoundedIcon} id='nav-btn'/>
        </header>

        
    </div>
    )
}
}

export default About;