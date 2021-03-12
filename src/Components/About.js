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
        <div
        style={{
            display:"flex"
        }}>
        <header className='header'><h1
            style={{
                color: "aqua",
                
            }}
        >About 'whatever my app name is'</h1>
        <nav className={`nav-bar ${this.state.toggleShow ? "show" : ""}`}>
                    <ul>
                        <li><Link to="/home">Home</Link></li>
                        <li><Link to='/logout'>Logout</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to='/add/post'>Add Training</Link></li>
                        <li><Link to='/display'>Display</Link></li>
                    </ul>
                </nav>
                <MenuRoundedIcon onClick={this.toggleShowFunc} alt='menu-icon' type='image' src={MenuRoundedIcon} id='nav-btn'/>
        </header>

        <p
        style={{
            // position: "relative",
            // // display:"flex",
            // width: "900px",
            // height: "400px",
            // marginTop: "100px",
            // marginLeft: "500px",
            // textAlign: "center",
            // justifyContent: "center",
            // alignItems: "center",
            padding: '250px',
            // width: '50%',
            color: "white"
        }}> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor 
            in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
            sunt in culpa qui officia deserunt mollit anim id est laborum."
        </p>
    
    </div>
    )
}
}

export default About;