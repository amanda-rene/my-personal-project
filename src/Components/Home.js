import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import {connect} from 'react-redux';
// import {postReducer} from '../redux/postReducer'
import {getUser} from '../redux/userReducer'
import axios from 'axios'

class Home extends Component{

    constructor(){
        super();
        this.state = {
            toggleShow: false
        }
    }

    componentDidMount(){
        this.props.getUser()
    }
    
    toggleShowFunc = () => {
        this.setState((prevState)=> {
            return{
            toggleShow: !prevState.toggleShow
            }
        })
    }

     componentDidMount(){
        axios.get('/api/home')
        .then (res => {
            this.setState({...res.data})
        })
    }

        // didmount .get 
    render(){
    return(
        <div>
        <header className='header'><h1>Welcome, {this.props.user.username}</h1>
        <nav className={`nav-bar ${this.state.toggleShow ? "show" : ""}`}>
                    <ul>
                        <li><Link to="/api/home">Home</Link></li>
                        <li><Link to='/logout'>Logout</Link></li>
                        <li><Link to="/api/home">About</Link></li>
                        <li><Link to='/add/post'>Add Training</Link></li>
                        
                    </ul>
                </nav>
                <input onClick={this.toggleShowFunc} alt='menu-icon' type='image' src={MenuRoundedIcon} id='nav-btn'/>
        </header>

        
    </div>
    )
}
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, {getUser})(Home);