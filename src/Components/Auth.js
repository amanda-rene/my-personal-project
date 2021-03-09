import React, {Component} from 'react';
import {connect} from 'react-redux';
import {loginUser} from '../redux/userReducer';
import axios from 'axios';

class Auth extends Component {
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
            const user = await axios.post('/api/login', {email, password})
            this.props.loginUser(user.data)
            this.props.history.push('/home')
        }
        catch {
            alert('Failed Login Attempt :/')
        }
    }

    register = async (e) => {
        e.preventDefault();
        const {email, username, password} = this.state
        try {
            const user = await axios.post('/api/register', email, username, password)
            this.props.loginUser(user.data);
            this.props.history.push('/home')
        }
        catch {
            alert ('Failed Login Attempt :/')
        }
    }


    toggleNewUser = () => {
        this.setState({
            newUser: !this.state.newUser
        })
    }

    changeHandler = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render(){
        return <div className='auth'>
            <header className='header'><h1>Welcome!!!</h1></header>
            {!this.state.newUser ?
            
            <form className='login-form' onSubmit={this.login}>
                <h2>Login</h2>
                <input
                className='form-field'
                type='text'
                placeholder='email'
                name='email'
                value={this.state.email}
                onChange={this.changeHandler}/>

                <input
                className='form-field'
                type='password'
                placeholder='password'
                name='password'
                value={this.state.password}
                onChange={this.changeHandler}/>
                <br></br>
                <button 
                className='btn draw-border'
                type='submit'
                value='Login'
                >Login</button>
                <br></br>
                <button className='btn draw-border'  onClick={this.toggleNewUser}>Sign Up!</button>
            </form>
            :
            
            <form className='reg-form' onSubmit={this.register}>
                <h2>Register</h2>
                <input
                className='form-field'
                type='text'
                placeholder='email'
                name='email'
                value={this.state.email}
                onChange={this.changeHandler}/>

                <input 
                className='form-field'
                type='text'
                placeholder='username'
                name='username'
                value={this.state.username}
                onChange={this.changeHandler}/>

                <input
                className='form-field'
                type='password'
                placeholder='password'
                name='password'
                value={this.state.password}
                onChange={this.changeHandler}/>
                <br></br>
                <input
                className='btn draw-border'
                type='Submit'
                value='Login'/>
                <br></br>
                <button className='btn draw-border' onClick={this.toggleNewUser}>Register Here!</button>
            </form>
        }
        
    
        </div>
    }
}
const mapStateToProps = state => state;

export default connect(mapStateToProps, {loginUser})(Auth);