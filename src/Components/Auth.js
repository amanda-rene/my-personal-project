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

                <button 
               
                type='submit'
                value='Login'
                style={{
                        background: "#3D94F6",
                        backgroundImage: "-webkit-linear-gradient(top, #3D94F6, #1E62D0)",
                        backgroundImage: "-moz-linear-gradient(top, #3D94F6, #1E62D0)",
                        backgroundImage: "-ms-linear-gradient(top, #3D94F6, #1E62D0)",
                        backgroundImage: "-o-linear-gradient(top, #3D94F6, #1E62D0)",
                        backgroundImage: "-webkit-gradient(to bottom, #3D94F6, #1E62D0)",
                        // -webkit-border-radius: "20px",
                        // -moz-border-radius: "20px",
                        borderRadius: "20px",
                        height: "7px",
                        lineHeight: "7px",
                        color: "#FFFFFF",
                        fontFamily: "Brush Script MT",
                        width: "92px",
                        fontSize: "16px",
                        padding: "13px",
                        webkitBoxShadow: "inset 1px 1px 20px 0 #934003",
                        mozBoxShadow: "inset 1px 1px 20px 0 #934003",
                        boxShadow:" inset 1px 1px 20px 0 #934003",
                        textShadow: "1px 1px 20px #000000",
                        border: "groove #B54705 1px",
                        textDecoration: "none",
                        display: "inline-block",
                        cursor:" pointer",
                        textAlign: "center"
                      }
                      
                    //   button:hover {
                    //     border: ridge #337FED 1px,
                    //     background: #1E62D0,
                    //     background-image: -webkit-linear-gradient(top, #1E62D0, #3D94F6),
                    //     background-image: -moz-linear-gradient(top, #1E62D0, #3D94F6),
                    //     background-image: -ms-linear-gradient(top, #1E62D0, #3D94F6),
                    //     background-image: -o-linear-gradient(top, #1E62D0, #3D94F6),
                    //     background-image: -webkit-gradient(to bottom, #1E62D0, #3D94F6),
                    //     -webkit-border-radius: 20px,
                    //     -moz-border-radius: 20px,
                    //     border-radius: 20px,
                    //     text-decoration: none
                    //   } 
                }>Login</button>
                <button  onClick={this.toggleNewUser}>Sign Up!</button>
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

                <input
                type='Submit'
                value='Login'/>
                <button className='button' onClick={this.toggleNewUser}>Register Here!</button>
            </form>
        }
        
    
        </div>
    }
}
const mapStateToProps = state => state;

export default connect(mapStateToProps, {loginUser})(Auth);