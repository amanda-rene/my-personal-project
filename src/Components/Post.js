import React, {Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {addPost} from '../redux/postReducer';
import 'antd/dist/antd.css';
import TextField from '@material-ui/core/TextField'
import {Link} from 'react-router-dom'
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';


class Post extends Component{
    constructor(props){
        super(props);

        this.state = {
            technique: '',
            notes: '',
            dateTrained: '',
            newPost: false,
        }
        
   
       
    }

    addPost = async (e) => {
        e.preventDefault();
        const {technique, notes, dateTrained } = this.state;
        try {
            const post  = await axios.post
            ('/api/add/post', {technique, notes, dateTrained })
            // this.props.addPost(post.data)
            this.props.history.push('/api/home')
        }
        catch {
            alert (`Couldn't add post :/`) 
            
        }
    }

    // componentDidMount(){
    //     axios.post('api/add/post')
    //     .then (res => {
    //         this.setState({...res.data, newPost:true})
    //     })
    // }

    changeHandler = (e) => {
        // console.log(e.target.value)
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    toggleNewPost = () => {
        this.setState({
            newPost: !this.state.newPost
        })
    }

    toggleShowFunc = () => {
        this.setState((prevState)=> {
            return{
            toggleShow: !prevState.toggleShow
            }
        })
    }

    render(){
        
    
        return (
            <div>
                <header className='header'>
                    <nav className={`nav-bar ${this.state.toggleShow ? "show" : ""}`}>
                    <ul>
                        <li><Link to="/api/home">Home</Link></li>
                        <li><Link to='/logout'>Logout</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to='/add/post'>Add Training</Link></li>
                        
                    </ul>
                </nav>
                <input onClick={this.toggleShowFunc} alt='menu-icon' type='image' src={MenuRoundedIcon} id='nav-btn'/>
                <h1>Add Training</h1>
                </header>


               <form onSubmit={this.addPost}>
                   <h3>Technique</h3>
                   <input
                    type='text'
                    placeholder='technique'
                    name='technique'
                    value={this.state.technique}
                    onChange={this.changeHandler}/>
                <br></br>
                    <h3>Notes</h3>
                    <input
                    type='text'
                    placeholder='notes'
                    name='notes'
                    value={this.state.notes}
                    onChange={this.changeHandler}/>
              
                <h3>Date Trained</h3>
                <TextField
                    type='date'
                    name='dateTrained'
                    value={this.state.dateTrained}
                    onChange={this.changeHandler}/>
                <br></br>
                <br></br>
                <input type='submit' value='Add Post' onClick={this.toggleNewPost}/>
               
               </form>
                
                
                
            </div>
        )
    }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, {addPost}) (Post);