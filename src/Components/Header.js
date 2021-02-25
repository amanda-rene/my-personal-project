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
                 <Link to="/login">Login/Signup</Link>
                </p>
                <p>
                    <Link to="/home">Home</Link>
                </p>
                <button onClick={this.logout}>Logout</button>
                <Link to='/register'>
                    
                </Link>
            </div>
        :
        <h1>Please Login!</h1>    
        }
        </div>
    }
}


const mapStateToProps = state => state;

export default connect(mapStateToProps, {getUser})(Header);