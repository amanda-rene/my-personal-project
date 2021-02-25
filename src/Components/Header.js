import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {getUser} from '../redux/userReducer';

class Header extends Component {

    componentDidMount(){
        this.props.getUser()
    }

    logout = () => {
        axios.post('/api/logout')
    }

    render(){
        return <div className='Header'>
            {this.props.isLoggedIn ?
            <div>
                <h1>Welcome, {this.props.user.username}</h1>
                <p>
                    <Link to="/api/home">Home</Link>
                </p>
                
                <Link to='/api/logout'>Logout</Link>
  
            </div>
        :
        <div>
            <h1>Please Login!</h1>
            <p>
                <Link to='/login'>Login/Signup</Link>
            </p>
         </div>   
        }
        </div>
    }
}


const mapStateToProps = state => state;

export default connect(mapStateToProps, {getUser})(Header);