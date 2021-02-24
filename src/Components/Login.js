import React, {Component} from 'react';
import axios from 'axios';
import {loginUser} from '../redux/userReducer';
import {connect} from 'react-redux';

class Login extends Component{
    constructor(){
        super();
        this.state = {
            email: '',
            username: '',
            password: '',
            newUser: false
        }
    }

    login = async (e) => {
        e.preventDefault();
        const {email, password} = this.state;
        try {
            const user = await axios.post('api/login', {email, password})
            this.props.loginUser(user.data)
            this.props.history.push('/home')
        }
        catch {
            alert('Failed Login Attempt :/')
        }
    }

    register = async (e) => {
        e.preventDefault();
        const {email, password, username} = this.state;
        try {
            const user = await axios.get('/api.register', {email, password, username})
            this.props.loginUser(user.data)
            this.props.history.push('/home')
        }
        catch {
            alert('Failed Register Attempt :/')
        }
    }

    toggleNewUser = () => {
        this.setState({
            newUser: !this.state.newUser
        })
    }

    changeHandler =e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render(){
        return <div classname="login">
            {!this.state.newUser ?
            <form onSubmit={this.login}>
                <h2>Login</h2>
                <input
                type='text'
                placeholder='email'
                value={this.state.email}
                onChange={this.changeHandler}/>
                <input 
                type='password'
                placeholder='password'
                value={this.state.password}
                onChange={this.changeHandler}/>
                <input
                type='submit'
                value='Login'/>
                <button onClick={this.toggleNewUser}>Sign Up Here!</button>
            </form>
            :
            <form onSubmit={this.register}>
                <h2>REGISTER</h2>
                <input
                type='text'
                placeholder='email'
                name='email'
                value={this.state.email}
                onChange={this.changeHandler}/>
                <input
                type='text'
                placeholder='username'
                name='username'
                value={this.state.username}
                onChange={this.changeHandler}/>
                <input 
                type='text'
                placeholder='password'
                name='password'
                value={this.state.password}
                onChange={this.changeHandler}/>
                <button onClick={this.toggleNewUser}>Log In Here</button>
            </form>
    }
        </div>
    }

}

const mapStateToProps = state => state

export default connect(mapStateToProps, {loginUser})(Login);
