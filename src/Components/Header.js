import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {getUser} from '../redux/userReducer';

class Header extends Component {
    
    componentDidMount(){
        this.props.getUser();
    }

    logout = () => {
        axios.post('/api/logout');
    }

    render(){
        return <div classname='header'>
            {this.props.isLoggedIn ?
            <div>
                <h5>Welcome, {this.props.user.username}</h5>
                <Link to='/'>Login/Signup</Link>
                <Link to='/home'>Home</Link>
                <button onClick={this.logout}>Logout</button>
            </div>
            :

            <h1>Please Login</h1>
        }
        </div>
    }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, {getUser})(Header)