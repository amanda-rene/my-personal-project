import React, {Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {addPost} from '../redux/postReducer';

import TextField from '@material-ui/core/TextField'
import {Link} from 'react-router-dom'
import MenuRoundedIcon from '@material-ui/icons/MenuOpenRounded';


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
            this.props.history.push('/home')
        }
        catch {
            alert (`Couldn't add post :/`) 
            
        }
    }

   

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
                <header className='header'><h1>Add Training</h1>
                    <nav className={`nav-bar ${this.state.toggleShow ? "show" : ""}`}>
                    <ul>
                        <li><Link to="/home">Home</Link></li>
                        <li><Link to='/logout'>Logout</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to='/add/post'>Add Training</Link></li>
                        <li><Link to = '/display'>Display</Link></li>
                    </ul>
                </nav>
                <MenuRoundedIcon onClick={this.toggleShowFunc} alt='menu-icon' type='image' src={MenuRoundedIcon} id='nav-btn'/>
                
                </header>


               <form 
               className='form-field' 
               onSubmit={this.addPost}
               style={{
                   display: 'flex',
                   marginLeft: '850px',
                   marginTop: '100px',
                   paddingTop: '100px'
               }}>
                   <h3>Technique</h3>
                   <input
                   className='form-field'
                    type='text'
                    placeholder='technique'
                    name='technique'
                    value={this.state.technique}
                    onChange={this.changeHandler}/>
                <br></br>
                    <h3>Notes</h3>
                    <input
                    className='form-field'
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
                <button className='btn draw-border' type='submit' value='Add Post' onClick={this.toggleNewPost}>Add Post</button>
               
               </form>
                
                
                
            </div>
        )
    }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, {addPost}) (Post);