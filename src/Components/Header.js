import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {getUser} from '../redux/userReducer';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';

class Header extends Component {

    constructor(){
        super();
        this.state = {
            toggleShow: false
        }
    }

    componentDidMount(){
        this.props.getUser()
    }

    logout = () => {
        axios.post('/api/logout')
    }

    readPost = () => {
        axios.get('/api/home')
    }

    toggleShowFunc = () => {
        this.setState((prevState)=> {
            return{
            toggleShow: !prevState.toggleShow
            }
        })
    }

    render(){
        return <div className='Header'>
            {this.props.isLoggedIn ?
            <div>
                <header className='header'>
                <h1>Welcome, {this.props.user.username}</h1>
                
                <nav className={`nav-bar ${this.state.toggleShow ? "show" : ""}`}>
                    <ul>
                        <li><Link to="/home">Home</Link></li>
                        <li><Link to='/logout'>Logout</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to='/add/post'>Add Training</Link></li>
                        
                    </ul>
                </nav>
                <input onClick={this.toggleShowFunc} alt='menu-icon' type='image' src={MenuRoundedIcon} id='nav-btn'/>
               </header>
                    
  
            </div>
        :
        <div>
            <header className='header'>
                <h1>Please Login!</h1>
                </header>
            <p>
                <Link to='/login'>Login/Signup</Link>
            </p>
         </div>   
        }
        </div>
    }
}


const mapStateToProps = state => state.userReducer;

export default connect(mapStateToProps, {getUser})(Header);